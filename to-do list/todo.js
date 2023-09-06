const todolist = [
    {
        name: 'Shopping',
        date: '2023-12-22'
    }, {
        name: 'Check Mails',
        date: '2023-12-22'
    }];

render();

function render() {
    let todolistHTML = '';
    for (let i = 0; i < todolist.length; i++) {
        const todoObj = todolist[i];
        //const name = todoObj.name;
        //const { name } = todoObj;
        //const date = todoObj.date;
        //const { date } = todoObj;
        const { name, date } = todoObj
        const html = `<div>${name}</div> <div>${date}</div> <div> <button class="del" onclick='todolist.splice(${i},1);render();'> Delete</button></div>`;
        todolistHTML += html;
    }

    //console.log(todolistHTML);

    document.querySelector('.js-todo').innerHTML = todolistHTML;
}
function addTodo() {
    const inputElement = document.querySelector('.name-input');
    const name = inputElement.value;

    const dateElement = document.querySelector('.date-input');
    const date = dateElement.value;

    todolist.push({
        name, date
    });
    //console.log(todolist);

    inputElement.value = '';
    render();
}
