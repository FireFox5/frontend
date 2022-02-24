// console.log(document);
// console.log('dragon');
// //get elements in dom
// const blocks = document.getElementsByClassName('block');
// console.log(blocks);
// const block3 = document.getElementById('block3');
// // block3.classList.add('changedClass');
// // block3.classList.remove('newclass');
// // console.log(block3.classList);
// //
// // block3.classList.toggle('active');
// const block =  document.querySelector('.block');
// const block1 = document.querySelectorAll('.block');
// // console.log(block1);
// // console.log(block);
// //
// //
// // console.log(block.attributes[0].value);
const button = document.getElementById('button');
const input = document.getElementById('input');

button.onclick=()=>  {
    const div = document.createElement('div');
    const deleteButton = document.createElement('button')
    deleteButton.innerText ='delete';
    deleteButton.onclick = (e)=>{
        console.log(e)
    }
    div.setAttribute('class','block');
    div.innerText = input.value;
    document.body.append(div);
}
// button.onclick = createSomethingNew;
//для добавление нового дива




















// button.onclick= (event)=> {
//     console.log(event)
//     console.log('clicked!!!');
// }
// input.onchange = (event)=>{
//     console.log(event);
//     console.log(event.target);
//     console.log(event.target.value);
// }
// button.addEventListener('click',(e)=>{
//     console.log(e);
// })
//
// input.addEventListener('change',(e)=>{
//     console.log(e.target.value);
//     }
// )
