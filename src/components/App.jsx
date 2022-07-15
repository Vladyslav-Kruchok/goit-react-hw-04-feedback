//#region APP-HOOKS #
//import componet that export as default
//import Feedback from "./Feedback";

//#region SYSTEM #
import React, { useState } from "react";
//#endregion #

//#region COMPONETS #
//import componet as a component
import { FeedbackOptions } from "./FeedbackOptions";
import { Statistics } from "./Statistics";
import { Section } from "./Section";
import { Notification } from "./Notification";
//#endregion #

//#region XXX #
//#endregion #

//#region APP #
export const App = () => { 
    //#region STATE #
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
    //#endregion #
    const step = 1;
    const feedback = {
        good: "good",
        neutral: "neutral",
        bad: "bad"
    }
    //#region STATE_UPDTE #
    const updateState = (event) => {
        const nameBtn = event.currentTarget.name;
        switch (nameBtn) {
            case feedback.good:
                setGood(good + step);
                break;
            case feedback.neutral:
                setNeutral(neutral + step);
                break;
            case feedback.bad:
                setBad(bad + step);
                break;
            default:
                return;
        }
    };
    //#endregion #

    //#region UTILS #
    const totalFeedback = () => {
    return good + neutral + bad;
    };

    const positivePercentage = () => {
    return Math.ceil((good / totalFeedback()) * 100) || 0;
    };
    //#endregion
    const resTotal = totalFeedback();
    return (
        <div>
        <Section title="Please leave feedback">
            <FeedbackOptions
            options={Object.values(feedback)}
            onLeaveFeedback={updateState}
            />
        </Section>

        <Section title="Statistics">
        {resTotal          
            ? <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={resTotal}
                positivePercentage={positivePercentage()}
            />
            : <Notification message="There is no feedback"/>
        }
        </Section>
        </div>
    );
};
//#endregion #

//#endregion #