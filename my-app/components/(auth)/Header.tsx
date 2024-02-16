import styles from './auth.module.css';


const Header = ({className, name} : heading) => {
  return (
    <div>
        <h1 className={styles.header}>{name}</h1>
    </div>
  );
};
interface heading {
    className?: string;
    name: string;
}
export default Header;
