import pokebola from "../../assets/pokebola.png";
import "./style.css"

export const BotaoComprar = () => {
	return (
		<div>
			<div className="container-button">
				<div className="text-button">COMPRAR</div>
				<img style={{ width: 20, height: 20 }} src={pokebola} />
			</div>
		</div>
	);
};
