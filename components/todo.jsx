"use client"
import React, { useEffect,useState } from 'react'
import TodoList from "@/components/todolist"
import {getAllTodos,addTodo} from "@/utils/supabaseFunc.js"
function todo() {
  //配列が返却されるので配列を受け取れるようにしておく
  const [todos,setTodos] = useState([]);
  const [title,setTitle] =useState("");
  //local環境だとuseEffectが2回発火するか気にしなくて良き
  useEffect(()=>{

    const gettodos = async() => {
      //awaitにすることできちんとgetしてからsetTodosにデータを渡すことができる
      const todos = await getAllTodos()
      setTodos(todos)
      console.log(todos)

    };
    //関数呼び出し
    gettodos()
  },[])
  const handleSubmit = async(e)=>{
    //更新されないようにする(標準のイベントを消して)
    e.preventDefault()
    //何も入力されていない時は無視する
    if(title=="") return;
    //todoの追加
    await addTodo(title)
    //即時反映されるようにする
    let todos = await getAllTodos()
    setTodos(todos);
    //これをすることで追加後の文字列を消すことができる！
    setTitle("")
    
  };
  return (
    <section className='text-center mb-2 text-2xl font-medium'> 
      <h2>supabase Todo App</h2>
      <form onSubmit={(e)=> handleSubmit(e)} >
        <input type="text" className='shadow-lg p-1 outline-none' onChange={(e) => setTitle(e.target.value)}value={title}/>
        <button className="shadow-md border-2 px-1 py-1 round-lg bg-green-200">Add</button>
      </form>
      {/* propsを用いて親要素から子要素にデータを渡す！ */}
      <TodoList todos={todos} setTodos={setTodos}/>
    </section>
  )
};


export default todo