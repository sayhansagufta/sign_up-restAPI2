// import { Button, Input } from "@nextui-org/react";
// import { useRef, useState } from "react";

import SignUpValidation from "./components/Form_Form_Validation";

// import ControlledUncontrolled from "./components/ControlledUncontrolled";

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import "./App.css";
// import LoginPage from "./components/LoginPage";
import WishListPage from "./components/WishListPage";
// import CardImage from "./components/CardImage";
// import Counter from "./components/Counter";
// import Footer from "./components/footer";
// import Header from "./components/header";
// import TodoCard from "./components/TodoCard";
// import FormList from "./components/Form_List";
import { Toaster } from "sonner";

function App() {
  return (
    <>
      <SignUpValidation />
      {/* <ControlledUncontrolled /> */}
      {/* <FormList /> */}
      {/* <LoginPage /> */}
      <Toaster position="top-center" />
      {/* <WishListPage /> */}
      {/* <div className="flex items-center p-4 gap-4">
        <Input
          value={wishlistInput}
          onChange={(event) => {
            if (!/\d/.test(event.target.value)) {
              setWishlistInput(event.target.value);
            }
          }}
          label="Wishlist Item"
          color="secondary"
        />
        <Button onClick={addWishlist} color="primary">
          Add
        </Button>
      </div> */}

      {/* <p className="text-center">{wishlistInput}</p> */}

      {/* <ul className="list-decimal list-inside text-center">
        {wishlistItems.map((item) => {
          return <li>{item}</li>;
        })}
      </ul> */}

      {/* <p className="text-center font-semibold text-2xl">{wishlistItem}</p> */}
      {/* <Header />
      <Counter /> */}
      {/* <TodoCard day = "Monday" numberOfActivity = {3} />
      <TodoCard day = "Tuesday" numberOfActivity = {3} />
      <TodoCard day = "Wednesday" numberOfActivity = {3} /> */}
      {/* <CardImage /> */}
      {/* <Footer message="Hello World" /> */}
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + EnigmaCamp</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count += 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs" id='name'>
        Click on the Vite and React logos to learn more
      </p>

      <div>
        <h1>Hello World</h1>
      </div> */}
    </>
  );
}

export default App;
