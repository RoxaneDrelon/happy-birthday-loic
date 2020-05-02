import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reponse1 = "",
      reponse2 = "",
    }
  }

  render() {
    return(
      <div className="App">
        <h2>Bonjour</h2>
        <p>Le monde !</p>
      </div>
    ) 
  }
 
}

export default App;
