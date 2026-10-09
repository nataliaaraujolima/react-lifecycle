import { useEffect } from "react";

export const Mounting = () => {
	useEffect(() => {
		console.log("1* Ciclo = montagem");
	});

	return (
		<div className="flex flex-center">
			<h1>Montando o componente pela 1* vez!</h1>
		</div>
	);
};
