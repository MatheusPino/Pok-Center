import styled from "styled-components";

export const Container = styled.div`
	position: relative;
	max-width: 1240px;
	padding: 2rem;
	margin: 0 auto;
	text-align: center;
`;

export const StyledUl = styled.ul`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
	gap: 20px;
	margin-top: 20px;
	img {
		max-width: 180px;
		object-fit: contain;
	}
	@media screen and (max-width: 768px) {
		grid-template-columns: repeat(auto-fill, minmax(132px, 1fr));
		img {
			max-width: 116px;
			object-fit: contain;
		}
  }
`;

export const StyledLi = styled.li`
	cursor: pointer;
	padding: 16px;
	border: 1px solid #ccc;
	border-radius: 4px;
	transition: transform 0.3s ease;
	list-style-type: none;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
	&:hover {
		transform: scale(1.05);
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.25);
	}
`;
