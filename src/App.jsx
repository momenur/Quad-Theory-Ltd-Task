import "./App.css";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <div className="bg-[#EEEFF0] h-lvh">
        <div className="max-w-screen-xl mx-auto">
          <Navbar />
          <Banner />
        </div>
      </div>
    </>
  );
}

export default App;
