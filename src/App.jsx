import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Studentform from './components/Studentform'
import Studentlist from './components/Studentlist'
import axios from 'axios'

function App() {

  
  const[students,setstudents]=useState([])
  const fetchstudent=async()=>{
    try{
        const response=await axios.get('https://student-api-pu5m.onrender.com/students')
        setstudents(response.data)
    }
    catch (error){
        console.error('error',error)
    }

}

const onAdd=(newStudent)=>{
  setstudents([...students,newStudent])
}

const deleteStudent=async (id)=>{
try{
  const response=await axios.delete(`https://student-api-pu5m.onrender.com/student/${id}/delete`)
  console.log(response)
  if(response.status==204)
    setstudents((students)=>students.filter((student)=>student.id !==id))
  
}
catch(error){
  console.error('error delete student',error)
}
}

const editStudent=async(id,updateStudent)=>{
  try{
    const response=await axios.put(`http://127.0.0.1:8000/student/${id}/update`,updateStudent)
    if(response.status==200){
      setstudents((students)=>students.map((student)=>student.id==id ? {...student, ...updateStudent}:student
    ))
    }
  }
  catch(error){
    console.error('error update student',error)
  }
}

useEffect(()=>{
    fetchstudent()
},[])

  return (
  <div>
    <Studentform onAdd={onAdd} ></Studentform>
    <Studentlist students={students} onDeleteStudent={deleteStudent} onEditStudent={editStudent}></Studentlist>
  </div>
  )
}

export default App
