import { useState } from "react";
import { ConditionalMessage } from "./conditional-message";

export const UmmountingCleanup = () => {
	const [isVisible, setIsVisible] = useState(true);

	function handleVisible() {
		setIsVisible((prevState) => !prevState);
	}

	return (
		<div className="flex items-center justify-center flex-col">
			<h1>Desmontagem e Cleanup (Ciclo de Vida)</h1>
			<button
				type="button"
				className={`rounded-[5px] border-2 border-transparent px-2.5 py-[5px] font-mono text-base transition-[border-color,background-color] duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 ${
					isVisible
						? "bg-[#aa3bff]/10 text-[#aa3bff] hover:border-[#aa3bff]/50 focus-visible:outline-[#aa3bff] dark:bg-[#c084fc]/15 dark:text-[#c084fc] dark:hover:border-[#c084fc]/50 dark:focus-visible:outline-[#c084fc]"
						: "bg-red-500/10 text-red-500 border-red-500/30 hover:border-red-500 focus-visible:outline-red-500 dark:bg-red-500/20 dark:text-red-400"
				}`}
				onClick={handleVisible}
			>
				{isVisible ? "Cai fora" : "nem to mais aqui!"}
			</button>
			{!isVisible && <ConditionalMessage />}
		</div>
	);
};
