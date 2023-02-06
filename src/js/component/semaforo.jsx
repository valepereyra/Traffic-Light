import React, { useState } from "react";

//create your first component
const TrafficLight = () => {

	const [color1, setColor1] = useState("");

	function onRed() {
		if (color1 === "btn-danger") {
			setColor1("")
		} else {
			setColor1("btn-danger")
			setColor2(" ")
			setColor3(" ")
		}


	}

	const [color2, setColor2] = useState("")
	function onYellow() {
		if (color2 === "btn-warning") {
			setColor2("")

		} else {
			setColor2("btn-warning")
			setColor1(" ")
			setColor3(" ")
		}
	}

	const [color3, setColor3] = useState("")
	function onGreen() {
		if (color3 === "btn-success") {
			setColor3("")
		} else {
			setColor3("btn-success")
			setColor1(" ")
			setColor2(" ")
		}
	}
	return (
		<div>

			<div style={{ width: 80 }} className="text-center d-flex flex-column bg-dark container my-5 h-100" >

				<div><button style={{ width: 50, height: 50, }} className={"btn rounded-circle border-danger my-1 mx-1 mt-2 " + color1} onClick={onRed}></button> </div>
				<div>
					<button className={"btn rounded-circle border-warning my- mx-1 " + color2} style={{ width: 50, height: 50, }} onClick={onYellow}></button>
				</div>
				<div>
					<button style={{ width: 50, height: 50, }} className={"btn rounded-circle border-success my-1 mx-1 " + color3} onClick={onGreen}></button>
				</div>


			</div>
		</div>
	);
};

export default TrafficLight;

