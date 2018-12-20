"use strict";

let giftList = new GiftList(30);

document.getElementById("gift").addEventListener("click", (e) => {
    let result = giftList.next();
    if (result) {
        addRecord(result.gift, result.classmate);
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
