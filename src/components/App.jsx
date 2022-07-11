//import componet that export as default
//import Feedback from "./Feedback";

import React from "react";

//#endregion #

//#region COMPONETS #
//import componet as a component
import { FeedbackOptions } from "./FeedbackOptions";
import { Statistics } from "./Statistics";
import { Section } from "./Section";
import { Notification } from "./Notification";
//#endregion #

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };
  step = 1;
  //#region STATE_UPDTE #
    updateState = (event) => {
    const nameBtn = event.currentTarget.name;

    this.setState(prevState => {
          return { [nameBtn]: prevState[nameBtn] + this.step };
    });
  };
  //#endregion #
  
  //#region UTILS #
  totalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  positivePercentage = () => {
    return Math.ceil((this.state.good / this.totalFeedback()) * 100) || 0;
  };
  //#endregion
  render() {
    const resTotal = this.totalFeedback();
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.updateState}
          />
        </Section>

        <Section title="Statistics">
        {resTotal          
          ? <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={resTotal}
              positivePercentage={this.positivePercentage()}
            />
          : <Notification message="There is no feedback"/>
        }
        </Section>
      </div>
    );
  };
};