import PropTypes from "prop-types";
import { nanoid } from "nanoid";
import styles from "./FeedbackOptions.module.css";

export const FeedbackOptions = (props) => {
    //extFunc = this.props.options;
    const { options, onLeaveFeedback } = props;
    return (
        <ul className={styles.box}>
            {
                options.map(item =>
                    <li className={styles.boxItem} key={nanoid()}>
                        <button
                            className={styles.btn}
                            name={item}
                            type="button"
                            onClick={onLeaveFeedback}
                        >{item}</button>
                    </li>
                )
            }
        </ul>
    );
};

FeedbackOptions.protoType = {
    options: PropTypes.objectOf(PropTypes.shape({
        good: PropTypes.func.isRequired,
        neutral: PropTypes.func.isRequired,
        bad: PropTypes.func.isRequired
    })),
};
//export as a default
//export default Feedback;