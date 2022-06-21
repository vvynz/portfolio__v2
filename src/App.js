import Nav from "./Components/Nav";
import Header from "./Components/Header";
import About from "./Components/About";
import Skills from "./Components/Skills";


import './App.css';


function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <main>
        <About />
        <Skills />
      </main>
    </div>
  );
}

export default App;
