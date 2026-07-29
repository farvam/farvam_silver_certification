/* ===================================
FARVAM V2
Main Script
Part 1
=================================== */


document.addEventListener(
"DOMContentLoaded",
function(){



/* ===================================
برگشت به ابتدای صفحه
=================================== */


window.history.scrollRestoration = "manual";


setTimeout(()=>{


window.scrollTo({

top:0,

left:0,

behavior:"instant"

});


},500);







/* ===================================
ذرات طلایی
=================================== */


const particlesBox = 
document.getElementById("goldParticles");



if(particlesBox){



for(let i=0;i<70;i++){



let particle =
document.createElement("span");



particle.classList.add(
"particle"
);



particle.style.left =
Math.random()*100+"%";



particle.style.animationDelay =
Math.random()*8+"s";



particle.style.animationDuration =
(5+Math.random()*10)+"s";



particlesBox.appendChild(
particle
);



}



}








/* ===================================
متغیرهای محصول
=================================== */


const checkButton =
document.getElementById(
"checkSerial"
);



const serialInput =
document.getElementById(
"serialInput"
);



const result =
document.getElementById(
"result"
);



const productVideo =
document.getElementById(
"productVideo"
);



const productSource =
document.getElementById(
"productVideoSource"
);



const placeholder =
document.getElementById(
"productPlaceholder"
);



const productDetails =
document.getElementById(
"productDetails"
);



const productName =
document.getElementById(
"productName"
);



const productInfo =
document.getElementById(
"productInfo"
);
  /* ===================================
بررسی اصالت محصول
خواندن از products.json
=================================== */


if(
checkButton &&
serialInput &&
result
){



checkButton.addEventListener(
"click",
async function(){



let serial =
serialInput.value.trim();




if(serial === ""){


result.innerHTML = `

<div class="errorBox">

لطفاً شماره سریال محصول را وارد کنید

</div>

`;


return;


}






try{



const response =
await fetch(
"./products.json?v="+Date.now()
);



const products =
await response.json();





if(products[serial] &&
products[serial].active === true
){



const product =
products[serial];






/* =====================
نمایش فیلم محصول
===================== */


if(
product.media &&
product.media.src
){



productSource.src =
product.media.src;



productVideo.style.display =
"block";



placeholder.style.display =
"none";



productVideo.load();



productVideo.play()
.catch(
error=>{

console.log(
"Video autoplay blocked",
error
);

}

);



}







/* =====================
نمایش اطلاعات محصول
===================== */


productName.innerHTML =
product.name;




productInfo.innerHTML = `

عیار:
${product.purity}

<br>

وزن:
${product.weight}

<br><br>

${product.certificate.status}

`;






productDetails.classList.remove(
"hidden"
);







/* =====================
پیام تایید
===================== */


result.innerHTML = `

<div class="successBox">


🟢 اصالت محصول تأیید شد


<br><br>


${product.name}


<br><br>


FARVAM Certification System


</div>


`;







}

else{



result.innerHTML = `

<div class="errorBox">

❌ شماره سریال در سیستم FARVAM ثبت نشده است

</div>

`;



}




}

catch(error){



console.log(error);



result.innerHTML = `

<div class="errorBox">

خطا در اتصال به سیستم اصالت

</div>

`;



}



});



}

  /* ===================================
باشگاه مشتریان FARVAM
=================================== */


const customerName =
document.getElementById(
"customerName"
);



const customerPhone =
document.getElementById(
"customerPhone"
);



const registerCustomer =
document.getElementById(
"registerCustomer"
);



const customerResult =
document.getElementById(
"customerResult"
);




if(
registerCustomer &&
customerName &&
customerPhone
){



registerCustomer.addEventListener(
"click",
function(){



let name =
customerName.value.trim();



let phone =
customerPhone.value.trim();





if(
name === "" ||
phone === ""
){


customerResult.innerHTML = `

لطفاً اطلاعات را کامل وارد کنید

`;

return;


}







/*
فعلاً ذخیره محلی برای تست

در نسخه VPS به دیتابیس وصل می‌شود
*/


let customers =
JSON.parse(
localStorage.getItem(
"farvamCustomers"
)
)
||
[];





customers.push({

name:name,

phone:phone,

date:
new Date().toISOString()

});





localStorage.setItem(

"farvamCustomers",

JSON.stringify(customers)

);







customerResult.innerHTML = `

<div class="successBox">

✅ عضویت شما در باشگاه مشتریان FARVAM ثبت شد

</div>

`;





customerName.value="";

customerPhone.value="";





});



}








/* ===================================
افکت ورود کارت ها
=================================== */


const cards =
document.querySelectorAll(
".productCard"
);



if(cards.length){


cards.forEach(
(card,index)=>{


card.style.animationDelay =
(index*0.2)+"s";


});


}







/* ===================================
جلوگیری از برگشت اسکرول هنگام رفرش
=================================== */


window.addEventListener(
"load",
function(){


setTimeout(
()=>{


window.scrollTo({

top:0,

left:0

});


},
300
);


});





});
