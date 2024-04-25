import inquirer from  "inquirer";
type ans = {
    userguess:number
}
const systemgeneratedno = Math.floor(Math.random()*10)
const answer:ans = await inquirer.prompt([{
    type:"number",
    name:"userguess",
    message:"Enter your Guess b/w 1 to 10"
}])
const {userguess} = answer
console.log(`Your guess, ${userguess}, SystemNumber, ${systemgeneratedno}`)
if(userguess==systemgeneratedno){
console.log("Yay your answer is correct\n ?YOU WIN")
}else{
    console.log("Better luck next time")
}








