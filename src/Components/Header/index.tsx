import logoImg from "../../assets/logo.svg";
import { Container, Content } from "./styles";

interface HeaderProps {
  onOpenNewransactionModal: () => void;
}

export function Header({ onOpenNewransactionModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button type="button" onClick={onOpenNewransactionModal}>
          {" "}
          Nova transação
        </button>
      </Content>
    </Container>
  );
}
