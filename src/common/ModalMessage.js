import styles from '@styles/ModalMessage.module.scss';

const ModalMessage = ({children}) => {
    return(
        <div className={styles['Modal_container']}>
             <div className={styles.Modal}>
            {children}
             </div>
        </div>
       
    );
};

export default ModalMessage;