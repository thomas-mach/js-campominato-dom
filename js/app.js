const gridElement = document.getElementById('grid')
const playButton = document.getElementById('playButton')
const containerHTML = document.getElementById('container')
const levelsEl = document.getElementById('levels')
const scoreEl = document.getElementById('score')
let bombs


function bombGen(max){
    const bombsArray = []
    while(bombsArray.length < 16){
    
    const bomb = parseInt(Math.floor(Math.random() * max) + 1)
    
    if(bombsArray.includes(bomb) === false)
        bombsArray.push(bomb)
    } 
    console.log(bombsArray)

    return bombsArray
    }

function getSize(){
    let level = levelsEl.value
    let size = 0
    if(level === 'easy'){
        gridElement.className = 'grid'  
        size = 10
        bombs = bombGen(100)
    } else if (level === 'medium'){
        gridElement.className = 'grid2'  
        size = 9
        bombs = bombGen(81)
    } else if (level === 'hard'){
        gridElement.className = 'grid3'  
        size = 7
        bombs = bombGen(49) 
        }
    return size
    }
    
    function startGame(){
        let pointsCount = 0
        scoreEl.innerHTML = '0'
        gridElement.innerHTML = ''
        size = getSize()
        cells = size ** 2
        console.log(cells)

        for (let i = 0; i < cells; i++){
            let position = i + 1
            const newDiv = document.createElement('div')
            newDiv.className = 'cell'
            // newDiv.innerHTML = position
            gridElement.append(newDiv)
            
            newDiv.addEventListener('click', function(){
            newDiv.classList.toggle('bg-color')
            newDiv.classList.add('cell_cliked')
                console.log(position)
            if (bombs.includes(position) === false){
                pointsCount++
                scoreEl.innerHTML = pointsCount
                console.log( 'punti ' + pointsCount)
            }
            if (bombs.includes(position) === true){
                newDiv.className = 'bomb'
                const allCells = document.querySelectorAll('.cell')
                allCells.forEach(cell => {
                    cell.classList.add('cell_cliked')
                })
            
                console.log('gameover')
                console.log(allCells)
        

            } 
        })
    }

    }
    
  

playButton.addEventListener('click', startGame)





   
    


