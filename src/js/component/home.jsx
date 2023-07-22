import React, { useEffect, useState } from "react";
import Clock from "./clock.jsx";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const[Counter,setCounter] = useState(0)
	useEffect	(()=>{
	const interval = setInterval(()=>{
	setCounter(counter=> counter+1)
	},1000)
	return ()=> clearInterval(interval)
},[])
	return <Clock Seconds={Counter}></Clock>
};

export default Home;
