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


    const checkButton =
    document.getElementById("checkSerial");


    const serialInput =
    document.getElementById("serialInput");


    const result =
    document.getElementById("result");



    if(checkButton && serialInput && result){



        checkButton.addEventListener("click", function(){



            let serial =
            serialInput.value.trim();



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



            }else{



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


alert("SERIAL SCRIPT LOADED");
});
