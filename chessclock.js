var clockstate = 0;
var clockOne = 300;
var clockTwo = 300;
var incrementOne = 0;
var incrementTwo = 0;



function updateClock(starttime){
		let currenttime = new Date().getTime()
		if (clockstate == 1){
			// clockOne = (Math.floor((clockOne - .1) * 10)) / 10
			clockOne = clockOne - .1
			if (clockOne < 0){
				alert("Player One has timed out!")
				resetClock()
			}
			$("#clockOne").text(Math.floor(clockOne));
		}
		if (clockstate == 2){
			// clockTwo = (Math.floor((clockTwo - .1) * 10)) / 10
			clockTwo = clockTwo - .1
			if (clockTwo < 0){
				alert("Player Two has timed out!")
				resetClock()
			}
			$("#clockTwo").text(Math.floor(clockTwo));
		}
}

function startClock(){
			var starttime = new Date().getTime()
			clockstate = 1
			$("#startButton").hide();
			$(".titles").hide();
			clock = setInterval(function(){
				updateClock(starttime)
			}, 100);	
}

function resetClock(){
	console.log('addafa')
	clearInterval(clock)
	$("#startButton").show();
	$(".titles").show();
	clockstate = 0;
}


$(document).keypress(function(e) {
	const code = e.keyCode || e.which

	if (code == 97 && clockstate == 1) {
		clockstate = 2;
		clockOne = clockOne + incrementOne
		$('#clockOne').text(Math.floor(clockOne))
  		}

  	if (code == 108 && clockstate == 2){
  		clockstate = 1;
  		clockTwo = clockTwo + incrementTwo
  		$('#clockTwo').text(Math.floor(clockTwo))
  	}
});


$(document).ready(function() {
	$('#setOne').bind('input', function() {
		clockOne =  $(this).val()

		$('#clockOne').text(clockOne)
	});


	$('#incrementOne').bind('input', function() {
		if (Number($(this).val()) === 0){
			console.log('not a number')
			}

		else{

			incrementOne =  Number($(this).val())
    		 // get the current value of the input field.
			}
	});

	$('#setTwo').bind('input', function() {
		clockTwo =  $(this).val()
		$('#clockTwo').text(clockTwo)
    	
	});

	$('#incrementTwo').bind('input', function() {
		incrementTwo =  Number($(this).val())
    		 // get the current value of the input field.
		});
    
    $('#resetButton').click(function(){
    	resetClock()
    })

	$('#startButton').click(function() {
		if (clockOne < 1 || clockTwo < 1){ //negative increments might be fun
			alert("Initial Times for Clocks must be Positive.")
			return
		}

		$('#resetButton').show()

		console.log("incrementOne: " + incrementOne)
		console.log("incrementTwo: " + incrementTwo)
		startClock()
	})
})


