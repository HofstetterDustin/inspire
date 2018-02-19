function TodoService() {
	// A local copy of your todos
	var todoList = []
	var baseUrl = 'https://inspire-server.herokuapp.com/api/DarthHofstetter/'

	function logError(err) {
		console.error('UMM SOMETHING BROKE: ', err)
		//CAN YOU NOTIFY THE USER IF SOMETHING BREAKS? 
		//do this without breaking the controller/service responsibilities
	}

	this.getTodos = function getTodos(draw) {
		 //debugger
		$.get(baseUrl)
			.then(function (res) { // <-- WHY IS THIS IMPORTANT????
				todoList = res
				console.log(todoList)
				draw(todoList)
			})
			.fail(logError)
			console.log ("getTodos Service")
	}

	this.addTodo = function addTodo(task,draw) {
		// WHAT IS THIS FOR???
		//var todo = new todo(task)
		$.post(baseUrl, task)
			.then(res =>{ // <-- WHAT DO YOU DO AFTER CREATING A NEW TODO?
				todoList.unshift(res.task)
				draw(todoList)
			}) 
			.fail(logError)
	console.log("addTodos Service")
	}

	this.toggleTodoStatus = function (todoId) {
		// MAKE SURE WE THINK THIS ONE THROUGH
		//STEP 1: Find the todo by its index **HINT** todoList

		//STEP 2: Change the completed flag to the opposite of what is is **HINT** todo.completed = !todo.completed

		//STEP 3: Here is that weird Ajax request because $.put doesn't exist
		$.ajax({
			method: 'PUT',
			contentType: 'application/json',
			url: baseUrl + '/' + todoId,
			data: JSON.stringify(YOURTODOVARIABLEHERE)
		})
			.then(function (res) {
				//DO YOU WANT TO DO ANYTHING WITH THIS?
				this.getTodos(draw)
			})
			.fail(logError)
	console.log("toggleTodoStatus Service")
	}

	this.removeTodo = function () {
		// Umm this one is on you to write.... It's also unique, like the ajax call above. The method is a DELETE
		$.ajax({
			url:baseUrl + '/' + id,
			method: 'DELETE'
		})
			.then(res => {
				this.getTodos(draw)
			})
	console.log("removeTodo Service")
	}

}
