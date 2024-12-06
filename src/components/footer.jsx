import React from "react";
import "../styles/Footer.css";
import { Button } from "@nextui-org/react";

class Footer extends React.Component {
  state = {
    message: "Hello World!",
  };
  componentDidMount() {
    this.alertUser();
  }

  componentDidUpdate() {
    alert("Did Update!");
    alert(this.state.message);
  }

  componentWillUnmount() {
    alert("Sayonara!");
  }

  alertUser = () => {
    alert("Did Mount");
  };

  changeMessage = () => {
    this.setState({ message: "State Changed" });
  };

  render() {
    return (
      <footer>
        <h3 className="footer-text">My Footer</h3>
        <p>{this.props.message}</p>
        <p>{this.state.message}</p>
        <Button onClick={this.changeMessage}>Change Message</Button>
      </footer>
    );
  }
}

export default Footer;
