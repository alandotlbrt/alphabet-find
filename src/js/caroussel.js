const carouselText = [
    { text: "ABCDEFG", color: "#a92475" },
    { text: "WDDZADJ", color: "#4b796e" },
    { text: "DZDIAZODAZJD", color: "#ffc501" }
];


async function typeSentence(sentence, eleRef, delay = 100) {
    const letters = sentence.split("");
    let i = 0;
    const element = document.querySelector(eleRef);
    while (i < letters.length) {
        await waitForMs(delay);
        element.textContent += letters[i];
        i++;
    }
}


async function deleteSentence(eleRef) {
    const element = document.querySelector(eleRef);
    const letters = element.textContent.split(""); 
    while (letters.length > 0) {
        await waitForMs(100);
        letters.pop(); 
        element.textContent = letters.join(""); 
    }
}


function waitForMs(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}


async function carousel(carouselList, eleRef) {
    await waitForMs(1000);
    let i = 0;
    while (true) {
        /* updateFontColor(eleRef, carouselList[i].color); */
        await typeSentence(carouselList[i].text, eleRef);
        await waitForMs(1500);
        await deleteSentence(eleRef);
        await waitForMs(500);
        i++;
        if (i >= carouselList.length) {
            i = 0;
        }
    }
}

carousel(carouselText, "#carousel");



/*
function updateFontColor(eleRef, color) {
    const element = document.querySelector(eleRef);
    element.style.color = color; 
} */