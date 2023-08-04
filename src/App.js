
import { useState } from "react";

function App() {
 let [todoInput, updateInput] = useState()


 let [todoList,updateTodos] = useState(
  [
    {
      id:1,
      task:'Learn React'

    },
    {
      id:2,
      task:'Learn Angular'

    },
    
  ]
)

let nextId=3

 function addNewTodo(){
if(todoInput===""){
  alert("add some text")
}
else{
 let NewTodos=[
    ...todoList,
    {
   id : nextId++,
   task:todoInput

    }
  ]

  updateTodos(NewTodos)
  updateInput("")
}
}

function deleteTodo(id){
  let updatedTodos= todoList.filter(
    (todo)=>{
return todo.id!=id
    }
  )
  updateTodos(updatedTodos)

}



 return (
    <div className="container mt-5 w-50">
      <h2 className="text-center font-semibold text-2xl mb-2">Todo App using React</h2>
      <div className="input-group ">
        <input type="text" className="form-control"onChange={(e)=>{
          let task=e.target.value;
          updateInput(task)

        }} value={todoInput}/>
        <button className="btn btn-primary" onClick={()=>{
          addNewTodo()
        }}>Add</button>
        
      </div>
      <ul className="list-group mt-4">
        {
          todoList.map(
            (todo)=>{
              return( 
                <li key={todo.id} className="list-group-item flex justify-between items-center">
          <p>{todo.task}</p>
          <button className="btn" onClick={()=>{
            deleteTodo(todo.id)
          }}>❌</button>
        </li>
              )
        }
          )
        }
        
      </ul>
    </div>
  );
}

export default App;
