import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reponse1: "",
      reponse2: "",
      reponse3: "",
      decor1: "Invisible",
      decor2: "Invisible",
      decor3: "Invisible",
    };
  }

  render() {
    return (
      <div className="App">
        <div className="Gauche Page">
          <h1>
            Tu veux que je te souhaite ton anniversaire ? Tu vas devoir le
            mériter ! (Indique le jeu d'origine)
          </h1>
          <div className="Question">
            <h3>Question 1</h3>
            <img src="/img/mysterious_cake1.png" alt="A cake" />
            <hr />
            <label>Quel est ce gâteau ?</label>
            <hr />
            <input></input>
            <p className={this.state.decor1}>C'est le gâteau de Minecraft !</p>
          </div>
          <div className={`Question ${this.state.decor1}`}>
            <h3>Question 2</h3>
            <img src="/img/mysterious_cake2.png" alt="A cake" />
            <hr />
            <label>Et ça, c'est quel gâteau ?</label>
            <hr />
            <input></input>
            <p className={this.state.decor2}>
              C'est bien le gâteau de Portal !
            </p>
          </div>
          <div className={`Question ${this.state.decor2}`}>
            <h3>Question 3</h3>
            <img src="/img/TheCake.jpeg" alt="A cake" />
            <hr />
            <label>Allez, le dernier: quel gâteau est-ce ?</label>
            <hr />
            <input></input>
            <p className={this.state.decor3}>
              N'importe quelle réponse allait, ici.
            </p>
          </div>
        </div>
        <div className={`Droite Page ${this.state.decor1}`}>
          <img
            className={this.state.decor2}
            src="/img/TheCake.jpeg"
            alt="A cake"
          />
          <hr />
          <h2 className={this.state.decor3}>
            La bonne réponse, c'est que c'est ton gâteau !
          </h2>
          <hr />
          <h2 className={this.state.decor3}>Joyeux anniversaire Loïc !</h2>
          <hr />
          <p className={`Yellowgreen ${this.state.decor3}`}>
            (j'espère que tu apprécies les magnifique bordures YellowGreen, rien
            que pour toi, ainsi que ce texte parfaitement illisible)
          </p>
        </div>
      </div>
    );
  }
}

export default App;
