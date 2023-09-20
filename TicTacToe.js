let p1_turn = true

$(".grid div").click(function(){
    let clicked_ele = this
    if(p1_turn){
        $(clicked_ele).text("X")
        p1_turn = false
    }else{
        $(clicked_ele).text("O")
        p1_turn = true
    }
    
})

// $("#reset").click(function (){
//     location.reload()
// })
