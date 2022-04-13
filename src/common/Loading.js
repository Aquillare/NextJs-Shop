import styles from '@styles/Loading.module.scss';

const Loading = () => {
    return(
        <div className={styles['loading_container']}>
             <div className={styles.loading}>

             </div>
        <p className={styles['loading_text']}>Loading</p>
            
            
        </div>
    );
};

export default Loading;