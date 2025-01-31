import Items from "./Items";

const ItemList = ({itemcomponebt ,onDelete}) =>{

    

    return(
        <>
        <div className="buttonContainer">
            {itemcomponebt.map((item)=><Items key={item.name} onDelete={onDelete} todoName={item.name} todoDate={item.dueDate}></Items>)}
        </div>
        </>
    )
}

export default ItemList;