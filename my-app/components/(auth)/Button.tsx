import styles from './auth.module.css';


const Button = ({className, name }:ButtonAttributes) => {
  return <div className={styles.divButton}><button className={styles.button} >{name}</button></div>
};
interface ButtonAttributes {
    className?: string;
    name: string;
}
export default Button;
