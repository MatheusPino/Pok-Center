import { useState } from "react";
import { Container, StyledUl, StyledLi } from "./styled";
import Modal from "../modal";
import Loading from "./../loading";
import useFetchData from "../../hooks/useFetchData";
import { useSearch } from "../../contexts/searchContext";
import { useModal } from "../../contexts/openModalContext";

const ProductList = () => {
  const [currentProduct, setCurrentProduct] = useState(null);
  const {modalOpen, setModalOpen} = useModal();

  const { dados, loaded } = useFetchData("https://api.pokemontcg.io/v2/cards?page=2&pageSize=100");
  const { search } = useSearch();

  const filteredProducts = dados.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleModalOpen = (product) => {
    setCurrentProduct(product);
    setModalOpen(true);
  };

  return (
    <Container>
      <div className="">
        {loaded ? (
          <StyledUl>
            {filteredProducts.map((product) => (
              <StyledLi key={product.id} onClick={() => handleModalOpen(product)}>
                <img src={product.images.small} alt={product.name} className="" />
                <p className="">{product.name}</p>
                {product.cardmarket ?
                  <p className="text-preco"> R$ {product.cardmarket.prices.trendPrice}</p> : 
                  <p className="text-indisp">Indisponível</p>
                  }
              </StyledLi>
            ))}
          </StyledUl>
        ) : (
          <Loading />
        )}
      </div>
      {modalOpen && currentProduct && (
        <Modal product={currentProduct} filteredCards={filteredProducts} />
      )}
    </Container>
  );
};

export default ProductList;
