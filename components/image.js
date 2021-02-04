import styles from "../styles/components.module.scss";

export default ({ src }) => (
  <img className={`rounded w-full ${styles.image}`} src={src} />
);
