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
				
		},100);
	}
	else if(green <= 255){
		setTimeout(function(){
				green++;
				document.body.style.background = 'rgb(' + red + ',' + green + ',' + blue + ')'; 				
				changecolors();
		},100);
	}
	else if(blue <= 255){
		setTimeout(function(){
				blue++;
				document.body.style.background = 'rgb(' + red + ',' + green + ',' + blue + ')'; 
				changecolors();
		},100);
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
		},100);
	}
	else if(green >= 0){
		setTimeout(function(){
				green--;
				document.body.style.background = 'rgb(' + red + ',' + green + ',' + blue + ')'; 				
				removecolors();
		},100);
	}
	else if(blue >= 0){
		setTimeout(function(){
				blue--;
				document.body.style.background = 'rgb(' + red + ',' + green + ',' + blue + ')'; 
				removecolors();
		},100);
	}
	else{
		changecolors();
	}
}
}
					
var timeout = 25;

function startPulseBg(){
     stopColorWheel = 1;
     stopPulse = 0;
     timeout = 25;
     red = 0;
     green = 0;
     blue = 0;
     pulse1();
}

function pulse1() { 
if(stopPulse==0){

	if(red <= 150){
		setTimeout(function(){
				red++;
				//timeout--;
				document.body.style.background = 'rgb(' + red + ',' + green + ',' + blue + ')'; 
				pulse1();
				
		},timeout);
	}
	else{
		pulse2();
	}
}
} 

function pulse2(){
if(stopPulse==0){
	if(red >= 25){
		setTimeout(function(){
				red--;
				//timeout++;
				document.body.style.background = 'rgb(' + red + ',' + green + ',' + blue + ')'; 
				pulse2();
		},timeout);
	}
	else{
		pulse1();
	}
}
}			

function startBlueBg(){
stopColorWheel = 1;
stopPulse = 1;
$('body').css('background-image', 'url(img/background-blue.jpg)');
}

function startPaperBg(){
stopColorWheel = 1;
stopPulse = 1;
$('body').css('background-image', 'url(img/background-paper.jpg)');
}

function startWoodBg(){
stopColorWheel = 1;
stopPulse = 1;
$('body').css('background-image', 'url(img/background-wood.jpg)');
}


