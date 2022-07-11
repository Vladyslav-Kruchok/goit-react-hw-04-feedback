import PropTypes from "prop-types";
//import styles from "./Notification.module.css";

export const Notification = (props) => {
    return (
        <ul>
            <li>{props.message}</li>
        </ul>
    );
};

Notification.propType = {
    message: PropTypes.string.isRequired
};