# Simple Calculator

![Screenshot_2](https://github.com/YunusEmreGungorDev/Simple_Calculator/assets/141125700/d064d8e7-93fc-4510-bacc-6d5376ba7d1f)

## HTML

### CALCULATOR

     <div class="calculator">
        <header>...
        </header>
        <div class="transactions">...
        </div>

#### HEADER

    <header>
            <input id="input" type="text" class="submit">
            <button id="btn-clr">C</button>
    </header>

#### TRANSACTİONS

    <div class="transactions">
            <div class="center">
                <button class="btn" id="no1">1</button>
            <button class="btn" id="no2">2</button>
            <button class="btn" id="no3">3</button>
            <button class="btn" id="no4">4</button>
            <button class="btn" id="no5">5</button>
            <button class="btn" id="no6">6</button>
            <button class="btn" id="no7">7</button>
            <button class="btn" id="no8">8</button>
            <button class="btn" id="no9">9</button>
            <button class="btn" id="no0">0</button>
            <button class="btn" id="dot">.</button>
            <button class="btn" id="equal" class="equal">=</button>
            </div>
            <div class="side">
            <button class="btn" id="plus">+</button>
            <button class="btn" id="minus">-</button>
            <button class="btn" id="impact">*</button>
            <button class="btn" id="divide">/</button>
            </div>

        </div>

## JS

#### LET

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

#### EQUAL AND CLEAR EVENTS

    +btnEqualDOM.addEventListener("click", solve);
    btnclr.addEventListener("click", clr);

#### ARRAY

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

#### FUNCTIONS

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

## CSS

      <style>
        * {
            box-sizing: border-box;
        }
        body{
            background-color: dodgerblue;
            display: grid;
            justify-content: center;
        }
        .calculator{
            width: 600px;
            background-color: white;
            text-align: center;
            margin-top: 30%;
            border-radius: 10px;
            padding: 10px;
        }


        header{
            display: flex;
            justify-content: space-between;
            align-items: center;
            border: 1px solid rgb(179, 176, 176);
            border-radius: 10px;
            padding: 10px;
        }
        header input{
            width: 100%;
            height: 50px;
            font-size: 30px;
            border: none;
            outline: none;
        }

        header #btn-clr{
            font-size: 30px;
            width: 50px;
            height: 50px;
            cursor: pointer;
            color: white;
            background-color: dodgerblue;
            border: none;
            border-radius: 5px;
        }

        .transactions{
            display: grid;
            grid-template-columns: auto auto;
        }

        .transactions .center{
            display: grid;
            grid-template-columns: auto auto auto;
            padding: 20px 20px 0 0;
            grid-gap: 10px;
            transition: ease-in;

        }

        .transactions .center button{
            border: none;
            border-radius: 10px;
            width: 100%;
            text-align: center;
            padding: 20px;
            font-size: 20px;
        }

        .transactions .side{
            display: grid;
            grid-template-columns: auto;
            margin-top:20px;
            grid-gap: 10px;
            transition: ease-in;
        }

        .transactions .side button{
            border: none;
            border-radius: 10px;
            width: 100%;
            height: 62px;
            text-align: center;
            align-items: center;
            font-size: 20px;
        }

        .transactions button:active{
            background-color: dodgerblue;
            color: white;
        }

        .transactions #equal{
            background-color: dodgerblue;
            color: white;
        }
        .transactions #equal:active{
            background-color: rgb(103, 179, 255);
        }
