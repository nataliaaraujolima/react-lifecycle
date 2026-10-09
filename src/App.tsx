import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import { Mounting } from "./components/mounting";

function App() {
	return (
		<section id="center" className="flex flex-center">
			<div className="hero">
				<img src={heroImg} className="base" width="170" height="179" alt="" />
				<img src={reactLogo} className="framework" alt="React logo" />
				<img src={viteLogo} className="vite" alt="Vite logo" />
			</div>
			<div>
				<Mounting />
			</div>
		</section>
	);
}

export default App;
