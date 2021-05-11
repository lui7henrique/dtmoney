import { Container } from "./styles";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";

export function Summary() {
  return (
    <Container>
      <div>
        <section>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </section>
        <strong>R$1000,00</strong>
      </div>
      <div>
        <section>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Saídas" />
        </section>
        <strong>R$1000,00</strong>
      </div>
      <div className="highlight-background">
        <section>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </section>
        <strong>R$1000,00</strong>
      </div>
    </Container>
  );
}
