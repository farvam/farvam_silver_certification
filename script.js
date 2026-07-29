document.addEventListener("DOMContentLoaded", function(){


    // برگشت به اول صفحه بعد از ورود

    window.history.scrollRestoration = "manual";

    window.scrollTo(0,0);




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




});
