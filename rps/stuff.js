	const compVars = ["r","p","s"];
	document.onkeyup(function(e) {
		let user = e.key;
		let computerGuess = compVars[floor(3*(Math.random()))];
		let wins=0;
		let losses=0;

		if((user === "r") ||(user === "s")||(user === "p")){
			if(user == computerGuess){

		}else if(user == "r" && computerGuess == "p"){

		}else if(user == "r" && computerGuess == "s"){

		}else if(user == "p" && computerGuess == "r"){

		}else if(user == "p" && computerGuess == "s"){

		}else if(user == "s" && computerGuess == "r"){

		}else if(user == "s" && computerGuess == "p"){

		}
	    "<p>You chose: "+user+"</p>"+
	    "<p>The computer chose: " +computerGuess+ "</p>"+
	    "<p>wins: "+ wins +"</p>"+
	    "<p>losses: " losses + "</p>"
		} 
	})
