import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question1: "",
      question2: "",
      question3: "",
      reponse1: "Invisible",
      reponse2: "Invisible",
      decor1: "Invisible",
      decor2: "Invisible",
      decor3: "Invisible",
    };
    this.handleAnswer1 = this.handleAnswer1.bind(this);
    this.handleAnswer2 = this.handleAnswer2.bind(this);
    this.handleAnswer3 = this.handleAnswer3.bind(this);
    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleChange3 = this.handleChange3.bind(this);
  }

  handleChange1(event) {
    this.setState({ question1: event.target.value });
  }

  handleChange2(event) {
    this.setState({ question1: event.target.value });
  }

  handleChange3(event) {
    this.setState({ question1: event.target.value });
  }

  handleAnswer1() {
    if (
      this.state.question1.toLowerCase() === "minecraft" &&
      this.state.decor1 === "Invisible"
    ) {
      this.setState({ decor1: "Visible", reponse1: "Invisible" });
    } else if (
      this.state.question1.toLowerCase() !== "minecraft" &&
      this.state.decor1 === "Invisible"
    )
      this.setState({ reponse1: "Visible" });
  }

  handleAnswer2() {
    if (
      this.state.question1.toLowerCase() === "portal" &&
      this.state.decor2 === "Invisible"
    ) {
      this.setState({ decor2: "Visible", reponse2: "Invisible" });
    } else if (
      this.state.question1.toLowerCase() !== "portal" &&
      this.state.decor2 === "Invisible"
    )
      this.setState({ reponse2: "Visible" });
  }

  handleAnswer3() {
    if (this.state.question1 && this.state.decor3 === "Invisible")
      this.setState({ decor3: "Visible" });
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
            <input type="text" onChange={this.handleChange1}></input>
            <input type="button" onClick={this.handleAnswer1} value="Go" />
            <br />
            <p className={this.state.reponse1}>Nope</p>
            <p className={this.state.decor1}>C'est le gâteau de Minecraft !</p>
          </div>
          <div className={`Question ${this.state.decor1}`}>
            <hr />
            <h3>Question 2</h3>
            <img src="/img/mysterious_cake2.png" alt="A cake" />
            <hr />
            <label>Et ça, c'est quel gâteau ?</label>
            <hr />
            <input onChange={this.handleChange2}></input>
            <input type="button" onClick={this.handleAnswer2} value="Go" />
            <br />
            <p className={this.state.reponse1}>Nope</p>
            <p className={this.state.decor2}>
              C'est bien le gâteau de Portal !
            </p>
          </div>
          <div className={`Question ${this.state.decor2}`}>
            <hr />
            <h3>Question 3</h3>
            <img src="/img/TheCake.jpeg" alt="A cake" />
            <hr />
            <label>Allez, le dernier: quel gâteau est-ce ?</label>
            <hr />
            <input onChange={this.handleChange3}></input>
            <input type="button" onClick={this.handleAnswer3} value="Go" />
            <br />
            <p className={this.state.decor3}>
              N'importe quelle réponse allait, ici ... Je me demande combien de
              temps tu as réfléchi.
            </p>
          </div>
        </div>
        <div className={`Droite Page ${this.state.decor1}`}>
          <img
            className={`CakeLoïc ${this.state.decor2}`}
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
