import { useEffect, useState } from "react";

/***
 2 - updating (atualização/ouvir): o componente rerenderiza quando uma PROP/STATE é alterado.
 o [] define o que vai monitorar.
 na montagem o state é 0, depois que alteramos o count no click, ele vai somando e vira 1...
     * O React compara o valor antigo com o novo: se 'count' mudou, o useEffect roda de novo.
     * Se qualquer outro estado mudar (que NÃO esteja no array), este useEffect NÃO será disparado.
 */

const counterButtonClass =
	"rounded-[5px] border-2 border-transparent bg-[#aa3bff]/10 px-2.5 py-[5px] font-mono text-base text-[#aa3bff] transition-[border-color] duration-300 hover:border-[#aa3bff]/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#aa3bff] dark:bg-[#c084fc]/15 dark:text-[#c084fc] dark:hover:border-[#c084fc]/50 dark:focus-visible:outline-[#c084fc]";

export function Updating() {
	const [count, setCount] = useState(0);
	const [countTwo, setCountTwo] = useState(0);
	console.log("SO MUDOU FORA DO USEEFFECT!");

	function handleCountTwo() {
		setCountTwo((prevState) => prevState + 2);
	}

	function handleCount() {
		setCount((prevState) => prevState + 1);
	}

	useEffect(() => {
		console.log(`Ouvindo as mudanças de count: ${count}`);
	}, [count]);

	return (
		<div className="flex flex-col">
			<h2 className="mb-2 text-2xl leading-[1.18] font-medium tracking-[-0.24px] text-[#08060d] max-lg:text-xl dark:text-[#f3f4f6]">
				Componente montado, estamos escutando suas mudanças...
			</h2>
			<div className="flex flex-col gap-2">
				<button
					type="button"
					onClick={handleCount}
					className={counterButtonClass}
				>
					Count: {count}
				</button>
				<button
					type="button"
					onClick={handleCountTwo}
					className={counterButtonClass}
				>
					Alterando CountTwo: {countTwo}
				</button>
			</div>
		</div>
	);
}
