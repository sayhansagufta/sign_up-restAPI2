import { useEffect, useState } from "react";
import Heading from "./Heading";
import { Button } from "@nextui-org/react";

const Header = () => {
  const [message, setMessage] = useState("Hello World");
  // Component Did Mount
  useEffect(() => {
    alertUser();

    return () => {
      // ComponentWillUnmount
      alert("Will AnMount");
    };
  }, []); // Array Harus Kosong

  const alertUser = () => {
    alert("Did Mount");
  };

  // componentDidUpdate and componentDidMount
  useEffect(() => {
    alert("Did Update");
  }, [message]); // array of dependencies 

  const ChangeMessage = () => {
    setMessage("State Diubah");
  };
  // Component Will Unmount
  //   useEffect (() => {
  //     return () => {
  //         alert("Will AnMount")
  //     }
  //   },[])

  return (
    <header
      style={{
        backgroundColor: "darkgray",
        padding: "8px",
        fontFamily: "sans-serif",
        textAlign: "center",
      }}
    >
      <Heading text="My Header" />
      <Heading>Header Customs</Heading>
      <p>{message}</p>
      <Button onClick={ChangeMessage}>Change Message</Button>
    </header>
  );
};

export default Header;
