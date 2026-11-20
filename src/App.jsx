import Header1 from "./components/header/header1";
import Header2 from "./components/header/header2";
import Bank1 from "./components/mas2/bank1";
import Bank2 from "./components/mas2/bank2";
import "./App.css";

export default function App() {
  return (
    <>
      <div className="top-wrapper">
        <Header1 />
        <Header2 />
      </div>
      <div className="main-header-wrapper">
        <Bank1 />
        <Bank2 />
      </div>
    </>
  );
}