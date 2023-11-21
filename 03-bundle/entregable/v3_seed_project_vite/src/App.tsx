import "./App.css";
import optimizeLogo from "./assets/optimization-svgrepo-com.svg";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/viteLogo.svg";
import image1 from "./assets/image1.jpg";
import image2 from "./assets/image2.jpg";

function App() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a
          href="https://github.com/FatehAK/vite-plugin-image-optimizer"
          target="_blank"
        >
          <img
            src={optimizeLogo}
            className="logo logo-optimize"
            alt="logo optimize image"
          />
        </a>
      </div>
      <h1>
        Vite + React + <br></br> vite-plugin-image-optimizer
      </h1>

      <img src={image1}></img>
      <img src={image2}></img>
      <img src={viteLogo}></img>
      <img src={reactLogo}></img>
      <img src={optimizeLogo}></img>
    </>
  );
}

export default App;
