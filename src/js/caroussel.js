const carouselText = [
    { letter:"D", text: "ABCDEFG", color: "blue" },
    { letter:"A", text: "ABCDEFG", color: "#a92475" },
    { letter:"G", text: "ABCDEFG", color: "#a92475" },
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
    const arrow = document.querySelector("#arrow");
    const { letter, text, color } = config;
    const element = document.querySelector(eleRef);
    const cursor = document.querySelector(".input-cursor");

    if (!element) {
        console.error(`L'élément avec le sélecteur "${eleRef}" n'a pas été trouvé.`);
        return;
    }

    const index = text.indexOf(letter);
    if (index === -1) {
        console.error(`La lettre "${letter}" n'a pas été trouvée dans le texte "${text}".`);
        return;
    }

    element.innerHTML = `<span style="color: ${color}; font-weight: bold;">${letter}</span>`;

    const left = text.slice(0, index).split("").reverse();
    const right = text.slice(index + 1).split("");

    const addLetterWithAnimation = async (char, position = "left") => {
        const span = document.createElement('span');
        span.textContent = char;
        span.style.color = 'green';
        span.style.transition = 'color 0.5s ease';

        if (position === "left") {
            element.prepend(span);
        } else {
            element.append(span);
        }

        await waitForMs(500);
        span.style.color = 'white';
    };

    const setCursorPosition = (position) => {
        if (position === "left") {
            cursor.classList.add("cursor-left");
            element.parentNode.insertBefore(cursor, element);
        } else {
            cursor.classList.remove("cursor-left");
            element.parentNode.appendChild(cursor);
        }
    };

    for (const char of left) {
        arrow.textContent = "←";
        setCursorPosition("left");
        await waitForMs(delay);
        await addLetterWithAnimation(char, "left");
    }

    for (const char of right) {
        arrow.textContent = "→";
        setCursorPosition("right");
        await waitForMs(delay);
        await addLetterWithAnimation(char, "right");
    }
    arrow.textContent = "nice! ";

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