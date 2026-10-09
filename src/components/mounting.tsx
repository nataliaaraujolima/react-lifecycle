import { useEffect } from "react";

/**
 * 1. Mounting (Montagem): O componente é renderizado pela 1ª vez e inserido no DOM.
 *
 * 2. Array de Dependências no useEffect:
 *    - Sem o 2º parâmetro: O efeito roda na montagem e em TODAS as re-renderizações.
 *    - Array vazio ([]): O efeito roda APENAS UMA VEZ, na montagem.
 *
 * ATENÇÃO AO LOOP INFINITO:
 * O loop infinito NÃO acontece simplesmente por omitir o []. Ele só ocorre se você
 * atualizar um estado (ex: setState) DIRETO dentro do useEffect sem o array de dependências,
 * criando um ciclo: Atualiza Estado -> Re-renderiza -> Executa Efeito -> Atualiza Estado...
 */
export const Mounting = () => {
	useEffect(() => {
		console.log("1* Ciclo = montagem");
	}, []);

	return (
		<div className="flex items-center justify-center">
			<h1 className="my-8 text-[56px] font-medium tracking-[-1.68px] text-[#08060d] max-lg:my-5 max-lg:text-4xl dark:text-[#f3f4f6]">
				Montando o componente pela 1* vez!
			</h1>
		</div>
	);
};
