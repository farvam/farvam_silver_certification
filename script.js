
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


const serialButton = document.querySelector(
"#serialSection button"
);



if(serialButton){


serialButton.addEventListener(
"click",

function(){



const serialInput = document.querySelector(
"#serialSection input"
);



const result =
document.querySelector("#result");



let serial =
serialInput.value.trim();




if(serial === "FS000001"){


result.innerHTML =

`
<div style="
color:#00ff88;
font-size:20px;
text-align:center;
">

🟢 اصالت محصول تأیید شد

<br>

FARVAM FINE SILVER

<br>

عیار 999.9

<br>

100 گرم

</div>

`;



}

else{


result.innerHTML =

`
<div style="
color:red;
text-align:center;
font-size:20px;
">

❌ شماره سریال معتبر نیست

</div>

`;


}



});


}
