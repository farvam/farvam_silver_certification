document.addEventListener("DOMContentLoaded", function(){



let products = {};



// =====================
// ورود
// =====================


const loginBtn =
document.getElementById("loginBtn");



if(loginBtn){


loginBtn.onclick=function(){


const user =
document.getElementById("adminUser").value.trim();


const pass =
document.getElementById("adminPass").value.trim();



if(
user === ADMIN_CONFIG.username &&
pass === ADMIN_CONFIG.password
){


document.getElementById("loginBox").style.display="none";


document.getElementById("adminPanel").style.display="block";


loadProducts();


}

else{


document.getElementById("loginMessage").innerHTML =
"❌ اطلاعات ورود اشتباه است";


}


};


}





// =====================
// دریافت محصولات
// =====================


function loadProducts(){


fetch("../products.json?v="+Date.now())


.then(response=>response.json())


.then(data=>{


products=data;


showProducts();


})


.catch(error=>{


console.log(error);


document.getElementById("list").innerHTML =
"خطا در خواندن محصولات";


});


}






// =====================
// نمایش محصولات
// =====================


function showProducts(){


const list =
document.getElementById("list");



if(!list) return;



list.innerHTML="";



Object.keys(products).forEach(code=>{


let p=products[code];


list.innerHTML += `


<div class="productItem">


<b>
${code}
</b>


<br><br>


نام:
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






// =====================
// ثبت محصول
// =====================


const addButton =
document.getElementById("addProduct");



if(addButton){


addButton.onclick=function(){



let serial =
document.getElementById("serial").value.trim();



if(serial===""){


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



alert("✅ محصول ساخته شد و فایل JSON آماده شد");



};


}







// =====================
// ساخت فایل JSON
// =====================


function downloadJSON(){



const json =
JSON.stringify(products,null,2);



const blob =
new Blob(
[json],
{
type:"application/json"
}
);



const url =
URL.createObjectURL(blob);



const a =
document.createElement("a");


a.href=url;


a.download="products.json";


document.body.appendChild(a);


a.click();


document.body.removeChild(a);



URL.revokeObjectURL(url);



}



});
