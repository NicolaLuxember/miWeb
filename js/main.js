
var timeEnSegundos = 10;
var time = timeEnSegundos * 10;
var cantASumar = 10;
var cont = 10;
var intervalId = null;
var btnPartyEnabled = true;

var segundo = 1;

document.addEventListener('DOMContentLoaded', function() {
	var elems = document.querySelectorAll('.sidenav');
	var instances = M.Sidenav.init(elems);
});

document.addEventListener('scroll', function(){
	if (pageYOffset >= 70){
          //document.getElementById("barra").className = "newStyle";
     }
});


function InitParty(){
	if(btnPartyEnabled){
			intervalId = setInterval(function(){
			if(cont <= time){
				//console.log("Contador: " + cont +  "  Time: " + time);
				console.log(segundo + "s");
				segundo++;
				cont += cantASumar;
			}else{
				clearInterval(intervalId);
				cont = 10;
				segundo = 1;
				btnPartyEnabled = true;
			}

		},1000);
	}	
	btnPartyEnabled = false;
}

