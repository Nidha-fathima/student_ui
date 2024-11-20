
import React, { useEffect, useState } from 'react'

function Studentlist({students,onDeleteStudent,onEditStudent}) {
  const[editid,seteditid]=useState(null)
  const[editStudent,seteditStudent]=useState({name:'',email:'',age:''})

  const handleEditclick=(student)=>{
    seteditid(student.id)
    seteditStudent({name:student.name,email:student.email,age:student.age})

  }

  const handleSave=()=>{
    onEditStudent(editid,editStudent)
    seteditid(null)
  }

  const handleCancel=()=>{
    seteditStudent({name:'',email:'',age:''})
    seteditid(null)
  }
    
  return (
    <div>
        <h1>Student List</h1>
        <ul>
            {students.map(student=>(
                <li key={student.id}>
                  {editid==student.id ? (
                    <div>
                      <input type='text' value={editStudent.name} onChange={(e)=>seteditStudent({...editStudent,name:e.target.value})}/>

                      <input type='email' value={editStudent.email} onChange={(e)=>seteditStudent({...editStudent,email:e.target.value})}/>
                      <input type='number' value={editStudent.age} onChange={(e)=>seteditStudent({...editStudent,age:e.target.value})}/>
                      <button onClick={handleSave}>Save</button>
                      <button onClick={handleCancel}>Cancel</button>


                    </div>
                  ):(
                    <div>
                     {student.name} {student.age} {student.email}

                      <button onClick={()=>onDeleteStudent(student.id)}>DELETE</button>
                    <button onClick={()=>handleEditclick(student)}>EDIT</button>
                    </div>
                    )}
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Studentlist