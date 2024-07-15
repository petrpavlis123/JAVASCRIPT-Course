function addTodo() {
  const input = document.querySelector('.js-name-input');
  const todoList = document.getElementById('todo-list');

  const todoText = input.value.trim();
  if (todoText !== '') {
    const todoItem = document.createElement('p');
    todoItem.textContent = todoText;
    todoList.appendChild(todoItem);
    input.value = ''; // Clear the input field
  }
}