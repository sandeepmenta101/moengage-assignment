import styles from '../../styles/header.module.scss';

export default function Header(){
    return(
        <header className={styles.header}>
            <div className={styles.brand}>
                <a href="/">ABC College of engineering</a>
            </div>
        </header>
    )
}