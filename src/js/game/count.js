
export async function count_text(){
    updateText("Ready ?")
    await waitForMs(1000)
    updateText("3")
    await waitForMs(1000)
    updateText("2")
    await waitForMs(1000)
    updateText("1")
    await waitForMs(1000)
    updateText("do your best!")
    await waitForMs(1000)
    return 
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