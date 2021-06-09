import PropTypes from "prop-types";
import styles from "./Widget.module.css";

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div>
    {options.map((option) => (
      <button
        key={option}
        type="button"
        name={option}
        onClick={onLeaveFeedback}
        className={styles.buttons}
      >
        {option}
      </button>
    ))}
  </div>
);

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
export default FeedbackOptions;
