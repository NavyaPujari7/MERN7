import react, { useState } from 'react'
const useState = () => {
    const [name,setName]=useState("");
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(name);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>name</label>
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter the name'/>
                <button type='submit'>submit</button>
            </form>
        </div>
    )
}