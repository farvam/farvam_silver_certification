document.addEventListener("DOMContentLoaded", function(){


    // برگشت به ابتدای صفحه هنگام ورود

    window.scrollTo({
        top:0,
        behavior:"instant"
    });



    // ساخت ذرات طلایی

    const particlesBox =
    document.getElementById("goldParticles");


    if(particlesBox){


        for(let i=0; i<40; i++){


            let particle =
            document.createElement("span");


            particle.className="particle";


            particle.style.left =
            Math.random()*100 + "%";


            particle.style.animationDelay =
            Math.random()*8 + "s";


            particle.style.animationDuration =
            (5 + Math.random()*8) + "s";


            particlesBox.appendChild(particle);


        }

    }





    // انیمیشن کارت ها هنگام اسکرول


    const cards =
    document.querySelectorAll(".card");


    function showCards(){


        cards.forEach(card=>{


            let position =
            card.getBoundingClientRect().top;


            if(position < window.innerHeight - 100){


                card.classList.add("show");


            }


        });


    }


    window.addEventListener(
    "scroll",
    showCards
    );


    showCards();



});





// استعلام شماره سریال آزمایشی


document.addEventListener("DOMContentLoaded",()=>{


const button =
document.getElementById("checkSerial");


if(button){


button.addEventListener("click",()=>{


let serial =
document.getElementById("serialInput").value.trim();


let result =
document.getElementById("result");



if(serial==="FS000001"){


result.innerHTML=
`
<div style="color:#00ff88;text-align:center">

🟢 اصالت محصول تأیید شد

<br><br>

FARVAM FINE SILVER

<br>

عیار 999.9

<br>

100 گرم

</div>
`;



}else{


result.innerHTML=
`
<div style="color:red;text-align:center">

❌ شماره سریال معتبر نیست

</div>
`;

}


});


}



});
