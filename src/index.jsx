import React from 'react';
import ReactDom from 'react-dom';
function addArr(){
    arr.push({mes:'Гранат',color:'красный'});
    elArr = arr.map(el => <div><p>{el.mes} {el.color}</p></div>);
    console.log(arr);
    perem = test(elArr);
    render(perem,container);
}
function test(){
    return(<div><button onClick={addArr}>добавить</button>
    {elArr}
    </div>);
}

function render(perem,container){
    ReactDom.render(perem,container);
}

let arr = [{mes:'Яблоко',color:'зеленое'},{mes:'груша',color:'желтая'}];
let elArr = arr.map(el => <div><p>{el.mes} {el.color}</p></div>);
const container = document.querySelector('#addmes');

let perem = test(elArr);

render(perem,container);

/*
const container3 = document.querySelector('#app');
const container2 = document.querySelector('#app2');
const container = document.querySelector('#addmes');
const content = <h2>Привет реакт!</h2>;
const content2 = <h3>можно рендерить куда хочешь</h3>;
const content3 = <input type="text" id="mes" placeholder="какой то текст"/>;
const c=<button id="btn" onClick={addMes}>Добавить</button>;
let arr = [{mes:"яблоко"}];
let ao=arr.map(el => <div>{el.mes}</div>);
function addMes(){
    var elem = document.querySelector('#mes');
    arr.push({mes:elem.value});
    ao=arr.map(el => <div>{el.mes}</div>);
    console.log(arr);
    ReactDom.render(<div>{content3}{c}
        {ao}
        </div>,container);
}
ReactDom.render(<div>{content3}{c}
                    {ao}
                    </div>,container);*/
//ReactDom.render(c,container);