const fInput = document.getElementById('fInput');
const cInput = document.getElementById('cInput');
const kInput = document.getElementById('kInput');
const rInput = document.getElementById('rInput');



//fahrenheit to others
function fToOthers(fValue){
	const fValueNum = parseFloat(fValue)
	cInput.value = (fValueNum - 32) / 1.8;
	kInput.value = ((fValueNum-32)/1.8) + 273.15;
	rInput.value = fValueNum+459.67;
}

//celcius to others
function cToOthers(cValue){
	const cValueNum = parseFloat(cValue);
	fInput.value = (cValueNum*1.8) + 32;
	kInput.value = cValueNum+273.15;
	rInput.value = cValueNum * (9/5) + 491.67;
}

//kelvin to others
function kToOthers(kValue){
	const kValueNum = parseFloat(kValue);
	fInput.value = ((kValueNum-273.15)*1.8)+32;
	cInput.value = kValueNum - 273.15;
	rInput.value = kValueNum * 1.8;
}

//rankine to others
function rToOthers(rValue){
	const rValueNum = parseFloat(rValue);
	fInput.value = rValueNum - 459.67;
	cInput.value = (rValueNum - 491.67) * (5/9);
	kInput.value = rValueNum * (5/9)
}