const dateInput = document.getElementById("date");
const slaInput = document.getElementById("sla");
const slcInput = document.getElementById("slc");
const faInput = document.getElementById("fa");
const fcInput = document.getElementById("fc");
const infInput = document.getElementById("inf");

const timeSelect = document.getElementById("time-slot");
const purchaseButton = document.getElementById("purchase-button");
const sumDate = document.getElementById("sumDate");
const sumTime = document.getElementById("sumTime");
const sumDuration = document.getElementById("sumDuration");
const sumSla = document.getElementById("sumSla");
const sumSlc = document.getElementById("sumSlc");
const sumFa = document.getElementById("sumFa");
const sumFc = document.getElementById("sumFc");
const sumInf = document.getElementById("sumInf");
const sumTotal = document.getElementById("sumTotal");

dateInput.addEventListener("change", updateSummaryTable);
slaInput.addEventListener("input", updateSummaryTable);
slcInput.addEventListener("input", updateSummaryTable);
faInput.addEventListener("input", updateSummaryTable);
fcInput.addEventListener("input", updateSummaryTable);
infInput.addEventListener("input", updateSummaryTable);
timeSelect.addEventListener("change", updateSummaryTable);

function updateSummaryTable() {
    const csnDate = dateInput.value;
    const slAdultTickets = parseInt(slaInput.value);
    const slChildTickets = parseInt(slcInput.value);
    const foreignerAdultTickets = parseInt(faInput.value);
    const foreignerChildTickets = parseInt(fcInput.value);
    const infantTickets = parseInt(infInput.value);
    const csnTimeSlot = timeSelect.value;

    const totalSlAdultCharge = slAdultTickets * (csnTimeSlot.includes("10:") || csnTimeSlot.includes("11:") ? 6 : 4);
    const totalSlChildCharge = slChildTickets * (csnTimeSlot.includes("10:") || csnTimeSlot.includes("11:") ? 3 : 2);
    const totalForeignerAdultCharge = foreignerAdultTickets * (csnTimeSlot.includes("10:") || csnTimeSlot.includes("11:") ? 13 : 10);
    const totalForeignerChildCharge = foreignerChildTickets * (csnTimeSlot.includes("10:") || csnTimeSlot.includes("11:") ? 8 : 5);
    const totalInfantCharge = 0; 

    const total = totalSlAdultCharge + totalSlChildCharge + totalForeignerAdultCharge + totalForeignerChildCharge;

    sumDate.innerText = "Date: " + csnDate;
    sumTime.innerText = "Time: " + csnTimeSlot;
    sumDuration.innerText = "Duration: " + csnTimeSlot.split("-")[0].trim() + " hrs " +
        (csnTimeSlot.includes("0:") || csnTimeSlot.includes("1:") ? "(" + "PEAK" : "(" + "NORMAL") + ")" ;
        
    sumSla.innerText = slAdultTickets + " SL Adult : $" + totalSlAdultCharge;
    sumSlc.innerText = slChildTickets + " SL Child : $" + totalSlChildCharge;
    sumFa.innerText = foreignerAdultTickets + " Foreigner Adult : $" + totalForeignerAdultCharge;
    sumFc.innerText = foreignerChildTickets + " Foreigner Child : $" + totalForeignerChildCharge;
    sumInf.innerText = infantTickets + " Infant : Free";
    sumTotal.innerText = "TOTAL : $" + total;

    if (csnDate && (slAdultTickets + slChildTickets + foreignerAdultTickets + foreignerChildTickets + infantTickets) > 0) {
        purchaseButton.disabled = false;
    } else {
        purchaseButton.disabled = true;
    }

    const csnValues = {
        date: csnDate,
        slAdult: slAdultTickets,
        slChild: slChildTickets,
        foreignerAdult: foreignerAdultTickets,
        foreignerChild: foreignerChildTickets,
        infant: infantTickets,
        timeSlot: csnTimeSlot,
        total: total
    };
    localStorage.setItem("csnValues", JSON.stringify(csnValues)) ;
}

document.addEventListener("DOMContentLoaded", function () {
    const csnValuesString = localStorage.getItem("csnValues");
    if (csnValuesString) {
        const csnValues = JSON.parse(csnValuesString);
        dateInput.value = csnValues.date;
        slaInput.value = csnValues.slAdult;
        slcInput.value = csnValues.slChild;
        faInput.value = csnValues.foreignerAdult;
        fcInput.value = csnValues.foreignerChild;
        infInput.value = csnValues.infant;
        timeSelect.value = csnValues.timeSlot;
        updateSummaryTable();
    }
});


