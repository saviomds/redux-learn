import styles from './auth.module.css';

const TextFields = ({ type, placeholder,  htmlFor, label }:fielding) => {
  return (
        <form className={styles.form}>
            <div>
                <label htmlFor={htmlFor} className={styles.label} > { label }</label>
                <input type={type} placeholder={placeholder} className={ styles.input } />
            </div>
        </form>
  );
};
interface fielding {
    type: string;
    placeholder: string;
    htmlFor: string;
    label: string;
}
export default TextFields;
