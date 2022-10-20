import React, {useState} from 'react'
import './style.css';
function App() {
  const [inputDesc,setinputDesc] =useState('');
  const [iteamDesc,setDesc] = useState([])

  const [inputItem,setinputItem] = useState('');
  const [items, setItems] =useState([])
  const addItem=()=>{
    if(!inputItem){

    }else{
    setItems([...items,inputItem]);
    setinputItem('')
    }
  }
  const addDesc = () =>{
    if(!inputDesc){

    }else{
      setDesc([...iteamDesc,inputDesc]);
      setinputDesc('')
    }
  }
  const deletItem=(id)=>{
    console.log(id)
    const updatedItems = items.filter((elem,ind)=>{
        return ind !== id;
    })
    setItems(updatedItems);
  }
  const deletDesc=(id)=>{
   console.log(id)
   const updateDesc =iteamDesc.filter((elem,ind)=>{
    return ind !==id;
   })
   setDesc(updateDesc)
  }
  return (

   <div id='back' style={{ height: "100vh"}}>
     <div id='box'>
        <input id='listitems' type="text"  placeholder='List of Items' value={inputItem} onChange={(e)=>setinputItem(e.target.value)} />
         
        <button id='add1' onClick={addItem}>Add</button>
      <input id='listitems1' type="text"  value={inputDesc} placeholder='Iteam Desccription' onChange={(e)=>setinputDesc(e.target.value)}  />
          {/* value={inputDesc} */}
        <button id='add2' onClick={addDesc}>Add</button> 
  
        </div>
        <div id='box1'>
          {
            
            items.map((elem,ind)=>{
   return( 
     <div key={ind}><h3  className='iteamName' >{elem}</h3>
     <button className='delet' onClick={() => deletItem(ind)}>Delet</button>
      </div>
     )
            }) 
            
            
          }
   {  
   iteamDesc.map((elem,ind)=>{
              return(
                <div> <h2 className='iteamName1'>{elem}</h2>
         <button className='delet1' onClick={()=>deletDesc(ind)}>Delet</button>
         </div>
              )
            })  
          }
         </div>
    <div/>
    

  </div>
  )
}


export default App
