import { Container } from "./styles";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";
import { TransactionsContext } from "../../TransactionsContext";
import { useContext } from "react";

export function Summary() {
  const { transactions } = useContext(TransactionsContext);
  console.log(transactions);

  return (
    <Container>
      <div>
        <section>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </section>
        <strong>R$1000,00</strong>
      </div>
      <div className="outcomes">
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
