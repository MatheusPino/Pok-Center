export const BotaoComprar = () => {
	return (
		<div
			style={{
				width: "100%",
				height: "100%",
				paddingLeft: 19,
				paddingRight: 19,
				paddingTop: 10,
				paddingBottom: 10,
				background: "#D72635",
				borderRadius: 42,
				overflow: "hidden",
				flexDirection: "column",
				justifyContent: "flex-start",
				alignItems: "flex-start",
				gap: 10,
				display: "inline-flex",
			}}>
			<div
				style={{
					justifyContent: "flex-start",
					alignItems: "center",
					gap: 9,
					display: "inline-flex",
				}}>
				<div
					style={{
						color: "white",
						fontSize: 16,
						fontFamily: "Open Sans",
						fontWeight: "600",
						wordWrap: "break-word",
					}}>
					COMPRAR
				</div>
				<img
					style={{ width: 20, height: 20 }}
					src="https://via.placeholder.com/20x20"
				/>
			</div>
		</div>
	);
};
