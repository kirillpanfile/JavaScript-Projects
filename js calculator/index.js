const display = document.getElementById("display")
const equal = document.getElementById("equal")
const buttons = Array.from(document.querySelectorAll(".button"))


buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if (button.innerText != "C" && button.innerText != "←" && button.innerText != "=") display.innerText += button.innerText
        if (button.innerText == "C") display.innerText = ''
        if (button.innerText == "←") if (display.innerText) display.innerText = `${display.innerText.slice(0, -2)}`
        if (button.innerText == "=") {
            try {
                display.innerText = eval(display.innerText)
            } catch (error) {
                console.error(error);
            }
        }
    })
})