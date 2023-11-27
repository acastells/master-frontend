import "./App.css";
import optimizeLogo from "./assets/optimizationIcon.svg";
import reactLogo from "./assets/reactIcon.svg";
import viteLogo from "./assets/viteIcon.svg";
import arrow from "./assets/arrow.png";
import image1 from "./assets/image.jpg";
import image2 from "./assets/image2.jpeg";
import consoleSnapshot from "./assets/consoleSnapshot.png";

function App() {
	return (
		<>
			<h1>Vite + React + vite-plugin-image-optimizer</h1>

			<div className="container">
				<div className="container-col">
					<a href="https://vitejs.dev" target="_blank">
						<img src={viteLogo} className="logo" alt="Vite logo" />
					</a>
					<a href="https://react.dev" target="_blank">
						<img
							src={reactLogo}
							className="logo react"
							alt="logo react"
						/>
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
					<a href="https://picsum.photos/" target="_blank">
						<img src={image1} className="logo" alt="logo" />
					</a>
					<a href="https://picsum.photos/" target="_blank">
						<img src={image2} className="logo" alt="logo" />
					</a>
					<a target="_blank">
						<img src={arrow} className="logo" alt="logo" />
					</a>
				</div>

				<div className="container-col">
					<p>
						<b>Vite</b> como herramienta de compilación
					</p>
					<p>
						<b>React</b> como librería Javascript
					</p>
					<p>
						<b>vite-plugin-image-optimizer</b> como plugin de
						optimización de assets para producción. Intenta
						optimizar todos los assets (svg, png, jpg,... ) cuando
						se ejecuta "npm run build". Su configuración se puede
						encontrar en vite.config.ts. Ejemplo en consola de la optimización:
					</p>
					<img src={consoleSnapshot} style={{width:750}}></img>
				</div>
			</div>
		</>
	);
}

export default App;
