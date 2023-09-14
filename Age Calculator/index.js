
let birthday = document.querySelector("#birthday");
let btn = document.querySelector("#btn");
let result = document.querySelector("#result");


function calculateAge(){
    const birthdayValue = birthday.value;
    if(birthdayValue === ""){
        alert("Please enter your BirthDay");
    }
    else{
        const age = getAge(birthdayValue);
        result.innerText = `You are ${age} ${age > 1 ? "Years": "Year"} old`;
    }

    birthday.value= "";
};


function getAge(birthdayValue){
    const currentDate = new Date();
    const birthdayDate = new Date(birthdayValue);

    let age = currentDate.getFullYear() - birthdayDate.getFullYear();
    const month = currentDate.getMonth() - birthdayDate.getMonth();

    if(month < 0 || (month === 0 && currentDate.getDate() < birthdayDate.getDate())){
        age--;
    }
    return age;
};

btn.addEventListener("click", calculateAge);


