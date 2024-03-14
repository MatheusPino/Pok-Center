import styled from "styled-components";

export const StyledInput = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-top: 8px;
  margin-right: 16px;
  margin-left: 16px;
  width: 30vw;

  @media screen and (max-width: 768px) {
    width: calc(100% - 32px); /* Define uma largura maior para o input em telas menores */
    margin: 8px 16px; /* Adiciona margem superior e inferior, mantendo as laterais iguais */
  }
`;

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px 120px;
  width: 100%;
  height: 160px;
  background: #d72635;
  margin: 0;

  @media screen and (max-width: 768px) {
    flex-direction: column; /* Altera a direção dos itens para uma coluna em telas menores */
    justify-content: center; /* Centraliza os elementos na vertical */
    padding: 16px; /* Reduz o padding para telas menores */
    height: auto; /* Define a altura automática para permitir o conteúdo empilhado */
  }
`;

export const StyledCartIcon = styled.div`
  display: flex;
  align-items: center;
  p {
    margin-right: 16px;
    color: white;
  }

  @media screen and (max-width: 768px) {
    margin-top: 16px; /* Adiciona margem superior para separar do input em telas menores */
  }
`;

export const StyledLogo = styled.img`
  width: 10%;
  min-width: 100px;

  @media screen and (max-width: 768px) {
    margin-bottom: 16px; /* Adiciona espaço abaixo do logo em telas menores */
  }
`;
