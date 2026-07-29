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
// بررسی اصالت از فایل محصولات
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



        try{


            const response =
            await fetch("products.json?v=1");


            const products =
            await response.json();



            if(products[serial]){


                let product =
                products[serial];



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


                <br>


                عیار: ${product.purity}


                <br>


                وزن: ${product.weight}


                <br><br>


                ${product.status}


                <br><br>


                ${product.description}


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


            result.innerHTML = `

            <div style="color:red;text-align:center">

            خطا در اتصال به سیستم

            </div>

            `;


            console.log(error);


        }



    });


}


});
