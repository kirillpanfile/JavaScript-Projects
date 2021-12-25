const buttons: NodeListOf<Element> = document.querySelectorAll('.button');
const content = <HTMLElement>document.querySelector('.content').lastChild;
const body = <HTMLElement>document.body;
async function fetchData(): Promise<JSON> {
    const data: Response = await fetch("http://127.0.0.1:5500/Color%20Flipper/colors.json");
    const response: JSON = await data.json()
    return response;
}
(async function () {
    let data = await fetchData()
    let color: number = 0;
    buttons.forEach((element: HTMLElement) => {
        element.addEventListener("click", () => {
            if (color == Object.keys(data).length) color = 0;
            if (color == -1) color = Object.keys(data).length - 1;
            content.innerHTML = data[color];
            body.style.background = `${data[color]}`
            element.dataset.dir == "next" ? color += 1 : color -= 1;
        })
    });
})()
