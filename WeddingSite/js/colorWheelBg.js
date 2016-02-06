var red = 0;
var green = 0;
var blue = 0;

function startColorWheelBg(){
     stopColorWheel = 0;
     stopPulse =  1;
     red = 0;
     green = 0;
     blue = 0;
     changecolors();
}

function changecolors() { 
if(stopColorWheel==0){
        if(red <= 255){
		setTimeout(function(){
				red++;
				document.body.style.background = 'rgb(' + red + ',' + green + ',' + blue + ')'; 
				changecolors();
				
		},10);
	}
	else if(green <= 255){
		setTimeout(function(){
				green++;
				document.body.style.background = 'rgb(' + red + ',' + green + ',' + blue + ')'; 				
				changecolors();
		},10);
	}
	else if(blue <= 255){
		setTimeout(function(){
				blue++;
				document.body.style.background = 'rgb(' + red + ',' + green + ',' + blue + ')'; 
				changecolors();
		},10);
	}
	else{
		removecolors();
	}
}
} 

function removecolors(){
if(stopColorWheel==0){
	if(red >= 0){
		setTimeout(function(){
				red--;
				document.body.style.background = 'rgb(' + red + ',' + green + ',' + blue + ')'; 
				removecolors();
		},10);
	}
	else if(green >= 0){
		setTimeout(function(){
				green--;
				document.body.style.background = 'rgb(' + red + ',' + green + ',' + blue + ')'; 				
				removecolors();
		},10);
	}
	else if(blue >= 0){
		setTimeout(function(){
				blue--;
				document.body.style.background = 'rgb(' + red + ',' + green + ',' + blue + ')'; 
				removecolors();
		},10);
	}
	else{
		changecolors();
	}
}
}
					