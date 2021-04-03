let toDo = document.querySelector('input');
let buttonCreate = document.querySelector('.create');
let result = document.querySelector('.result');
let clearButton = document.querySelector('.clear');


if(localStorage.length>0){
    let key = localStorage.key(0);
    let data = localStorage.getItem(key);

    //result.innerHTML = data;
}

function save(){
    let input = document.querySelector('input');
    let inputValue = input.value;
    let block = document.querySelector('.block');
    input.remove();
    let p = document.createElement('p');
    block.prepend(p);
    p.textContent = inputValue;
    let saveButton = block.querySelector('.save');
    saveButton.remove();
}

function createList (){
    let block = document.createElement('div');
    block.classList.add("block");
    
    block.innerHTML +=`
    <p>${toDo.value}</p>
    <div class="setings">
        <button type="button" class="edit">Edit</button>
        <button type="button" class="delete">Delete</button>
    </div>`

    result.prepend(block);

    localStorage.setItem('toDoItem', toDo.value);
    let deleteButton = document.querySelector('.delete');

    deleteButton.addEventListener('click', (Event) =>{
        let elem = Event.target;
        
        elem.parentNode.parentNode.remove();
        
    })

    let editButton = document.querySelector('.edit');
    editButton.addEventListener('click', (Event) =>{
        let p = document.querySelector('p');
        let pValue = p.textContent;
        let block = document.querySelector('.block');
        let elem = Event.target;
        block.removeChild(p);
        let input = document.createElement('input');
        let saveBtn = document.createElement('button');
        saveBtn.textContent = "SAVE";
        saveBtn.classList.add("save");
        block.prepend(input, saveBtn)
        input.classList.add("editInput");
        input.value = pValue;

        saveBtn.addEventListener('click', save)
    })


}

function clearBody(){
    localStorage.clear();
    location.reload();
    //let toDos = document.querySelectorAll('.block');
    //console.log(toDos);
    
    
}

buttonCreate.addEventListener('click', createList);

clearButton.addEventListener('click', clearBody);

