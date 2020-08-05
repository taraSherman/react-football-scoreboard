//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import BottomRow from "./BottomRow";
import "./App.css";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [lionscore, setLionscore] = useState(21);
  const [tigerscore, setTigerscore] = useState(28);

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}
            <div className="home__score">{lionscore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{tigerscore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">

          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button onClick={() => setLionscore(lionscore + 7)} className="homeButtons__touchdown">Home Touchdown</button>
          <button onClick={() => setLionscore(lionscore + 3)} className="homeButtons__fieldGoal">Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button onClick={() => setTigerscore(tigerscore + 7)} className="awayButtons__touchdown">Away Touchdown</button>
          <button onClick={() => setTigerscore(tigerscore + 3)} className="awayButtons__fieldGoal">Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;
