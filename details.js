const sumDate = document.getElementById("sumDate");
const sumTime = document.getElementById("sumTime");
const sumDuration = document.getElementById("sumDuration");
const sumSla = document.getElementById("sumSla");
const sumSlc = document.getElementById("sumSlc");
const sumFa = document.getElementById("sumFa");
const sumFc = document.getElementById("sumFc");
const sumInf = document.getElementById("sumInf");
const sumTotal = document.getElementById("sumTotal");

const sumFullname = document.getElementById("sumfullname");
const sumMobile = document.getElementById("sumMobile");
const sumGender = document.getElementById("sumGender");
const sumEmail = document.getElementById("sumEmail");
const sumConmail = document.getElementById("sumConEmail");

document.addEventListener("DOMContentLoaded", function () {
    const csnValuesString = localStorage.getItem("csnValues");
    if (csnValuesString) {
        const csnValues = JSON.parse(csnValuesString);
        sumDate.innerText = "Date: " + csnValues.date;
        sumTime.innerText = "Time: " + csnValues.timeSlot;
        sumDuration.innerText = "Duration: " + csnValues.timeSlot.split("-")[0].trim() + " hrs " +
            (csnValues.timeSlot.includes("0:") || csnValues.timeSlot.includes("1:") ? "(" + "PEAK" : "(" + "NORMAL") + ")";
        sumSla.innerText = csnValues.slAdult + " SL Adult : $" + csnValues.slAdult * (csnValues.timeSlot.includes("10:") || csnValues.timeSlot.includes("11:") ? 6 : 4);
        sumSlc.innerText = csnValues.slChild + " SL Child : $" + csnValues.slChild * (csnValues.timeSlot.includes("10:") || csnValues.timeSlot.includes("11:") ? 3 : 2);
        sumFa.innerText = csnValues.foreignerAdult + " Foreigner Adult : $" + csnValues.foreignerAdult * (csnValues.timeSlot.includes("10:") || csnValues.timeSlot.includes("11:") ? 13 : 10);
        sumFc.innerText = csnValues.foreignerChild + " Foreigner Child : $" + csnValues.foreignerChild * (csnValues.timeSlot.includes("10:") || csnValues.timeSlot.includes("11:") ? 8 : 5);
        sumInf.innerText = csnValues.infant + " Infant : Free";
        sumTotal.innerText = "TOTAL : $" + csnValues.total;

        sumFullname.innerText = "Name: " + csnValues.fullname;
        sumMobile.innerText = "Phone Number: " + csnValues.mobile;
        sumGender.innerHTML = "Gender: "+ csnValues.gender
        sumEmail.innerText = "Email: " + csnValues.mail;
        sumConmail.innerText = "Confirmed-Email: " + csnValues.conmail;
     }
});

const form = document.querySelector("form");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    
    const fullname = document.getElementById("fn").value;
    const mobile = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const conEmail = document.getElementById("conEmail").value;
    const gender = document.getElementById("gender").value;

    const csnValues = JSON.parse(localStorage.getItem("csnValues"));
    csnValues.fullname = fullname;
    csnValues.mobile = mobile;
    csnValues.mail = email;
    csnValues.conmail = conEmail;
    csnValues.gender = gender;
    
    localStorage.setItem("csnValues", JSON.stringify(csnValues));
    
    sumFullname.innerText = "Name: " + fullname;
    sumMobile.innerText = "Phone Number: " + mobile;
    sumGender.innerText = "Gender: " + gender;
    sumEmail.innerText = "Email: " + email;
    sumConmail.innerText = "Confirmed-Email: " + conEmail;
});

form = document.querySelector("form");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    
    const fullname = document.getElementById("fn").value;
    const mobile = document.getElementById("phone").value;
    const gender = document.getElementById("gender").value;
    const email = document.getElementById("email").value;
    const conEmail = document.getElementById("conEmail").value;


    const csnValues = JSON.parse(localStorage.getItem("csnValues"));
    csnValues.fullname = fullname;
    csnValues.mobile = mobile;
    csnValues.gender = gender;
    csnValues.mail = email;
    csnValues.conmail = conEmail;
    
    localStorage.setItem("csnValues", JSON.stringify(csnValues));
    
    sumFullname.innerText = "Name: " + fullname;
    sumMobile.innerText = "Phone Number: " + mobile;
    sumGender.innerText = "Gender: " + gender;
    sumEmail.innerText = "Email: " + email;
    sumConmail.innerText = "Confirmed-Email: " + conEmail;

    window.location.href = "payment.html";
});
