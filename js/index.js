"use strict";

let giftList = new GiftList(30);
let correct = new Audio("audio/correct.mp3");

document.getElementById("gift").addEventListener("click", (e) => {
    let result = giftList.next();
    if (result) {
        addRecord(result.gift, result.classmate);
        
        correct.pause();
        correct.currentTime = 0;
        correct.play();
    }
});

/**
 * 
 * @param {number} gift 
 * @param {string} classmate 
 */
function addRecord(gift, classmate) {
    let records = document.getElementById("record");
    if (records.children[0].innerText == "No record") {
        records.children[0].remove();
    }

    document.getElementById("result").innerText = classmate;

    let record = document.createElement("li");
    record.innerText = `Gift #${ gift.toString().padStart(2, "0") }: ${ classmate }`;
    records.appendChild(record);
}
