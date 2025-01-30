import styles from './ErrorMsg.module.css'

const ErrorMsg = ({itemcomponebt}) =>{
    return(
        <>
        {itemcomponebt.length === 0 && <h2 className={styles.line}>Enjoy Your Day!</h2>}
        </>
    )

}

export default ErrorMsg