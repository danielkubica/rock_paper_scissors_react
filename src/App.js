import "./App.css";
import Option from "./components/Option/Option";
import rock from "./images/rock.png";
import scissors from "./images/scissors.png";
import scroll from "./images/scroll.png";
import Hand from "./components/Hand/Hand";
import { createContext, React, useState } from "react";

export const AppContext = createContext(0);

function App() {
  const [option, setOption] = useState(0);
  const [randomNumber, setRandomNumber] = useState(0);
  const [animation, setAnimation] = useState(false);
  const [displayText, setDisplayText] = useState("Player vs PC");
  const rightHand = true;

  return (
    <AppContext.Provider
      value={{
        option,
        setOption,
        randomNumber,
        setRandomNumber,
        animation,
        setAnimation,
        setDisplayText,
      }}
    >
      <>
        <section className="main-section">
          <section className="playing-section">
            <div className="text-section">
              <h1>{displayText}</h1>
            </div>
            <div className="hand-section">
              <Hand option={option} />
              <Hand option={randomNumber} rightHand={rightHand} />
            </div>
          </section>
          <section className="option-section">
            <div className="option-container">
              <Option
                image={rock}
                optionFunction={() => {
                  setOption(1);
                }}
                alt="rock"
              />
              <Option
                image={scroll}
                optionFunction={() => setOption(2)}
                alt="scroll"
              />
              <Option
                image={scissors}
                optionFunction={() => setOption(3)}
                alt="scissors"
              />
            </div>
          </section>
        </section>
      </>
    </AppContext.Provider>
  );
}

export default App;
