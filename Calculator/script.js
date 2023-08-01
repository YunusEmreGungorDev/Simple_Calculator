let inputDOM = document.querySelector("#input");
let btn1DOM = document.querySelector("#no1");
let btn2DOM = document.querySelector("#no2");
let btn3DOM = document.querySelector("#no3");
let btn4DOM = document.querySelector("#no4");
let btn5DOM = document.querySelector("#no5");
let btn6DOM = document.querySelector("#no6");
let btn7DOM = document.querySelector("#no7");
let btn8DOM = document.querySelector("#no8");
let btn9DOM = document.querySelector("#no9");
let btn0DOM = document.querySelector("#no0");
let btnImpactDOM = document.querySelector("#impact");
let btnDivideDOM = document.querySelector("#divide");
let btnMinusDOM = document.querySelector("#minus");
let btnPlusDOM = document.querySelector("#plus");
let btnEqualDOM = document.querySelector("#equal");
let btnDotDOM = document.querySelector("#dot");
let btnclr = document.querySelector("#btn-clr");

btnEqualDOM.addEventListener("click", solve);
btnclr.addEventListener("click", clr);
array = [
  btn0DOM.addEventListener("click", domClick),
  btn1DOM.addEventListener("click", domClick),
  btn2DOM.addEventListener("click", domClick),
  btn3DOM.addEventListener("click", domClick),
  btn4DOM.addEventListener("click", domClick),
  btn5DOM.addEventListener("click", domClick),
  btn6DOM.addEventListener("click", domClick),
  btn7DOM.addEventListener("click", domClick),
  btn8DOM.addEventListener("click", domClick),
  btn9DOM.addEventListener("click", domClick),
  btnImpactDOM.addEventListener("click", domClick),
  btnDivideDOM.addEventListener("click", domClick),
  btnMinusDOM.addEventListener("click", domClick),
  btnPlusDOM.addEventListener("click", domClick),
  btnDotDOM.addEventListener("click", domClick),
];

function domClick() {
  let index = 0;
  if (this.index == index.array) {
    inputDOM.value = inputDOM.value + this.textContent;
  }
}

function solve() {
  inputDOM.value = eval(inputDOM.value);
}

function clr() {
  inputDOM.value = "";
}
