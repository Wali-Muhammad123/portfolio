import styles from './Loader.module.css';

const Loader = () => {
    return (
    <div className={styles.banter_loader}>
        <div className={styles.banter_loader__box}></div>
        <div className={styles.banter_loader__box}></div>
        <div className={styles.banter_loader__box}></div>
        <div className={styles.banter_loader__box}></div>
        <div className={styles.banter_loader__box}></div>
        <div className={styles.banter_loader__box}></div>
        <div className={styles.banter_loader__box}></div>
        <div className={styles.banter_loader__box}></div>
        <div className={styles.banter_loader__box}></div>
    </div>
    )
};

export default Loader;