import app from "../main.js";

const carouselText = [
    { letter:"B", text: "ABCDEFGH", color: "#744b76" },
    { letter:"A", text: "ABC", color: "#744b76" },
    { letter:"C", text: "ABC", color: "#744b76" },


];

function waitForMs(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
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

    const cursor = document.getElementById('cursor');
    cursor.style.visibility = "visible"
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
     const cursor = document.getElementById('cursor');
    cursor.style.visibility = "hidden"


}
export async function carousel( eleRef) {
    let carouselList = carouselText
    await waitForMs(500); 
    await deleteSentence(eleRef);
    
    await waitForMs(750); 
    let i = 0;

    while (true) {
        if(!document.querySelector(eleRef)){
            break
        }
        
        const { letter, text, color } = carouselList[i];

        await typeWithCenterLetter({ letter, text, color }, eleRef, 200);

        await waitForMs(1750); 

        await deleteSentence(eleRef);

        await waitForMs(750);

        i = (i + 1) % carouselList.length; 
    }
}


export function random_failchat(score, fail_message=""){
    const sentence = [
        'Close enough!',
        'Oups..',
        "Next time, you've got this!",
        "Really.. You sure about that?..",
        "Well, at least you tried!",
        "Are you sure of your alphabet..?"
    ]

    if (fail_message == "time"){
        if (Math.random() < 1/3) {
            return 'Not fast enough..' ||" You have to be fast !.."
        }
    }

    if (score>10){
        if (Math.random() < 2/3) {
            return 'Not bad...';
        }
    }

    if (score>20){
        if (Math.random() < 2/3) {
            return "Waw you're very good!";
        }
    }

    return sentence[Math.floor(Math.random() * sentence.length)]
}

