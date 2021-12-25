var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const buttons = document.querySelectorAll('.button');
const content = document.querySelector('.content').lastChild;
const body = document.body;
function fetchData() {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield fetch("http://127.0.0.1:5500/Color%20Flipper/colors.json");
        const response = yield data.json();
        return response;
    });
}
(function () {
    return __awaiter(this, void 0, void 0, function* () {
        let data = yield fetchData();
        let color = 0;
        buttons.forEach((element) => {
            element.addEventListener("click", () => {
                if (color == Object.keys(data).length)
                    color = 0;
                if (color == -1)
                    color = Object.keys(data).length - 1;
                content.innerHTML = data[color];
                body.style.background = `${data[color]}`;
                element.dataset.dir == "next" ? color += 1 : color -= 1;
            });
        });
    });
})();
//# sourceMappingURL=index.js.map