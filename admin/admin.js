document.addEventListener("DOMContentLoaded",()=>{


let products={};



// =================
// ورود
// =================


document
.getElementById("loginBtn")
.onclick=function(){



let user =
document.getElementById("adminUser").value.trim();



let pass =
document.getElementById("adminPass").value.trim();




if(
user === ADMIN_CONFIG.username &&
pass === ADMIN_CONFIG.password
){


document.getElementById("loginBox")
.style.display="none";


document.getElementById("adminPanel")
.style.display="block";


loadProducts();


}

else{


document.getElementById("loginMessage")
.innerHTML=
"❌ اطلاعات ورود اشتباه است";


}


};





// =================
// دریافت محصولات
// =================


function loadProducts(){


fetch("../products.json?v="+Date.now())


.then(res=>res.json())


.then(data=>{


products=data;


showProducts();


})


.catch(()=>{


document.getElementById("list")
.innerHTML=
"خطا در دریافت محصولات";


});


}





// =================
// نمایش محصولات
// =================


function showProducts(){


let list =
document.getElementById("list");


list.innerHTML="";



Object.keys(products)
.forEach(code=>{


let p=products[code];


list.innerHTML +=`

<div class="productItem">


<b>${code}</b>


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





// =================
// افزودن محصول
// =================


document
.getElementById("addProduct")
.onclick=function(){



let serial =
document.getElementById("serial")
.value.trim();



if(!serial){

alert("شماره سریال را وارد کنید");

return;

}



products[serial]={


active:true,


name:
document.getElementById("name").value,


purity:
document.getElementById("purity").value,


weight:
document.getElementById("weight").value,



media:{


type:
document.getElementById("mediaType").value,


src:
document.getElementById("mediaSrc").value


},



certificate:{


status:
"اصالت محصول تأیید شده",


description:
document.getElementById("description").value


}


};




showProducts();


downloadJSON();



};






function downloadJSON(){


let file =
JSON.stringify(products,null,2);



let blob =
new Blob([file],{
type:"application/json"
});



let link =
document.createElement("a");


link.href=
URL.createObjectURL(blob);



link.download=
"products.json";



link.click();


}



});
