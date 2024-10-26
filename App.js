import React from 'react';
import Header from './Components/Header';
import TodoItems from './Components/TodoItems';
import Button from './Components/Buttoon';
import './/style.css'

const App = ()=>{
  return (
    <>
    <h1 className='heading'>Todoie App</h1>
    <div className='todo-container'>
      
      <Header/>
      <TodoItems name="Eat"/>
      <TodoItems name="Sleep"/>
      <TodoItems name="walk"/>
      <TodoItems name="Read"/>
      <TodoItems name="play"/>
      <Button name="Sleep"/>
    </div>
    </>
  )
}

export default App;