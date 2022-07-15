import PropTypes from "prop-types";
//import styles from "./Notification.module.css";

export const Notification = ({message}) => {
    return (
        <ul>
            <li>{message}</li>
        </ul>
    );
};

Notification.propType = {
    message: PropTypes.string.isRequired
};