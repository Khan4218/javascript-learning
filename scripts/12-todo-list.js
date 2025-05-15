const todoList = [{
  name: 'makde dinnner',
  dueDate: '2022-12-22'
}, {

  name: 'wash',
  dueDate: '2022-12-22'
}];

renderTodoList();

document.querySelector('.js-add-button')
  .addEventListener('click', () => {
    addTodo();
  });






function renderTodoList() {
  let todoListHTML = '';

  todoList.forEach((todoObject, index) => {
    const { name, dueDate } = todoObject;
    const html = `

    <div class="todo-grid">${name}</div>
     <div class="todo-grid">${dueDate}</div>
      
      <button class="delete-button js-delete-button">Delete</button> 
       
    `;

    todoListHTML += html;
  });



  document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;

  document.querySelectorAll('.js-delete-button').forEach((deleteButton, index) => {
    deleteButton.addEventListener('click', () => {
      todoList.splice(index, 1);
      renderTodoList();
    });
  }

  );




}

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date');
  const dueDate = dateInputElement.value;

  todoList.push({
    // name: name,
    // dueDate: dueDate
    name,
    dueDate

  });


  inputElement.value = '';

  renderTodoList();



}

