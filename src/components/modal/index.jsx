import { Overlay, StyledModal, CloseButton, Button } from "./styled";
import PropTypes from "prop-types";
import { useState } from "react";
import { useModal } from "../../contexts/openModalContext";

const Modal = ({ product, filteredCards }) => {
	const [currentProduct, setCurrentProduct] = useState(product.id);
  const {modalOpen, setModalOpen} = useModal();
	
	const handleModalClose = () => {
		setModalOpen(false);
	};

	const currentIndex = filteredCards.findIndex(
		(produto) => produto.id === currentProduct
	);

	console.log(currentIndex)

	const nextProduct = () => {
    const nextIndex = (currentIndex + 1) % filteredCards.length;
    setCurrentProduct(filteredCards[nextIndex].id);
};

const previousProduct = () => {
    const previousIndex = (currentIndex - 1 + filteredCards.length) % filteredCards.length;
    setCurrentProduct(filteredCards[previousIndex].id);
};


	Modal.propTypes = {
		product: PropTypes.object.isRequired,
		filteredCards: PropTypes.array.isRequired
	};

	if (!modalOpen) return null;

	return (
		<>
			<Overlay visible={modalOpen} />
			<StyledModal>
				<CloseButton onClick={handleModalClose}>X</CloseButton>
				<img src={filteredCards[currentIndex].images.large} alt={filteredCards[currentIndex].name} />
				<h2>{filteredCards[currentIndex].name}</h2>
				<p>R$ {filteredCards[currentIndex].cardmarket.prices.trendPrice}</p>
				<div className="">
					<Button onClick={previousProduct}>Anterior</Button>
					<Button onClick={nextProduct}>Próximo</Button>
				</div>
			</StyledModal>
		</>
	);
};

export default Modal;
