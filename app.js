var todos =["hacer la comida"];
var input = prompt("What would you like to do? ");

while (input !== "quit"){
	if(input=== "list"){
	listTodos();		
	}
	else if(input=== "new"){
		newTodo();		
	}
	else if(input === "delete"){
		deleteTodos();
	}
	//ask again for a new todo
	input = prompt("What would you like to do? ");
}
console.log("OK, you quit the app");



function listTodos(){
	console.log("############");
	todos.forEach(function(todo,i){
		console.log(i + ": " + todo);		
		})
		console.log("############");
	}

function newTodo (){
	var newTodo = prompt("Enter new to do");
	todos.push(newTodo);
}

function deleteTodos(){
	var index= prompt ("Enter index to delete");
		//delete from the todos list
		todos.splice(index,1);
	}

