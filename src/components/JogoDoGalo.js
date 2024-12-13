//Cria aqui o teu componente
import { useJogoDoGalo } from "../hooks/useJogoDoGalo";
import styles from "../styles/JogoDoGalo.module.css";
import fritoX from "./coxinhaX.png";
import fritoO from "./rissoleO.png";

const casaVazia = " ";
export function JogoDoGalo() {
  const {
    jogo,
    verificarFimDoJogo,
    adicionarJogada,
    verificarVencedor,
    reiniciarJogo,
  } = useJogoDoGalo();

  const { tabuleiro, jogadorAtual } = jogo;

  const renderizarTabuleiro = () => {
    return tabuleiro.map((linha, i) => (
      <div key={i} className={styles.linha}>
        {linha.map((casa, j) => (
          <button
            key={j}
            className={styles.casa}
            onClick={() => {
              if (casa === casaVazia && !verificarFimDoJogo(jogo)) {
                adicionarJogada(jogo, jogadorAtual, i, j);
              }
            }}
          >
            {RenderizarImagem(casa) || " "}
          </button>
        ))}
      </div>
    ));
  };

  const vencedor = verificarVencedor(jogo)
  const RenderizarImagem = (casa) => {
    if (casa === "Brasileiro") {
        return <img src={fritoX} alt="coxinha" className={styles.imagem} />
    }
    if (casa === "Português") {
        return <img src={fritoO} alt="rissole" className={styles.imagem} />
    }
    return  null
  }


  return (
    <div className={styles.wrapper}>
        <h1 className={styles.titulo}>Jogo do Galo Frito</h1>
        <p  className={styles.sub}>{verificarFimDoJogo(jogo) ?
            verificarVencedor(jogo) ?
            `${verificarVencedor(jogo)} VENCEU!` :
            `EMPATE!`
            :
            `Jogador Atual: ${jogo.jogadorAtual}`
        }
        </p>
        <div className={styles.tabuleiro}>
            {renderizarTabuleiro()}
        </div>
        <button onClick={reiniciarJogo} className={styles.botaoReiniciar}>REINICIAR</button>
    </div>
  );
}
