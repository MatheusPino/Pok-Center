/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types"

// Criando o contexto
const SearchContext = createContext();

// Provedor do contexto
export const SearchProvider = ({ children }) => {
	const [search, setSearch] = useState("");

	const handleSearch = (value) => {
		setSearch(value);
	};

	return (
		<SearchContext.Provider value={{ search, handleSearch }}>
			{children}
		</SearchContext.Provider>
	);
};

SearchProvider.propTypes = {
	children: PropTypes.node.isRequired, // Garante que children seja passado corretamente
};

export const useSearch = () => {
	return useContext(SearchContext);
};
