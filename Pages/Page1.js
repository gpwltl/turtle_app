var Observable = require("FuseJS/Observable");

function goBack()
{
	router.push("HomePage");
	console.log("Go to Back");
}

function MoveGo(){
    console.log('UPID'); //Sign_in 함수가 호출되었는지 확인

	fetch('http://8a052a58.ngrok.io/turtlebot3/move/front',{method:'GET'}).then(function(response){
		status=response.status;
		response_ok = response.ok;

		console.log("success_go");
		return response.json();
	}).then(function(responseObject){

	}).catch(function(err){

	});
}

function MoveStop(){
    console.log('UPID'); //Sign_in 함수가 호출되었는지 확인

	fetch('http://8a052a58.ngrok.io/turtlebot3/move/stop',{method:'GET'}).then(function(response){
		status=response.status;
		response_ok = response.ok;

		console.log("success_stop");
		return response.json();
	}).then(function(responseObject){

	}).catch(function(err){

	});
}

function MoveLeft(){
    console.log('UPID'); //Sign_in 함수가 호출되었는지 확인

	fetch('http://8a052a58.ngrok.io/turtlebot3/move/left',{method:'GET'}).then(function(response){
		status=response.status;
		response_ok = response.ok;

		console.log("success_left");
		return response.json();
	}).then(function(responseObject){

	}).catch(function(err){

	});
}

function MoveRight(){
    console.log('UPID'); //Sign_in 함수가 호출되었는지 확인

	fetch('http://8a052a58.ngrok.io/turtlebot3/move/right',{method:'GET'}).then(function(response){
		status=response.status;
		response_ok = response.ok;

		console.log("success_right");
		return response.json();
	}).then(function(responseObject){

	}).catch(function(err){

	});
}

function MoveReverse(){
    console.log('UPID'); //Sign_in 함수가 호출되었는지 확인

	fetch('http://8a052a58.ngrok.io/turtlebot3/move/back',{method:'GET'}).then(function(response){
		status=response.status;
		response_ok = response.ok;

		console.log("success_reverse");
		return response.json();
	}).then(function(responseObject){

	}).catch(function(err){

	});
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
	MoveGo : MoveGo,
	MoveStop : MoveStop,
	MoveLeft : MoveLeft,
	MoveRight : MoveRight,
	MoveReverse : MoveReverse,
	Traffic_Red: Traffic_Red,
	Traffic_Yellow: Traffic_Yellow,
	Traffic_Green: Traffic_Green,
	Traffic_Start: Traffic_Start,
	Traffic_Stop: Traffic_Stop

};

