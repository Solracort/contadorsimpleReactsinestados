import React from "react";
//import { WatchIgnorePlugin } from "webpack";

//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = (props) => {
	return (

		<div className="padre"> 
            <div className="contador uno">
                <i className="fa fa-clock"></i>
            </div>
            <div className="contador siete"> {props.decenahora}</div>
            <div className="contador seis">{props.unidadhora}:</div>
            <div className="contador cinco">{props.decenaminuto}</div>
            <div className="contador cuatro">{props.unidadminuto}:</div>
            <div className="contador tres">{props.decenasegundo%10}</div>
			<div className="contador dos">{props.unidadsegundo%10}</div>
    	</div> 
	)
			/*{/* <h1 className="text-center mt-5">Hello Rigo!</h1>
			<p>
				<img src={rigoImage} />
			</p>
			<a href="#" className="btn btn-success">
				If you see this green button... bootstrap is working...
			</a>
			<p>
				Made by{" "}
				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
				love!
			</p> */
		
};

export default Home;
