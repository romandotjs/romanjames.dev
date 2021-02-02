import cx from "classnames";
import styles from "../styles/components.module.scss";

export default ({ children }) => (
  <div className={cx(styles.container, "p-3")}>{children}</div>
);
