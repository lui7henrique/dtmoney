import { Container } from "./styles";
import { useTransactions } from "../../hooks/useTransactions";
import { FiTrash } from "react-icons/fi";

export function TransactionTable() {
  const { transactions } = useTransactions();

  function handleRemoveTransaction(id: number) {
    const filteredTransactions = transactions.filter(
      (transaction) => transaction.id !== id
    );

    console.log(filteredTransactions);
  }

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => {
            return (
              <tr key={transaction.id}>
                <td>{transaction.title}</td>
                <td className={transaction.type}>
                  {new Intl.NumberFormat("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  }).format(transaction.amount)}
                </td>
                <td>{transaction.category}</td>
                <td>
                  {new Intl.DateTimeFormat("pt-BR").format(
                    new Date(transaction.createdAt)
                  )}
                </td>
                <td>
                  <button type="button" className="buttonRemoveIcon">
                    <FiTrash
                      color={"var(--red)"}
                      size={20}
                      className="buttonRemoveIcon"
                      onClick={() => handleRemoveTransaction(transaction.id)}
                    />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Container>
  );
}
