import styled from "styled-components";

export const Overlay = styled.div`
	position: fixed;
	inset: 0;
	background-color: rgba(0, 0, 0, 0.5);
	display: ${({ visible }) => (visible ? "block" : "none")};
`;

export const StyledModal = styled.div`
	position: relative;
	background-color: #fff;
	padding: 16px;
	border-radius: 8px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
	max-width:600px;
	width: 100%;
	text-align: center;
	display: flex;
	gap: 20px;
	img {
		max-width: 50%;
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
	font-weight: bold;
`;

export const Button = styled.button`
  background-color: #D72635;
  color: #fff;
  padding: 4px 12px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-size: 32px;

  &:hover {
    background-color: #9c0915;
  }
`;

export const Card = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;