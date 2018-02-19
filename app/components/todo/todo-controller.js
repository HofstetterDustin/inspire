function TodoController() {
	// new up the TodoService that has already been configured for your use
	// You will need four methods
	// getTodos should request your api/todos and give an array of todos to your callback fn
	// addTodo takes in a todo and posts it to the server
	// toggleTodoStatus takes in a todo marks its status as completed and puts it to the server
	// removeTodo takes in a todoId and sends a delete request to the server
	// **** HINT: Everytime you make a change to any todo don't forget to get the todo list again
	var todoElem = document.getElementById('todos-here')
	var todoService = new TodoService()

	// Use this getTodos function as your callback for all other edits
	function getTodos(){
		//FYI DONT EDIT ME :)
		todoService.getTodos(draw)
	}

	function draw(todos) {
		//WHAT IS MY PURPOSE?
		//BUILD YOUR TODO TEMPLATE HERE
		var template = ''
		//debugger
		if (todos.length < 1){
			todoElem.innerHTML = '<h3>The force is stronge with you.</h3>'
			return
		}
		todos.forEach(todos => {
			template += `
			<div class="card p-1 flex space-between">
				<div class="Details">
					${todos.info}
				</div>
<!--place edit here-->			
			</div>
				<form>
					<div class="form-group">
						<div>
							<input type="text" name="tasks" class="form-control">
							<button type="submit">Add Task</button>
						</div>
					</div>
				</form>
				`
		})
		//DONT FORGET TO LOOP
		todosElem.innerHTML = template
	}
	//debugger
	console.log("draw todos Ctrl")
	
	
	this.addTodoFromForm = function addTodoFromForm(e) {
		e.preventDefault() // <-- hey this time its a freebie don't forget this
		//debugger
		// TAKE THE INFORMATION FORM THE FORM
		var form = e.target
		//debugger
		var todo = {
			task: form.tasks.value
			//input property of the task form// may include a status here too.
			// DONT FORGET TO BUILD YOUR TODO OBJECT
		}
		
		//PASSES THE NEW TODO TO YOUR SERVICE
		//DON'T FORGET TO REDRAW THE SCREEN WITH THE NEW TODO
		//YOU SHOULDN'T NEED TO CHANGE THIS
		todoService.addTodo(todo, getTodos)
		//^^^^^^^ EXAMPLE OF HOW TO GET YOUR TOODOS AFTER AN EDIT
		console.log("addTodoFromForm Ctrl")							 
	}
	
	this.toggleTodoStatus = function (todoId) {
		// asks the service to edit the todo status						//toggle research//
		todoService.toggleTodoStatus(todoId, getTodos)
		// YEP THATS IT FOR ME
		console.log("toggleTodoStatus Ctrl")
	}
	
	this.removeTodo = function removeTodo(id) {
		todoService.removeTodo(id, draw)
		// ask the service to run the remove todo with this id
		
		// ^^^^ THIS LINE OF CODE PROBABLY LOOKS VERY SIMILAR TO THE toggleTodoStatus
		console.log("removeTodo Ctrl")
	}
	
	// IF YOU WANT YOUR TODO LIST TO DRAW WHEN THE PAGE FIRST LOADS WHAT SHOULD YOU CALL HERE???
	
	getTodos()
}
