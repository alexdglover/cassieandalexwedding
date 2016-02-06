var red = 0;
var green = 0;
var blue = 0;
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