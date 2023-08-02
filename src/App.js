import Contact from "./Components/Contact/Contact";
import Hero from "./Components/Hero/Hero";
import Who from "./Components/Who/Who";
import Works from "./Components/Works/Works";
import "./App.css";
import Test from "./Components/Test1";

function App() {
  return (
    <div className="App">
      <div className="container">
        {/* <Test /> */}
        <Hero/>
        <Who />
        <Works />
        <Contact />
      </div>
    </div>
  );
}

export default App;
