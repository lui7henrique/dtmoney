import { Container } from "./styles";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";
import { useTransactions } from "../../hooks/useTransactions";

export function Summary() {
  const { transactions } = useTransactions();

  // const totalDeposits = transactions.reduce((acc, transaction) => {
  //   if (transaction.type === "deposit") {
  //     return acc + transaction.amount;
  //   }

  //   return acc;
  // }, 0);

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === "deposit") {
        acc.deposits += transaction.amount;
        acc.total += transaction.amount;
      } else {
        acc.withdraws += transaction.amount;
        acc.total -= transaction.amount;
      }

      return acc;
    },
    {
      deposits: 0,
      withdraws: 0,
      total: 0,
    }
  );

  return (
    <Container>
      <div>
        <section>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </section>
        <strong>
          {new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL",
          }).format(summary.deposits)}
        </strong>
      </div>
      <div className="outcomes">
        <section>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Saídas" />
        </section>
        <strong>
          {new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL",
          }).format(-summary.withdraws)}
        </strong>
      </div>
      <div className="highlight-background">
        <section>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </section>
        <strong>
          {new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL",
          }).format(summary.total)}
        </strong>
      </div>
    </Container>
  );
}
