import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import { Mounting } from "./components/mounting";

function App() {
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
