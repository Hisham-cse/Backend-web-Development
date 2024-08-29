import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [showbtn, setshowbtn] = useState(false)
  const [todos, setTodos] = useState([
    {
      title: 'Learn React',
      desc: 'React is a JavaScript library for building user interfaces',
    },
    {
      title: 'Learn Vite',
      desc: 'Vite is a build tool that aims to provide a faster and leaner development experience',
    },
    {
      title: 'Build a Todo App',
      desc: 'Build a Todo App using React and Vite',
    },
  
  ])

  // const Todo =({todo})=> {
  //   return(<>
  // <div className="m-4 border-1 border border-purple-400">
        
  // <div className="todo">{todo.title}</div>
  // <div className="todo">{todo.desc}</div>
  
  // </div>
  // </>)}
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      {/* {showbtn?<button>I will be shown only when second button is clicked</button>:"thenga"} */}
      {/* {showbtn && <button>showbtn is true</button>} */}
      {showbtn ? <button>showbtn is true</button>:<button>showbtn is false</button>}
      {/* {todos.map(todo=>{
        return <Todo key={todo.title} todo={todo}/>
      })} */}
      {todos.map((todo, index) => {
          
            return
          <div key={todo.title} className="m-4 border-1 border border-purple-400">
                
          <div className="todo">{todo.title}</div>
          <div className="todo">{todo.desc}</div>
          
          </div>
         
      })}
      {/* {todos.map((todo, index) => (
        <Todo key={index} todo={todo} />
      ))} */}
      <div className="card">
        <button onClick={() => setshowbtn(!showbtn)}>
          Toggle showbtn
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
