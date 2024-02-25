import React from 'react'
import {getAllTodos,addTodo,deleteTodo} from "@/utils/supabaseFunc.js"


const todolist = (props) => {
const {todos,setTodos} = props;
const handleDlete = async(id)=>{
    await deleteTodo(id);
    //即時反映されるようにする
    let todos = await getAllTodos()
    setTodos(todos);
}
  return (
    <div>
        <ul className="mx-auto">
            {todos.map((todo)=>(
                 <div key={todo.id} className="flex bg-orange-200 rounded-md mt-2 mb-2 p-2 justify-between">
                 <li className='font-medium'>✅{todo.title}</li>
                 <span className='cursor-pointer' onClick={()=>handleDlete(todo.id)}>✖</span>
             </div>

            ))}
           
            
        </ul>
    </div>
  )
}

export default todolist