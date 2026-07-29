document.addEventListener("DOMContentLoaded", function(){


let products = {};



// =====================
// ورود مدیریت
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


products={};


showProducts();


});


}







// =====================
// نمایش محصولات
// =====================


function showProducts(){


const list =
document.getElementById("list");



if(!list) return;



list.innerHTML =
`
<div style="
text-align:center;
color:#d4af37;
margin-bottom:20px;
">

تعداد محصولات:
${Object.keys(products).length}

</div>
`;



Object.keys(products).forEach(code=>{


const p =
products[code];



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


<br>


تاریخ ثبت:
${p.created || "نامشخص"}


<br>


وضعیت:
${p.active ? "فعال":"غیرفعال"}


</div>


`;



});


}







// =====================
// ثبت محصول جدید
// =====================


const addButton =
document.getElementById("addProduct");



if(addButton){


addButton.onclick=function(){



const serial =
document.getElementById("serial")
.value.trim();




if(serial===""){


alert("❌ شماره سریال وارد نشده است");


return;


}





// جلوگیری از سریال تکراری


if(products[serial]){


alert(
"❌ این شماره سریال قبلاً ثبت شده است"
);


return;


}





const today =
new Date()
.toISOString()
.split("T")[0];





products[serial]={



active:true,


name:
document.getElementById("name").value.trim(),



purity:
document.getElementById("purity").value.trim(),



weight:
document.getElementById("weight").value.trim(),




media:{


type:
document.getElementById("mediaType").value,


src:
document.getElementById("mediaSrc").value.trim()


},




certificate:{


title:
"گواهی اصالت و مالکیت FARVAM",


status:
"اصالت محصول تأیید شده",



description:
document.getElementById("description").value.trim()


},




created:
today



};





showProducts();


downloadJSON();



alert(
"✅ محصول با موفقیت ثبت شد"
);



};



}







// =====================
// خروجی JSON
// =====================


function downloadJSON(){



const json =
JSON.stringify(
products,
null,
2
);



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
