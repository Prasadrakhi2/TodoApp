import { useState } from 'react'
import styles from './AppList.module.css'
import { MdAddBusiness } from "react-icons/md";

const AppList = ({onClicked}) =>{

    let [itemName, setItemName] = useState('');
    let [itemDate, setItemDate] = useState('');

    let handleOnChangeItem = (event) => {
        setItemName(event.target.value)
    }

    let handleOnChangeDate = (event) =>{
        setItemDate(event.target.value)
    }

    let handleOnChange = () =>{
        onClicked(itemName,itemDate)
        setItemDate("")
        setItemName("")
    }



    return(
        <>
        <div className={`${styles.component} container`}>
            <div className="row">
                <div className="col-6">
                    <input type="text" 
                    value={itemName}
                    className={styles.input} 
                    onChange={handleOnChangeItem}/>
                </div>

                <div className="col-4">
                    <input type="date" 
                    value={itemDate}
                    className={styles.date} 
                    onChange={handleOnChangeDate}/>
                </div>
                <div className="col-2">
                    <button type="button" 
                    className="btn btn-success" 
                    onClick={handleOnChange}><MdAddBusiness /></button>
                    </div>
            </div>
        </div>
        </>
    )
}

export default AppList 