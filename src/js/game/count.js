
export async function count_text(){
    return 
    updateText("Ready ?")
    await waitForMs(500)
    updateText("3")
    await waitForMs(500)
    updateText("2")
    await waitForMs(500)
    updateText("1")
    await waitForMs(500)
}


function waitForMs(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}



function updateText(newValue) {
    const textElement = document.querySelector(".text-count");
    textElement.classList.remove("animate");
    void textElement.offsetWidth;
    textElement.classList.add("animate");
    textElement.textContent = newValue;
}