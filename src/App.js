import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reponse1: "",
      reponse2: "",
      decor1: "",
      decor2: "",
      decor3: "",
    };
  }

  render() {
    return (
      <div className="App">
        <div className="Gauche Page">
          <h2>
            Tu veux que je te souhaite ton anniversaire ? Tu vas devoir le
            mériter !
          </h2>
          <div className="Question">
            <h3>Question 1</h3>
            <img></img>
            <hr />
            <label>Quel est ce gâteau ?</label>
            <hr />
            <input></input>
          </div>
          <div className="Question">
            <h3>Question 2</h3>
            <img></img>
            <hr />
            <label>Et ça, c'est quel gâteau ?</label>
            <hr />
            <input></input>
          </div>
          <div className="Question">
            <h3>Question 3</h3>
            <img></img>
            <hr />
            <label>Allez, le dernier: quel gâteau est-ce ?</label>
            <hr />
            <input></input>
          </div>
        </div>
        <div className={`Droite Page ${this.state.decor1}`}>
          <p>Hello</p>
          <p>World</p>
        </div>
      </div>
    );
  }
}

export default App;
