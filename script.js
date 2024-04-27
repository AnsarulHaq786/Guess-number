let secretNumber=Math.floor(Math.random()*20+1);
let tryCount=0;
function checkNum()
{
    let userNumber=document.getElementById("input").value;
        if(userNumber<secretNumber)
        {
            tryCount++;
            document.getElementById("para").innerHTML=`Try Count=${tryCount}<br>Try greater number than this!`;
        }
            
        else if(userNumber>secretNumber)
        {
            tryCount++;
            document.getElementById("para").innerHTML=`Try Count=${tryCount}<br>Try smaller number than this!`;
        }     
        else
        {
            document.getElementById("para").innerHTML=`Congratulation you guessed the number in ${tryCount+1}th attempt!<br> Here is your gift`;
            document.getElementById("giftButton").style.display="block";
        }
}
function openGift()
{
    location.href="https://youtu.be/xvFZjo5PgG0?autoplay=1";
}