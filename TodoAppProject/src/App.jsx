import { useState } from 'react'
import './App.css'
import AppList from './Component/AppList'
import AppName from './Component/AppName'
import ErrorMsg from './Component/ErrorMsg'
import ItemList from './Component/ItemList'

function App() {
  let item =[
    {
        name:'Buy milk',
        dueDate:'10/11/2004'
    },
    {
        name:'Go to school',
        dueDate:'10/11/2004'
    }
  ]

  let [itemcomponebt, setitemcomponebt] = useState(item)

  let handleOnClick = (itemName, itemDate)=>{
    let newItem = [...itemcomponebt,{name:itemName,dueDate:itemDate}]
    setitemcomponebt (newItem)
    console.log(`name ${itemName} date ${itemDate}`)
  }

  let handleOnDelete = (deleteItem) =>{
    let delItem = itemcomponebt.filter((item)=> item.name !== deleteItem)
    setitemcomponebt(delItem)
    console.log(`deleted ${deleteItem}`)
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
