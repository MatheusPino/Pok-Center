import styled from "styled-components";

export const Overlay = styled.div`
	position: fixed;
	inset: 0;
	background-color: rgba(0, 0, 0, 0.5);
	display: ${({ visible }) => (visible ? "block" : "none")};
`;

export const StyledModal = styled.div`
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
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
  background-color: #4a90e2;
  color: #fff;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #357bd8;
  }
`;