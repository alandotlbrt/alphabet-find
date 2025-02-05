const carouselText = [
    { letter:"B", text: "ABCEFGHIG", color: "#744b76" },
    { letter:"A", text: "ABC", color: "#744b76" },
    { letter:"C", text: "ABC", color: "#744b76" },


];

function waitForMs(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}



async function typeSentence(sentence, eleRef, delay = 100) {
    const letters = sentence.split("");
    let i = 0;
    const element = document.querySelector(eleRef);
    console.log(eleRef, element)
    while (i < letters.length) {
        await waitForMs(delay);
        element.textContent += letters[i];
        i++;
    }
}
async function typeWithCenterLetter(config, eleRef, delay = 250) {
    const { letter, text, color } = config;
    const element = document.querySelector(eleRef);

    if (!element) {
        console.error(`L'élément avec le sélecteur "${eleRef}" n'a pas été trouvé.`);
        return;
    }

    const index = text.indexOf(letter);
    if (index === -1) {
        console.error(`La lettre "${letter}" n'a pas été trouvée dans le texte "${text}".`);
        return;
    }

    element.innerHTML = ""; 

    for (let i = 0; i < text.length; i++) {
        const span = document.createElement("span");

        if (i === index) {
            span.innerHTML = `<span style="color: ${color}; font-weight: bold;letter-spacing: 8px">${letter}</span>`;
        } else {
            span.textContent = "_";
            span.classList.add("placeholder");
        }

        element.appendChild(span);

        await waitForMs(100);
    }

    const placeholders = element.querySelectorAll(".placeholder");
    const left = text.slice(0, index).split("");
    const right = text.slice(index + 1).split("");

    const addLetterWithAnimation = async (char, position) => {
        const span = placeholders[position];

        await waitForMs(100);
        span.textContent = char;
        span.style.color = "#4D764B"; 

        await waitForMs(500);
        span.style.color = "white";
    };

    for (let i = left.length - 1; i >= 0; i--) {
        await waitForMs(delay);
        await addLetterWithAnimation(left[i], i);
    }

    for (let i = 0; i < right.length; i++) {
        await waitForMs(delay);
        await addLetterWithAnimation(right[i], index + i);
    }
}
async function deleteSentence(eleRef, delay = 100) {
    const element = document.querySelector(eleRef);

    if (!element) {
        console.error(`L'élément avec le sélecteur "${eleRef}" n'a pas été trouvé.`);
        return;
    }

    while (element.textContent.length > 0) {
        await waitForMs(delay);

        const lastChild = element.lastChild;

        if (lastChild.nodeType === Node.TEXT_NODE) {
            lastChild.textContent = lastChild.textContent.slice(0, -1);

            if (lastChild.textContent.length === 0) {
                element.removeChild(lastChild);
            }
        } else if (lastChild.nodeType === Node.ELEMENT_NODE) {
            element.removeChild(lastChild);
        }
    }
}
async function carousel(carouselList, eleRef) {
    await waitForMs(500); 
    await deleteSentence(eleRef);
    
    await waitForMs(750); 
    let i = 0;

    while (true) {
        const { letter, text, color } = carouselList[i];

        await typeWithCenterLetter({ letter, text, color }, eleRef, 200);

        await waitForMs(1750); 

        await deleteSentence(eleRef);

        await waitForMs(750);

        i = (i + 1) % carouselList.length; 
    }
}
 carousel(carouselText, "#carousel");   




/*
function updateFontColor(eleRef, color) {
    const element = document.querySelector(eleRef);
    element.style.color = color; 
} */