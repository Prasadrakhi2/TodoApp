import { useState } from 'react'
import './App.css'
import AppList from './Component/AppList'
import AppName from './Component/AppName'
import ErrorMsg from './Component/ErrorMsg'
import ItemList from './Component/ItemList'

function App() {

  let [itemcomponebt, setitemcomponebt] = useState([])

  let handleOnClick = (itemName, itemDate)=>{
    let newItem = [...itemcomponebt,{name:itemName,dueDate:itemDate}]
    setitemcomponebt (newItem)
  }

  let handleOnDelete = (deleteItem) =>{
    let delItem = itemcomponebt.filter((item)=> item.name !== deleteItem)
    setitemcomponebt(delItem)
    
  }

  return(
    <>
    <center>
    <AppName></AppName>

    <AppList onClicked={handleOnClick}></AppList>
    
    <ErrorMsg itemcomponebt={itemcomponebt}></ErrorMsg>

   <ItemList onDelete={handleOnDelete} itemcomponebt={itemcomponebt}></ItemList>
    </center>
    </>
  )
}

export default App
