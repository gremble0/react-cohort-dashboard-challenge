import { createContext } from "react";
import Body from "./components/Body";
import Header from "./components/Header";

const Context = createContext();

export default function App() {
  return (
    <>
      <Header />
      <Body />
    </>
  );
}
