//******************************************************//
//										                //
//					     FARMKILLE                      //
//                                                      //
//    Graphics and Illustrations by: DANI WINTERS       //
//                                                      //
//******************************************************//


var score = 0;
//**************************COW*************************//


var strobe=setInterval("moveCow()", 3000);

function moveCow(){
	random1=Math.random()*1000;
	random2=Math.random()*1000;
	document.getElementById('cow').style.position = 'absolute';
	document.getElementById('cow').style.top = random1 + 'px';
	document.getElementById('cow').style.left = random2 + 'px';
	document.getElementById('cow').src='Images/cow.gif';
};

moveCow();

function cowDeath(){
	document.getElementById('cow').src='Images/bloodsplat.gif'
};

function cowClicked(){
	document.getElementById('cow').src="Images/bloodsplat.gif";
	score=score + 1;
	console.log('score is '+score);
		function endGame(){
			if (score==200){
				alert("YOU SAVED THE DAY");
				clearInterval(strobe);
			};
		};
	endGame();
};



//**************************PIG*************************//


strobe=setInterval("movePig()", 3000)

function movePig(){
	random1=Math.random()*1000;
	random2=Math.random()*1000;
	document.getElementById('pig').style.position = 'absolute';
	document.getElementById('pig').style.top = random1 + 'px';
	document.getElementById('pig').style.left = random2 + 'px';
	document.getElementById('pig').src='Images/pig.gif';
};

movePig();

function pigDeath(){
	document.getElementById('pig').src='Images/bloodsplat.gif'
};

function pigClicked(){
	document.getElementById('pig').src="Images/bloodsplat.gif";
	score=score + 5;
	console.log('score is '+score);
		function endGame(){
			if (score==200){
				alert("YOU SAVED THE DAY");
				clearInterval(strobe);
			};
		};
	endGame();
};


//************************CHICKEN***********************//


strobe=setInterval("moveChicken()", 3500);

function moveChicken(){
	random1=Math.random()*1200;
	random2=Math.random()*1200;
	document.getElementById('chicken').style.position = 'absolute';
	document.getElementById('chicken').style.top = random1 + 'px';
	document.getElementById('chicken').style.left = random2 + 'px';
	document.getElementById('chicken').src='Images/chicken.gif';
};

moveChicken();

function chickenDeath(){
	document.getElementById('chicken').src='Images/bloodsplat.gif'
};

function chickenClicked(){
	document.getElementById('chicken').src="Images/bloodsplat.gif";
	score=score + 10;
	console.log('score is '+score);
		function endGame(){
			if (score==200){
				alert("YOU SAVED THE DAY");
				clearInterval(strobe);
			};
		};
	endGame();
};


//*************************DONKEY***********************//


strobe=setInterval("moveDonkey()",1000);

function moveDonkey(){
	random1=Math.random()*2000;
	random2=Math.random()*2000;
	document.getElementById('donkey').style.position = 'absolute';
	document.getElementById('donkey').style.top = random1 + 'px';
	document.getElementById('donkey').style.left = random2 + 'px';
	document.getElementById('donkey').src='Images/donkey.gif';
};

moveDonkey();

function donkeyDeath(){
	document.getElementById('donkey').src='Images/bloodsplat.gif'
};

function donkeyClicked(){
	document.getElementById('donkey').src="Images/bloodsplat.gif";
	score=score + 20;
	console.log('score is '+score);
		function endGame(){
			if (score==200){
				alert("YOU SAVED THE DAY");
				clearInterval(strobe);
			};
		};
	endGame();
};
	

//*************************RABBIT***********************//


strobe=setInterval("moveRabbit()",2000);

function moveRabbit(){
	random1=Math.random()*900;
	random2=Math.random()*900;
	document.getElementById('rabbit').style.position = 'absolute';
	document.getElementById('rabbit').style.top = random1 + 'px';
	document.getElementById('rabbit').style.left = random2 + 'px';
	document.getElementById('rabbit').src='Images/rabbit.gif';
};

moveRabbit();

function rabbitDeath(){
	document.getElementById('rabbit').src='Images/bloodsplat.gif'
};

function rabbitClicked(){
	document.getElementById('rabbit').src="Images/bloodsplat.gif";
	score=score - 10;
	console.log('score is '+score);
		function endGame(){
			if (score==200){
				alert("YOU SAVED THE DAY");
				clearInterval(strobe);
			};
		};
	endGame();
};




//     lvw/.     //