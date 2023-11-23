import "./App.css";
import data from "./data.js";
import { useState } from "react";

function App() {
  let [isShown, setIsShown] = useState(false);

  function handleClick() {
    setIsShown((prev) => !prev);
  }

  return (
    <div className="App">
      <div class="drafts">Drafts</div>
      <div class={!isShown ? "container" : "container expanded"}>
        {isShown ? (
          data.map((item) => (
            <div class="entry">
              <div class="main-text">
                <div class="smash-text">
                  {item.mainText}
                  <span class="price">{item.price}</span>
                </div>
                <div class="sub-text">{item.subText}</div>
              </div>
            </div>
          ))
        ) : (
          <div class="entry">
            <div class="main-text">
              <div class="smash-text">
                Smashing Magazine Inc.
                <span class="price">$350.00</span>
              </div>
              <div class="sub-text">LAST UPDATED Nov 20</div>
            </div>
          </div>
        )}
      </div>

      <div class="button" onClick={handleClick}>
        {isShown ? "Show Less" : "Show More"}
      </div>
    </div>
  );
}

export default App;
