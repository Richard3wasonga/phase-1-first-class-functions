function receivesAFunction(callback,x, y){
    let result = x + y;
    callback(result)

}
function display(result){
    console.log(result)
}
receivesAFunction(display,2,2)

function returnsANamedFunction(){
    return function namrdfunction(){

    }
}
function returnsAnAnonymousFunction() {
    return function(){
        
    }
}