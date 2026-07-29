document.addEventListener("DOMContentLoaded", function(){


const list = document.getElementById("list");


const serialInput = document.getElementById("serial");
const nameInput = document.getElementById("name");
const purityInput = document.getElementById("purity");
const weightInput = document.getElementById("weight");



let products = {};



// خواندن محصولات فعلی

fetch("../products.json", {
    cache:"no-store"
})

.then(response => response.json())

.then(data => {

    products = data;

    showProducts();

})

.catch(error=>{

    list.innerHTML =
    "خطا در خواندن محصولات";

    console.log(error);

});





// نمایش محصولات

function showProducts(){


    list.innerHTML="";


    Object.keys(products).forEach(code=>{


        let product = products[code];


        list.innerHTML += `

        <div style="
        border:1px solid #d4af37;
        padding:15px;
        margin:10px;
        border-radius:15px;
        ">

        <b>${code}</b>

        <br><br>

        ${product.name}

        <br>

        عیار:
        ${product.purity}

        <br>

        وزن:
        ${product.weight}

        </div>

        `;


    });


}





// ثبت محصول جدید (فعلاً آزمایشی)

const button =
document.querySelector("button");


button.addEventListener("click",function(){


let serial =
serialInput.value.trim();


if(!serial){

alert("شماره سریال وارد کنید");

return;

}



products[serial]={

active:true,

name:nameInput.value,

purity:purityInput.value,

weight:weightInput.value,


certificate:{

status:"اصالت محصول تأیید شده",

description:"محصول ثبت شده در سیستم FARVAM"

}

};



showProducts();



alert(
"محصول به صورت آزمایشی اضافه شد"
);



});



});
