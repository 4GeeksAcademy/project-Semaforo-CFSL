import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	const [selectColor, setSelectColor]= useState("rojo");
	
	 
	return (
		<div className="contenedor">
			<div className="palo">I</div>
			<div className="semaforo">
				<div 
					onClick={() => setSelectColor("rojo")}
					className={"circulo rojo" +((selectColor === "rojo")? " glow" : "")}></div>
				<div 
					onClick={() => setSelectColor("amarillo")}
					className={"circulo amarillo" +((selectColor === "amarillo")? " glow" : "")}></div>
				<div 
					onClick={() => setSelectColor("verde")}
					className={"circulo verde" +((selectColor === "verde")? " glow" : "")}></div>
			</div>
		</div>
	);
};

export default Home;
