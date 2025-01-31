import styles from './Items.module.css'
import { MdDelete } from "react-icons/md";

const Items = ({todoName, todoDate , onDelete}) =>{

    return(
        <>
        <div className={`${styles.wholeBox} container`}>
            <div className="row">
            <div className="col-6">{todoName}</div>
            <div className="col-4">{todoDate}</div>
            <div className="col-2"><button type="button" className="btn btn-danger" onClick={()=>onDelete(todoName)}><MdDelete /></button></div>
            </div>
        </div>
        </>
    )
}

export default Items;