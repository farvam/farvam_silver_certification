document.addEventListener("DOMContentLoaded", function () {


    // رفتن به ابتدای صفحه بعد از ورود

    setTimeout(function(){

        window.scrollTo(0,0);

    },100);



    // ساخت ذرات طلایی

    const particlesBox = document.getElementById("goldParticles");


    if(particlesBox){


        for(let i=0; i<50; i++){


            let particle = document.createElement("span");

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





    // انیمیشن کارت ها


    const cards =
    document.querySelectorAll(".card");


    function checkCards(){


        cards.forEach(card=>{


            let top =
            card.getBoundingClientRect().top;



            if(top < window.innerHeight - 100){


                card.classList.add("show");


            }


        });


    }



    window.addEventListener(
        "scroll",
        checkCards
    );


    checkCards();





    // استعلام سریال


    const button =
    document.getElementById("checkSerial");


    if(button){


        button.addEventListener(
        "click",
        function(){


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

                وزن: 100 گرم

                </div>
                `;


            }

            else{


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
