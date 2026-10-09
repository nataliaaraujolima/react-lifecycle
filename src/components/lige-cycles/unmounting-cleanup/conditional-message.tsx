import { useEffect } from "react";

export function ConditionalMessage() {
	useEffect(() => {
		console.log(
			"🟢 [FILHO] Montado: Inserido no DOM pela 1* vez ou outro componente entrou em condicional",
		);

		return () => {
			console.log(
				"🔴 [FILHO] Desmontado: Fui removido do DOM, caindo fora do ciclo!",
			);
		};
	}, []);

	return (
		<div>
			<h1 className="text-red-500">ELE FOI EMBORA!</h1>
		</div>
	);
}
