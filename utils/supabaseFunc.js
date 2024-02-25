import {supabase} from "@/utils/supabase"

export const getAllTodos = async()=>{

    const todos = await supabase.from("Todo").select("*")
    return todos.data
}
export const addTodo = async(title) => {
    //returnで返す必要はないよね～
    await supabase.from("Todo").insert({title:title})
}

export const deleteTodo = async(id) =>{
    await supabase.from("Todo").delete().eq('id' ,id)
}