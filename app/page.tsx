import Image from "next/image";
import Todo from "../components/Todo.jsx"

export default function Home() {
  return (
    <>
    <section className="flex justify-center items-center h-screen">
      <Todo />
      
    </section>
    
    </>
  );
}
