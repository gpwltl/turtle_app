var Observable = require("FuseJS/Observable");

function goBack()
{
	router.push("HomePage");
	console.log("Go to Back");
}


function Traffic_Red(){
    console.log('UPID'); //Sign_in 함수가 호출되었는지 확인

	fetch('http://192.168.31.109/arduino/digital/13/1',{method:'GET'}).then(function(response){
		status=response.status;
		response_ok = response.ok;

		console.log("turn_red");
		return response.json();
	}).then(function(responseObject){

	}).catch(function(err){

	});
}

function Traffic_Yellow(){
    console.log('UPID'); //Sign_in 함수가 호출되었는지 확인

	fetch('http://192.168.31.109/arduino/digital/13/2',{method:'GET'}).then(function(response){
		status=response.status;
		response_ok = response.ok;

		console.log("turn_yellow");
		return response.json();
	}).then(function(responseObject){

	}).catch(function(err){

	});
}

function Traffic_Green(){
    console.log('UPID'); //Sign_in 함수가 호출되었는지 확인

	fetch('http://192.168.31.109/arduino/digital/13/3',{method:'GET'}).then(function(response){
		status=response.status;
		response_ok = response.ok;

		console.log("turn_green");
		return response.json();
	}).then(function(responseObject){

	}).catch(function(err){

	});
}

function Traffic_Start(){
    console.log('UPID'); //Sign_in 함수가 호출되었는지 확인

	fetch('http://192.168.31.109/arduino/digital/13/4',{method:'GET'}).then(function(response){
		status=response.status;
		response_ok = response.ok;

		console.log("turn_start");
		return response.json();
	}).then(function(responseObject){

	}).catch(function(err){

	});
}

function Traffic_Stop(){
    console.log('UPID'); //Sign_in 함수가 호출되었는지 확인

	fetch('http://192.168.31.109/arduino/digital/13/5',{method:'GET'}).then(function(response){
		status=response.status;
		response_ok = response.ok;

		console.log("turn_stop");
		return response.json();
	}).then(function(responseObject){

	}).catch(function(err){

	});
}


 module.exports = {

	goBack : goBack,
	Traffic_Red: Traffic_Red,
	Traffic_Yellow: Traffic_Yellow,
	Traffic_Green: Traffic_Green,
	Traffic_Start: Traffic_Start,
	Traffic_Stop: Traffic_Stop

	
	};