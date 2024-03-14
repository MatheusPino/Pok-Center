import { useSearch } from "../../contexts/searchContext";
import { StyledInput, StyledHeader, StyledCartIcon, StyledLogo } from "./styled";
import logo from "../../assets/logo.png";
import cartIcon from "../../assets/cart.png";

const Header = () => {
	const { search, handleSearch } = useSearch();

	const handleChange = (e) => {
		handleSearch(e.target.value);
	};

	return (
		<StyledHeader>
			<StyledLogo src={logo} />			
			<StyledInput
				type="text"
				value={search}
				onChange={handleChange}
				placeholder="Pesquisar"
			/>
			<StyledCartIcon>
				<p>Meu Carrinho</p>
				<img src={cartIcon} alt="" />
			</StyledCartIcon>
		</StyledHeader>
	);
};

export default Header;
