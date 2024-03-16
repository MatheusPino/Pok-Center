import "./App.css";
import Header from "./components/header";
import ProductList from "./components/cardList";
import Footer from "./components/footer";
import { SearchProvider } from "./contexts/searchContext";
import { ModalProvider } from "./contexts/openModalContext";

function App() {
	return (
		<>
			<ModalProvider>
				<SearchProvider>
					<Header />
					<ProductList />
					<Footer />
				</SearchProvider>
			</ModalProvider>
		</>
	);
}

export default App;
