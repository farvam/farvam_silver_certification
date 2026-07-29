alert("ggggg");
window.onload = function(){

    window.scrollTo(0,0);

};
document.addEventListener("DOMContentLoaded", async function(){


    // خواندن تنظیمات سایت

    let settings;


    try{


        const response = await fetch("data.json");


        settings = await response.json();


    }

    catch(error){


        console.log("خطا در دریافت تنظیمات");


        return;


    }



    const config = settings.settings;



    /*
    فعال و غیرفعال کردن بخش ها
    */


    if(config.show_video === false){

        document.querySelector(".product").style.display="none";

    }



    if(config.show_logo === false){

        document.querySelector(".brand").style.display="none";

    }



    if(config.show_certificate === false){

        document.querySelector(".certificate").style.display="none";

    }



    if(config.customer_register === false){

        document.querySelector(".customer").style.display="none";

    }



    if(config.serial_enabled === false){

        document.querySelector("#serialSection").style.display="none";

    }



});






/*
--------------------------------

استعلام شماره سریال

فعلا آزمایشی

بعداً وصل به Firebase می‌شود

--------------------------------
*/

document.addEventListener("DOMContentLoaded", function(){


const serialButton = document.querySelector(
"#serialSection button"
);


if(serialButton){


serialButton.addEventListener(
"click",
function(){


let serial =
document.querySelector("#serialSection input").value.trim();


let result =
document.querySelector("#result");



if(serial === "FS000001"){


result.innerHTML = `

<div class="success">

🟢 اصالت محصول تأیید شد

<br><br>

FARVAM FINE SILVER

<br>

عیار 999.9

<br>

وزن: 100 گرم

</div>

`;


}

else{


result.innerHTML = `

<div class="error">

❌ شماره سریال معتبر نیست

</div>

`;

}


});


}


});

const cards =
document.querySelectorAll(".card");


window.addEventListener("scroll",()=>{


cards.forEach(card=>{


let position =
card.getBoundingClientRect().top;


if(position < window.innerHeight - 100){

card.classList.add("show");

}

let container =
document.getElementById("goldParticles");


for(let i=0;i<40;i++){


let p=document.createElement("span");


p.className="particle";


p.style.left =
Math.random()*100+"%";


p.style.animationDelay =
Math.random()*8+"s";


container.appendChild(p);


}
});


});
});


}
