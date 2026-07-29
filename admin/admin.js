document.addEventListener("DOMContentLoaded",()=>{


// =====================
// ورود
// =====================


const loginBtn =
document.getElementById("loginBtn");


loginBtn.onclick=function(){


let user =
document.getElementById("adminUser").value.trim();


let pass =
document.getElementById("adminPass").value.trim();



if(
user==="farvam"
&&
pass==="9999"
){


document.getElementById("loginBox").style.display="none";


document.getElementById("adminPanel").style.display="block";


loadProducts();


}

else{


document.getElementById("loginMessage").innerHTML=
"❌ نام کاربری یا رمز اشتباه است";


}


};





// =====================
// محصولات
// =====================


let products={};



function loadProducts(){


fetch("../products.json?v="+Date.now())

.then(res=>res.json())

.then(data=>{


products=data;


showProducts();


})


.catch(()=>{


document.getElementById("list").innerHTML=
"خطا در دریافت محصولات";


});


}





function showProducts(){


let list =
document.getElementById("list");


list.innerHTML="";



Object.keys(products).forEach(code=>{


let p=products[code];


list.innerHTML +=`

<div class="productItem">


<b>
${code}
</b>


<br><br>


${p.name}


<br>


عیار:
${p.purity}


<br>


وزن:
${p.weight}



</div>


`;


});


}





});
