import PropTypes from "prop-types";
import styles from "./Widget.module.css";

const Section = ({ title, children }) => (
  <div className={styles.section}>
    <h2 className={styles.title}>{title}</h2>
    {children}
  </div>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Section;
