const list = [];
const input=document.getElementById('input');
const addbutton = document.getElementById('button');


function render(){
    const mainDiv = document.createElement('div');
    mainDiv.setAttribute('class', 'list');

    for(let i = 0; i < list.length; i++){
        const div = document.createElement('div');
        div.setAttribute('class', 'todoBlock');
        const p = document.createElement('p');
        p.innerText = list[i].text;
        div.append(p);

        const buttons = document.createElement('div');
        buttons.setAttribute('class', 'actions');
        const changeButton = document.createElement('button');
        changeButton.setAttribute('class', 'change');
        changeButton.innerText = "change";
        const deleteButton = document.createElement('button');
        deleteButton.setAttribute('class', 'delete');
        deleteButton.innerText = "delete";
        buttons.append(changeButton, deleteButton);
        div.append(buttons);
        mainDiv.append(div);
    }
    const form = document.querySelector('.form');
    form.append(mainDiv);
}

addbutton.onclick=function() {
    const obj = {
        id: list.length+1,
        text: input.value
    }
    list.push(obj);
    render();
}