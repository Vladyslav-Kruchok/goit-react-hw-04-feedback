import PropTypes from "prop-types";
import styles from "./Statistics.module.css";

export const Statistics = (props) => { 
    const { good, neutral, bad, total, positivePercentage } = props;
    return (
        <ul className={styles.box}>
            <li className={styles.boxItem}>Good: {good}</li>
            <li className={styles.boxItem}>Neutral: {neutral}</li>
            <li className={styles.boxItem}>Bad: {bad}</li>
            <li className={styles.boxItem}>Total: {total}</li>
            <li className={styles.boxItem}>Positive feedback: {positivePercentage} %</li>
        </ul>
    );
};

Statistics.protoType = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired
};