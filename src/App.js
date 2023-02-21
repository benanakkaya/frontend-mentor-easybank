import Articles from "./components/Articles";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App font-publicSans text-default">
      <div className="bg-mobile md:bg-desktop bg-contain md:h-120 bg-no-repeat md:bg-right">
        <Navbar />
        <Hero />
      </div>
      <Content/>
      <Articles/>
      <Footer/>
    </div>
  );
}

export default App;
