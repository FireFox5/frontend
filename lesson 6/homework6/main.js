//homework 6.1
// const first = ['name1','name2']
// const second = ['name3','name4']
// const third = ['name5','name6']
// const forth = ['name7','name8']
// const fifth = ['name9','name10']
//
// const all=[...first,second,third,forth,fifth]
// console.log(all)

// const one = [{
//     name:'Fire',
//     surname:'Fox',
//     age:2903

// }
// ]
// const new_one = [{
//     ...one,
//     address:'street ASU',
//     school:'Somewhere in the sky'
// }]
// console.log(new_one)
// const name = prompt('enter your name')
// const name1 = [name]
// const greeting = ['hello ',...name1]
// console.log(greeting)
const btn = document.getElementById("btn");
const input = document.getElementById("input");
const pTag = document.getElementById("show-text");
btn.onclick = () => {
  console.log("asdasd");
  input.addEventListener("change", (e) => {
    pTag.innerHTML = `Hello ${e.target.value}`;
  });
};