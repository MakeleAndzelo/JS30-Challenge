const form = document.querySelector('.todo-form');
const taskList = document.querySelector('.todo-list');
const items = JSON.parse(localStorage.getItem('items')) || [];

function addTask(e) {
	e.preventDefault();

	const text = document.querySelector('.task-input').value;
	const item = {
		text,
		done: false,
	}
	items.push(item);

	localStorage.setItem('items', JSON.stringify(items));
	publicTasks(items);

	this.reset();
}

function publicTasks(items) {
	let tasks = '';
	let i = 0;
	items.forEach(item => {
		let checked = item.done ? 'checked' : '';
		tasks += `
			<li class="task"><label><input type="checkbox" data-index="${i}" id="item${i}" ${checked}><span>${item.text}</span></label></li>
		`;
		i++;
	})

	taskList.innerHTML = tasks;
}

function updateTask(e) {
	if(!e.target.matches('input')) return;
	let index = e.target.dataset.index;
	items[index].done = !items[index].done;
	localStorage.setItem('items', JSON.stringify(items));
}

form.addEventListener('submit', addTask);
taskList.addEventListener('click', updateTask);


publicTasks(items);