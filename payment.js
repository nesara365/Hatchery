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

const sumCn = document.getElementById("sumCn");
const sumEd = document.getElementById("sumEd");
const sumCvv = document.getElementById("sumCvv");
const sumNoc = document.getElementById("sumNoc");

document.addEventListener("DOMContentLoaded", function () {
    const csnValuesString = localStorage.getItem("csnValues");
    if (csnValuesString) {
        const csnValues = JSON.parse(csnValuesString);
        sumFullname.innerText = "Name: " + csnValues.fullname;
        sumMobile.innerText = "Phone Number: " + csnValues.mobile;
        sumGender.innerText = "Gender: " + csnValues.gender;
        sumEmail.innerText = "Email: " + csnValues.mail;
        sumConmail.innerText = "Confirmed-Email: " + csnValues.conmail;
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

        sumCn.innerText = "Card Number: " + csnValues.cn;
        sumEd.innerText = "Expiry Date: " + csnValues.ed;
        sumCvv.innerHTML = "CVC / CVV: "+ csnValues.cvv;
        sumNoc.innerText = "Name on Card: " + csnValues.noc;
        

        
    }
});
form = document.querySelector("form");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    
    const cn = document.getElementById("cn").value;
    const ed = document.getElementById("ed").value;
    const cvv = document.getElementById("cvv").value;
    const noc = document.getElementById("noc").value;

    const csnValues = JSON.parse(localStorage.getItem("csnValues"));
    csnValues.cn = cn;
    csnValues.ed = ed;
    csnValues.cvv = cvv;
    csnValues.noc = noc;
    
    localStorage.setItem("csnValues", JSON.stringify(csnValues));
    
    sumCn.innerText = "Card Number: " + csnValues.cn;
    sumEd.innerText = "Expiry Date: " + csnValues.ed;
    sumCvv.innerHTML = "CVC / CVV: "+ csnValues.cvv;
    sumNoc.innerText = "Name on Card: " + csnValues.noc;

});
