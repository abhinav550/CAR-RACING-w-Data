class game {
constructor(){


}
getState(){
    var stateREF=database.ref('gameState')
    stateREF.on("value",function(data){
    gamestate=data.val();
    })
}
updateState(state){
database.ref('/').set(
{
gamestate:state
}

)



}
}
