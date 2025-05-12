import { useState } from 'react'
import './App.css'
import { use } from 'react'

function App() {
  const[user, setUser]=useState({
    first:"",
    email:"",
    phone:"",
    password:"",
    confirmPassword:""
})

const handleSubmit=(event)=>{
    event.preventDefault();
    console.log(user)
    setUser("")
}
const handlechange=(event)=>{
  const{name,value}=event.target
  setUser((pre)=>({...pre,[name]:value}));
}
  return (
    <>
      <h1 id='header'>Registration Form</h1>
      <form onSubmit={handleSubmit}>
      <div className='main-container'>
        <div className='firstName'>
          <label>Name : </label><br/>
          <input
            type='text'
            name='first'
            className='inputName'
            onChange={handlechange}
          />
        </div>
        <div className='Email'>
         <label>Email : </label><br/>
          <input
            type='text'
            name='email' 
            className='inputEmail'
            onChange={handlechange}
          />
        </div>
        <div className='phone'>
         <label>Phone :</label><br/>
          <input
            type='num'
            name='phone'
            className='inputPhone'
           onChange={handlechange}
          />
        </div>
        <div className='age'>
          <label>Password : </label><br/>
          <input
            type='text'
            name='password'
            className='inputPassword'
            onChange={handlechange}
          />
        </div>
        <div className='age'>
          <label>Confirm Password : </label><br/>
          <input
            type='text'
            name='confirmPassword'
            className='inputCpassword'
            onChange={handlechange}
          />
        </div><br/>
        <button >
          Submit
        </button> 
        </div>
      </form>
      
    </>
  )
}

export default App
