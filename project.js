let messages = [
    "You will win a new car!",
    "You will buy a big house!",
    "You will win a million at lotto game!",
    "You will find a gold cat!",
    "You will buy a new dress!"
];


function showMessage() {
    let chooseMessage = Math.floor(Math.random() * messages.length);
    
    //zeig in der console ob random richtig funktioniert
    console.log(chooseMessage);

    //alert(chooseMessage);
    document.getElementById("message").innerHTML = messages[chooseMessage];
}
