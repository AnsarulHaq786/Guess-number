secretNumber=7;
userNumber=parseInt(prompt("Guess the secret number(1 to 9):"));
while(userNumber!==secretNumber)
{
    userNumber=parseInt(prompt("Your guess is wrong! Try again:"));
}
console.log("Congratulations! Here is your gift.");

let linkElement = document.getElementById("randomlink");

linkElement.href = "https://youtu.be/xvFZjo5PgG0?feature=shared&autoplay=1&mute=0";
