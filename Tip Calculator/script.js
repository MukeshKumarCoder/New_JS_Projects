
let bill = document.getElementById("bill");
let tip = document.getElementById("tip");
let btn = document.getElementById("btn");
let total = document.getElementById("total");


function calculateTotal(){
    const billValue = bill.value;
    const tipValue = tip.value;
    const totalValue = billValue * (1 + tipValue / 100);
    total.innerText = totalValue.toFixed(2);
}

btn.addEventListener("click", calculateTotal);