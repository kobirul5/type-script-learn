
let hero;

function getHero(){
    return "hero"
}

hero = getHero();


function addTow(num:number){
    // function not accept any other type but number
    return num+2;
}
addTow(6)
function getUpper(val: string){
    // function not accept any other type but string
    return val.toUpperCase();
}
getUpper("kobirul")

function signUpUser(name:string, email: string, isPaid: boolean){

}

signUpUser("kobirul", "kobirul@gmail.com", false)

export {}