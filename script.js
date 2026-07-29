document.addEventListener("DOMContentLoaded", function(){


    // برگشت به اول صفحه بعد از ورود

  window.history.scrollRestoration = "manual";


setTimeout(()=>{

    window.scrollTo({
        top:0,
        left:0,
        behavior:"instant"
    });

},500);


setTimeout(()=>{

    window.scrollTo({
        top:0,
        left:0,
        behavior:"instant"
    });

},2000);


    // =====================
    // ذرات طلایی
    // =====================


    const particlesBox = document.getElementById("goldParticles");


    if(particlesBox){


        for(let i=0; i<60; i++){


            let particle = document.createElement("span");


            particle.classList.add("particle");


            particle.style.left =
            Math.random()*100 + "%";


            particle.style.animationDelay =
            Math.random()*10 + "s";


            particle.style.animationDuration =
            (5 + Math.random()*10) + "s";


            particlesBox.appendChild(particle);


        }


    }





    // =====================
    // انیمیشن کارت ها
    // =====================


    const cards = document.querySelectorAll(".card");


    const observer = new IntersectionObserver(

        function(entries){


            entries.forEach(entry=>{


                if(entry.isIntersecting){


                    entry.target.classList.add("show");


                }


            });


        },

        {

            threshold:0.3

        }


    );



    cards.forEach(card=>{


        observer.observe(card);


    });


// =====================
// بررسی اصالت محصول
// =====================


const checkButton = document.getElementById("checkSerial");


if(checkButton){


    checkButton.addEventListener("click", function(){


        const serial =
        document.getElementById("serialInput").value.trim();



        const result =
        document.getElementById("result");



        if(serial === "FS000001"){


            result.innerHTML = `

            <div style="
            color:#00ff88;
            text-align:center;
            padding:20px;
            border:1px solid #00ff88;
            border-radius:15px;
            ">

            🟢 اصالت محصول تأیید شد

            <br><br>

            FARVAM FINE SILVER

            <br>

            عیار 999.9

            <br>

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
            border:1px solid red;
            border-radius:15px;
            ">

            ❌ شماره سریال معتبر نیست

            </div>

            `;


        }



    });


}

});
