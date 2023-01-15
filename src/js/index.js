//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
let seg = 0;
let decseg =0;
let min = 0;
let decmin = 0;
let hora = 0;
let dechora = 0;
//render your react application
setInterval(function (){
    
    seg++ ;
    if (seg  >9 ){
        seg=0;
        decseg++;
        if (decseg>5){
            min++;
            decseg=0;
            if(min>9){
                min=0;
                decmin++;
                if(decmin>5){
                    hora++;
                    decmin=0;
                    if(hora>9){
                        dechora++;
                        hora=0;
                    }
                }
            }
        }
    };   

ReactDOM.render(<Home    decenahora={dechora} unidadhora = {hora} decenaminuto = {decmin} unidadminuto = {min} decenasegundo = {decseg} unidadsegundo = {seg} />, document.querySelector("#app"));

}, 1000)