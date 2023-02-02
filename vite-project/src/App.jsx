import { Component } from "react";
import MainComponent from "./MainContent";
import Shoppingcart from "./Shoppingcart";
import Navbar from "./Navbar";

class App extends Component {
  
  updateState = () => {
    this.setState({
      amount : '$100'
    })
  }

  render() {
    console.log("App Rendered")

    return(
      <Shoppingcart/>
    )
  }
}

export default App;

