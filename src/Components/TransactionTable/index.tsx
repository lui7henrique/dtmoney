import { useEffect } from "react";
import { Container } from "./styles";
import { api } from "../../services/api";

export function TransactionTable() {
  useEffect(() => {
    api.get("transactions").then((response) => console.log(response.data));
  }, []);
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
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="deposit">R$18.000,00</td>
            <td>Desenvolvimento</td>
            <td>10/05/2021</td>
          </tr>
          <tr>
            <td>Kawasaki Ninja</td>
            <td className="withdraw">R$41.000,00</td>
            <td>Transporte</td>
            <td>10/05/2021</td>
          </tr>
          <tr>
            <td>Brasa Burger</td>
            <td className="withdraw">R$24,00</td>
            <td>Comida</td>
            <td>10/05/2021</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw">R$2.000,00</td>
            <td>Casa</td>
            <td>10/05/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
