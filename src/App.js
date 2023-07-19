import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Brand from "./components/Brand";
import Whatgpt3 from "./components/Whatgpt3";
import Features from "./components/Features";
import Possibility from "./components/Possibility";
import Cta from "./components/Cta";
import Blog from "./components/Blog";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-black h-screen overflow-x-hidden">
      <div className="gradientbg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <Whatgpt3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
