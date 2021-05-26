function calculate() {

	mass = parseFloat(document.getElementById("mass").value)
	thrust = parseFloat(document.getElementById("thrust").value)
	burnTime = parseFloat(document.getElementById("burn-time").value)

	// if any are empty or not numbers
	if (!(mass && thrust && burnTime)){
		document.getElementById("error").innerText = "Please enter numbers in all three fields"
		return
	}

	// performing calculations
	gforce = mass * 9.8
	fnet = thrust - gforce
	accel = fnet / mass
	burnVel = accel * burnTime
	burnDist = (burnVel * burnTime) / 2
	coastDist = -((burnVel * burnVel) / (2 * (-9.8)))
	apogee = coastDist + burnDist
	timeToApogee = (burnVel / 9.8) + burnTime
	
	// if the rocket does not have enough power
	if (apogee <= 0){
		document.getElementById("error").innerText = "Oh no! This rocket won't leave the ground!"
		return
	}
	else{
		document.getElementById("error").innerText = ""
	}

	// updating table of data
	document.getElementById("gravitational-force").innerText = Number((gforce).toFixed(1))+"n"
	document.getElementById("net-force").innerText = Number((fnet).toFixed(3))+"n"
	document.getElementById("acceleration").innerText = Number((accel).toFixed(3))+"m/s^2"
	document.getElementById("burn-velocity").innerText = Number((burnVel).toFixed(3))+"m/s"
	document.getElementById("burn-distance").innerText = Number((burnDist).toFixed(3))+"m"
	document.getElementById("coast-distance").innerText = Number((coastDist).toFixed(3))+"n"
	document.getElementById("apogee").innerText = Number((apogee).toFixed(3))+"m"
	document.getElementById("time-to-apogee").innerText = Number((timeToApogee).toFixed(3))+"s"

}