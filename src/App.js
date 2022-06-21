import Nav from "./Components/Nav";
import Header from "./Components/Header";
import About from "./Components/About";

import './App.css';


function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <main>
        <About />
      </main>
    </div>
  );
}

export default App;
