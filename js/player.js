class player {
    constructor(){
    
    
    }
    getCount(){
   var refCount=database.ref('playerCount')
    refCount.on("value",function(data){
    playerCount=data.val();

   })

    }
    updateCount(count){
    database.ref('/').set(
    {
        playerCount:count
    }
)

    }
    updateName(name){
var playerIndex="player"+playerCount
database.ref(playerIndex).set(
    {
        name:name
    }
)
    }
} 
