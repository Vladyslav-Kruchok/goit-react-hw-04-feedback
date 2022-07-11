import PropTypes from "prop-types";
import styles from "./Section.module.css";

export const Section = (props) => {
    return (
        <section>
            <h1 className={styles.title}>{props.title}</h1>
            {props.children}
        </section>
    );
};

Section.protoType = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
};