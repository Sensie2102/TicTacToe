const player_X = "X"
const player_O = "O"
let turn = player_X
let turn_no = 1

const game_grid = Array.from({ length: 3 }, () =>
new Array(3).fill(null))
console.log(game_grid)

const doc = document.getElementsByClassName("griditem")
const grid_array = Array.from(doc)

function game_begin(){
    grid_array.forEach(item=>item.addEventListener('click',clicked))
}

function game_win(row,col,turn){
    if(row == 1 && col == 1){
        if(game_grid[row-1][col-1] == turn && game_grid[row+1][col+1] == turn){
            return true
        }
        else if(game_grid[row+1][col-1] == turn && game_grid[row-1][col+1] == turn){
            return true
        } 
        else if(game_grid[row+1][col] == turn && game_grid[row-1][col] == turn){
            return true
        }else if(game_grid[row][col+1] == turn && game_grid[row][col-1] == turn){
            return true
        }  
        else {
            return false
        }
    }
    if(row == 0 && col == 0){
        if(game_grid[row+1][col] == turn && game_grid[row+2,col] == turn){
            return true
        }else if(game_grid[row][col+1] == turn && game_grid[row][col+2] == turn){
            return true
        }
        else if(game_grid[row+1][col+1] == turn && game_grid[row+2][col+2] == turn){
            return true
        }
        else return false
    }
    if(row == 1 && col == 0){
        if(game_grid[row+1][col] == turn && game_grid[row-1][col] == turn){
            return true
        }else if(game_grid[row][col+1] == turn && game_grid[row][col+2] == turn){
            return true
        }else{
            return false
        }
    }
    if(row == 2 && col == 0){
        if(game_grid[row-1][col] == turn && game_grid[row-2][col] == turn){
            return true
        }else if(game_grid[row][col+1] == turn && game_grid[row][col+2] == turn){
            return true
        }
        else if(game_grid[row-1][col+1] == turn && game_grid[row-2][col+2] == turn){
            return true
        }
        else return false
    }
    if(row == 0 && col == 1){
        if(game_grid[row][col+1] == turn && game_grid[row][col-1] == true){
            return true
        }else if(game_grid[row+1][col] == turn && game_grid[row+2][col] == turn){
            return true
        }else{
            return false
        }
    }
    if(row == 0 && col == 2){
        if(game_grid[row][col-1] == turn && game_grid[row][col-2] == turn){
            return true
        }else if(game_grid[row+1][col] == turn && game_grid[row+2][col] == turn){
            return true
        }
        else if(game_grid[row+1][col-1] == turn && game_grid[row+2][col-2] == turn){
            return true
        }
        else return false
    }
    if(row == 1 && col == 2){
        if(game_grid[row+1][col] == turn && game_grid[row-1][col] == turn){
            return true
        }
        else if(game_grid[row][col-1] == turn && game_grid[row][col-2] == turn){
            return true
        }
        else return false
    }
    if(row == 2 && col == 1){
        if(game_grid[row][col+1] == turn && game_grid[row][col-1] == true){
            return true
        }else if(game_grid[row-1][col] == turn && game_grid[row-2][col] == turn){
            return true
        }else{
            return false
        }
    }
    if(row == 2 && row == 2){
        if(game_grid[row-1][col] == turn && game_grid[row-2][col] == turn){
            return true
        }else if(game_grid[row][col-1] == turn && game_grid[row][col-2] == turn){
            return true
        }
        else if(game_grid[row-1][col-1] == turn && game_grid[row-2][col-2] == turn){
            return true
        }
        else return false
    }
    return false
}

function clicked(e){
    const id = e.target.id
    const row = Math.floor(id/3)
    const col = id%3
    if(!game_grid[row][col]){
        game_grid[row][col] = turn
        e.target.innerText = turn
        console.log(turn_no)
        
        
        if(turn_no>=5){
            console.log("in if")
            if(game_win(row,col,turn)){
                alert("Game won by Player" + turn)
                location.reload();
            }
        }
        turn = turn == player_X?player_O:player_X
        turn_no++        
    } 
}

$("#reset").click(()=>{
    game_grid.forEach(element => {
        element.fill(null)
    });
    grid_array.forEach(item => {
        item.innerText = ""
    });
    turn = player_X
    turn_no = 1
})

game_begin()