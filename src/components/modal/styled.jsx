import styled from "styled-components";

export const Overlay = styled.div`
	position: fixed;
	inset: 0;
	background-color: rgba(0, 0, 0, 0.5);
	display: ${({ visible }) => (visible ? "block" : "none")};
`;

export const StyledModal = styled.div`
	background-color: #fff;
	padding: 16px;
	border-radius: 8px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
	max-width: 400px;
	width: 100%;
	text-align: center;
	img {
		max-width: 80%;
		object-fit: contain;
	}
`;

export const CloseButton = styled.button`
	position: absolute;
	top: 10px;
	right: 10px;
	background-color: transparent;
	border: none;
	color: #000;
	cursor: pointer;
`;

export const Button = styled.button`
  background-color: #E7BBBF;
  color: #fff;
  padding: 4px 12px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-size: 32px;

  &:hover {
    background-color: #D72635;
  }
`;

export const Card = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;