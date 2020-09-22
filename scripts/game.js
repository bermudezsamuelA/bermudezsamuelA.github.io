document.addEventListener('DOMContentLoaded',()=>{
	const tetris = document.querySelector('.tetris');
	let squares = Array.from(document.querySelectorAll('.tetris div'));
	
	const scoreDisplay = document.querySelector('.tabla .score');
	const startBtn = document.querySelector('#start');
	const width = 10;
	let timerId
	let score=0;
	const colors =[ 
	'rgba(208, 13, 13, 0.5)', 
	'rgba(208, 13, 137, 0.5)', 
	'rgba(13, 208, 94, 0.5)', 
	'rgba(232, 247, 29, 0.5)',
	'rgba(247, 166, 29, 0.5)'];

	//bloques 
	const lBloque = [
		[1,2,width,(width*2)-1],
		[width, width+1, width+2, width*2+1],
		[1, width, width*2-1, width*2],
		[width, width*2-1, width*2, width*2+1]
	];

	  const zBloque = [
	    [0,1,width,width+1],
	    [1, width,width-1,width*2-2],
	    [1,2,width-1,width],
	    [0, width,width-1,width*2-1]
	  ];

	  const tBloque = [
	    [2,width,width+1,width+2],
	    [1,width,width+1,width*2-1],
	    [width-1,width,width+1,width*2-1],
	    [1,width-1,width,width*2-1]
	  ];

	  const oBloque = [
	    [0,1,width,width-1],
	    [0,1,width,width-1],
	    [0,1,width,width-1],
	    [0,1,width,width-1]
	  ];

	  const iBloque = [
	    [1,width,width*2-1,width*3-2],
	    [width-1,width,width+1,width+2],
	    [1,width,width*2-1,width*3-2],
	    [width-1,width,width+1,width+2]
	  ];

  	const bloques = [lBloque, zBloque, tBloque, oBloque, iBloque];

  	let currentPosition = 4;
  	let currentRotation = 0;
	const displaySquares = document.querySelectorAll('.game .mini div');
  	const displayWidth = 4;
  	let displayIndex = 0;
	let nextRandom = 0;


  	//siguiente bloque
	const nextBloque = [
		[0, 1, displayWidth, displayWidth*2-1], //L
		[0, 1, displayWidth, displayWidth+1], //Z
		[1, displayWidth-1, displayWidth, displayWidth+1], //T
		[0, 1, displayWidth-1, displayWidth], //o
		[1,displayWidth,displayWidth*2-1,displayWidth*3-2] //I
	];

  	
  	//random bloque
  	let random = Math.floor(Math.random()*bloques.length);
  	let current = bloques[random][currentRotation];

  	//dibujando y borrando
  	const draw= ()=>{
  		current.forEach(index =>{
  			squares[currentPosition + index].classList.add('bloque');
  			squares[currentPosition + index].style.backgroundColor = colors[random];

  		})
  	};
  	const undraw=()=>{
  		current.forEach(index =>{
  			squares[currentPosition + index].classList.remove('bloque');  			  	squares[currentPosition + index].style.backgroundColor= '';

  		})
  	}

	

	const displayShape=()=>{
		displaySquares.forEach(square =>{
			square.classList.remove('bloque');
  			square.style.backgroundColor= '';

		});
		nextBloque[nextRandom].forEach( index => {
			displaySquares[displayIndex + index].classList.add('bloque');
			displaySquares[displayIndex + index].style.backgroundColor= colors[nextRandom];
		})
	};
 	
 	const addScore = ()=>{
  		for (let i = 0; i < 99; i +=width) {
	      const row = [i, i+1, i+2, i+3, i+4, i+5, i+6, i+7, i+8]

	      if(row.every(index => squares[index].classList.contains('fin'))) {
	        score +=10
	        scoreDisplay.innerHTML = score
	        row.forEach(index => {
	          squares[index].classList.remove('fin')
	          squares[index].classList.remove('bloque')
	          squares[index].style.backgroundColor = ''
	        })
	        const squaresRemoved = squares.splice(i, (width-1))
	        squares = squaresRemoved.concat(squares)
	        squares.forEach(cell => tetris.appendChild(cell))
	      }
	    }
  	};

  	const gameOver= () =>{
  		if(current.some(index => squares[currentPosition + index].classList.contains('fin'))){
  			scoreDisplay.innerHTML = 'end';
  			clearInterval(timerId);
  		}
  	}

  	//detener

  	const detener=()=>{
  		if(current.some(index => squares[currentPosition + index + width-1].classList.contains('fin'))){
  			current.forEach(index => squares[currentPosition+index].classList.add('fin'));
  			//empieza otro
  			random = nextRandom;
  			nextRandom = Math.floor(Math.random()*bloques.length);
  			current = bloques[random][currentRotation];
  			currentPosition=4;
  			draw();
  			displayShape();
  			addScore();
  			gameOver();
  		}
  	}

  	// mover para abajo casa segundo
   	const moveDown = ()=>{
  		undraw();
  		currentPosition +=(width-1);
  		draw();
  		detener();
  	}
  	

  	const moveLeft=()=>{
  		undraw()
  		const isAtLeftEdge = current.some(index => (currentPosition + index)%(width-1) ===0);
  		if(!isAtLeftEdge) currentPosition -= 1;
  		if(current.some(index => squares[currentPosition +index].classList.contains('fin'))){
  			currentPosition +=1;
  		}
  		draw();
  	};

  	const moveRight = ()=>{
  		undraw()
  		const isAtRightEdge = current.some(index => (currentPosition + index)%(width-1) === (width-2));
  		if(!isAtRightEdge) currentPosition += 1;
  		if(current.some(index => squares[currentPosition +index].classList.contains('fin'))){
  			currentPosition -=1;
  		}
  		draw();
  	}
  	function isAtRight() {
	    return current.some(index=> (currentPosition + index + 1) % (width-1) === 0)  
	}
	  
	function isAtLeft() {
	    return current.some(index=> (currentPosition + index) % (width-1) === 0)
	}

  	function checkRotatedPosition(P){
    P = P || currentPosition       
    if ((P+1) % width < 4) {              
      if (isAtRight()){            
        currentPosition += 1    
        checkRotatedPosition(P) 
        }
    }
    else if (P % width > 5) {
      if (isAtLeft()){
        currentPosition -= 1
      checkRotatedPosition(P)
      }
    }
  }
  
  //rotate the tetromino
  function rotate() {
    undraw()
    currentRotation ++
    if(currentRotation === current.length) { 
      currentRotation = 0
    }
    current = bloques[random][currentRotation]
    checkRotatedPosition()
    draw()
  }

  	//keys
  	function control(e){
  		if(e.keyCode===37){
  			moveLeft();
  		} else if (e.keyCode===38){
  			rotate()
  		} else if (e.keyCode===39){
  			moveRight();
  		} else if (e.keyCode===40){
  			moveDown();
  		}
  	}
  	document.addEventListener('keyup',control);

  	startBtn.addEventListener('click', ()=>{
  		if (timerId){
  			clearInterval(timerId);
  			timerId = null;
  		} else{
  			draw();
  			timerId = setInterval(moveDown,1000);
  			nextRandom = Math.floor(Math.random()*bloques.length);
  			displayShape();
  		}
  	});

 
});