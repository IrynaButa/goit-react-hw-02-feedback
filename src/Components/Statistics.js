import PropTypes from "prop-types";
import styles from "./Widget.module.css";

const Statistics = ({ good, neutral, bad, totalVotes, positivePercentage }) => (
  <>
    <p className={styles.vote}>Good:{good} </p>
    <p className={styles.vote}>Neutral: {neutral} </p>
    <p className={styles.vote}>Bad: {bad} </p>
    <p className={styles.totalvotes}>Total: {totalVotes}</p>
    <p className={styles.totalvotes}>
      Positive feedback: {positivePercentage} %
    </p>
  </>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  totalVotes: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
export default Statistics;
