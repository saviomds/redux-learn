import Link from "next/link";
import styles from './auth.module.css';


const LinksPage = ({href, nodeText}: linking ) => {
  return <div className={styles.link}><Link href={href}>{nodeText}</Link></div>;
};
interface linking {
    href: string;
    nodeText: string;
}
export default LinksPage;
