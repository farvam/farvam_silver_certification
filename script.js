document.addEventListener("DOMContentLoaded", function(){


// =====================
// برگشت به اول صفحه
// =====================

window.history.scrollRestoration = "manual";


setTimeout(()=>{

window.scrollTo(0,0);

},500);




// =====================
// ذرات طلایی
// =====================

const particlesBox =
document.getElementById("goldParticles");


if(particlesBox){


for(let i=0;i<60;i++){


let particle =
document.createElement("span");


particle.classList.add("particle");


particle.style.left =
Math.random()*100+"%";


particle.style.animationDelay =
Math.random()*10+"s";


particle.style.animationDuration =
(5+Math.random()*10)+"s";


particlesBox.appendChild(particle);


}


}





// =====================
// انیمیشن کارت ها
// =====================


const cards =
document.querySelectorAll(".card");



const observer =
new IntersectionObserver(function(entries){


entries.forEach(entry=>{


if(entry.isIntersecting){

entry.target.classList.add("show");

}


});


},{
threshold:0.3
});



cards.forEach(card=>{

observer.observe(card);

});









// =====================
// بررسی اصالت محصول
// =====================


const checkButton =
document.getElementById("checkSerial");


const serialInput =
document.getElementById("serialInput");


const result =
document.getElementById("result");





if(checkButton && serialInput && result){



checkButton.addEventListener("click", async function(){



let serial =
serialInput.value.trim();





if(serial===""){


result.innerHTML = `

<div style="
color:#ff4444;
text-align:center;
padding:20px;
">

❌ لطفاً شماره سریال را وارد کنید

</div>

`;

return;

}





try{



const response =
await fetch("products.json",{
cache:"no-store"
});



const products =
await response.json();



const product =
products[serial];






// محصول پیدا شد


if(product){



// بررسی فعال بودن


if(product.active === false){


result.innerHTML = `

<div style="
color:#ff9900;
text-align:center;
padding:20px;
">

⚠️ این محصول در حال حاضر غیرفعال است

</div>

`;

return;

}





// =====================
// تغییر فیلم محصول
// =====================


const video =
document.getElementById("productMedia");



if(video && product.media){



if(product.media.type==="video"){



video.innerHTML = `

<source 
src="${product.media.src}"
type="video/mp4">

`;



video.load();


}


}







// =====================
// اطلاعات محصول
// =====================


const name =
document.getElementById("productName");



const info =
document.getElementById("productInfo");



if(name){

name.innerHTML =
product.name;

}



if(info){

info.innerHTML =

`
عیار: ${product.purity}

<br><br>

وزن: ${product.weight}

`;

}








// =====================
// گواهی اصالت
// =====================


if(product.certificate){



const title =
document.getElementById("certificateTitle");


const text =
document.getElementById("certificateText");



if(title){

title.innerHTML =
product.certificate.title;

}



if(text){

text.innerHTML =
product.certificate.description;

}



}







// پیام موفقیت


result.innerHTML = `

<div style="
color:#00ff88;
text-align:center;
padding:25px;
border:1px solid #d4af37;
border-radius:20px;
">


🟢 اصالت محصول تأیید شد


<br><br>


${product.name}


<br><br>


محصول ثبت شده در سیستم FARVAM


</div>

`;




}

else{



result.innerHTML = `

<div style="
color:#ff4444;
text-align:center;
padding:20px;
">

❌ شماره سریال در سیستم FARVAM ثبت نشده است

</div>

`;



}





}

catch(error){



console.log(error);



result.innerHTML = `

<div style="
color:red;
text-align:center;
">

خطا در اتصال به سیستم

</div>

`;



}



});


}



});
