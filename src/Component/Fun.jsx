
import React, { useState } from 'react'

function Fun() {
    const [name,setName]=useState('');
    const [age,setAge]=useState('');

    
    let handleName=(e)=>{
        setName(e.target.value)
    }
    let handleAge=(e)=>{
        setAge(e.target.value)
    }
// e.target.value(setAge,setName);

//     }
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(name,age);
        alert("success")
    }
  return (
    <div>Fun
<form>
<input type='text' onChange={ handleName} value={name}></input>
<input type='text' onChange={handleAge} value={age}></input>
<button onClick={handleSubmit}>submit</button>
</form>

    </div>
  )
}

export default Fun;