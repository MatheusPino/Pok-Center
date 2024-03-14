import pokebola from "../../assets/pokebola.png"

export const BotaoComprar = () => {
	return (
		<div>
			<div
				style={{
					paddingLeft: 19,
					paddingRight: 19,
					paddingTop: 10,
					paddingBottom: 10,
					background: "#D72635",
					borderRadius: 42,
					overflow: "hidden",
					display: "inline-flex",
					justifyContent: "flex-start",
					alignItems: "center",
					gap: 9,
					cursor: "pointer",
				}}>
				<div
					style={{
						color: "white",
						fontSize: 16,
						fontFamily: "system-ui",
						fontWeight: "600",
						wordWrap: "break-word",
					}}>
					COMPRAR
				</div>
				<img
					style={{ width: 20, height: 20 }}
					src={pokebola}
				/>
			</div>
		</div>
	);
};
