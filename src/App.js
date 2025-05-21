
import React ,{useState}from "react";
//import "./style.css";

export default function App() {
  const[task,setTask]=useState('')
  const[items,setItems]=useState([])
  const[editId,setEditId]=useState(null)

  const handleAddSave=()=>{
    if(!task.trim()) return ;
    if(editId){
      setItems(items.map(i=>i.id===editId?{...i,value:task}:i))
      setEditId(null)
    }else{
      setItems([...items,{id:Date.now(),value:task}])
    }
    setTask('')
   }


   const handleEdit=(item)=>{
     setEditId(item.id)
     setTask(item.value)
  }

 return (
    <div>
      <input type='text' value={task} onChange={(e)=>setTask(e.target.value)}/>
      <button onClick={handleAddSave}>{editId?'Save': 'Add'}</button>
      {items.map(k=>(
        <li key={k.id}>
          {k.value}
        <button onClick={()=>handleEdit(k)}>Edit</button> 
        <button onClick={()=>setItems(items.filter(j=>j.id!==k.id))}>Delete</button>  
      </li>
      ))}
    </div>
  );
}

