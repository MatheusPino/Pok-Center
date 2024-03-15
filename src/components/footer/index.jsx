
import logo2 from "../../assets/logo2.png";
import { StyledFooter, StyledConteudo, StyledLogo2, LineFooter, DivList, StyledH2Container, StyledH2, StyledUl, StyledLi } from './styled';

export default function Footer() {
  return (
    <StyledFooter>
      <StyledConteudo>
        <StyledLogo2 src={logo2} />
        <LineFooter />
        <DivList>
          <StyledH2Container>
            <StyledH2> Institucional </StyledH2>
          </StyledH2Container>
          <StyledUl>
            <StyledLi>Fale conosco</StyledLi>
            <StyledLi>Aviso geral</StyledLi>
            <StyledLi>Termos de uso</StyledLi>
            <StyledLi>Trocas e devoluções</StyledLi>
          </StyledUl>
        </DivList>
        <DivList>
          <StyledH2Container>
            <StyledH2>Pokémon Center</StyledH2>
          </StyledH2Container>
          <StyledUl>
            <StyledLi>Cards</StyledLi>
            <StyledLi>Coleções</StyledLi>
            <StyledLi>Produtos</StyledLi>
            <StyledLi>Listas</StyledLi>
          </StyledUl>
        </DivList>
      </StyledConteudo>
    </StyledFooter>
  );
}


