import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import { UmmountingCleanup } from "./components/lige-cycles/unmounting-cleanup/unmounting-cleanup";

function App() {
	return (
		<section className="flex flex-1 flex-col items-center justify-center gap-[25px] max-lg:gap-[18px] max-lg:px-5 max-lg:pt-8 max-lg:pb-6">
			<div className="relative">
				<img
					src={heroImg}
					className="relative z-0 mx-auto w-[170px]"
					width="170"
					height="179"
					alt=""
				/>
				<img
					src={reactLogo}
					className="absolute inset-x-0 top-[34px] z-10 mx-auto h-7"
					style={{
						transform:
							"perspective(2000px) rotateZ(300deg) rotateX(44deg) rotateY(39deg) scale(1.4)",
					}}
					alt="React logo"
				/>
				<img
					src={viteLogo}
					className="absolute inset-x-0 top-[107px] z-0 mx-auto h-[26px] w-auto"
					style={{
						transform:
							"perspective(2000px) rotateZ(300deg) rotateX(40deg) rotateY(39deg) scale(0.8)",
					}}
					alt="Vite logo"
				/>
			</div>
			<div>
				<UmmountingCleanup />
			</div>
		</section>
	);
}

export default App;
