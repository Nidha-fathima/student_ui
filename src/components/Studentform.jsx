import axios from 'axios'
import React, { useState } from 'react'

function Studentform({onAdd}) {
    const[name,setname]=useState('')
    const[age,setage]=useState('')
    const[email,setemail]=useState('')

    const handleSubmit=async(e)=>{
        e.preventDefault()
    const studentData={name,age,email}
    try{
        const response=await axios.post('https://student-api-pu5m.onrender.com/student/create',studentData)
        console.log(response.data)
        onAdd(studentData)
        setname('')
        setage('')
        setemail('')

    }    
    catch(error){
        console.error('error',error)
    }
    
    }
  return (
    <div>
        <h1>Add student</h1>
        <form onSubmit={handleSubmit}>
            <label>Name</label><input type='text' value={name} onChange={(e)=>setname(e.target.value)}></input>
            <label>Age</label><input type='number' value={age} onChange={(e)=>setage(e.target.value)}></input>
            <label>Email</label><input type='email' value={email} onChange={(e)=>setemail(e.target.value)}></input>
            <button type='submit'>AddButton</button>


        </form>

    </div>
  )
}

export default Studentform