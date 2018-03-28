var greet = '歡迎光臨，請問需要什麼呢?';
document.getElementById('greetId').textContent = greet;

document.getElementById('total').onclick = function(){
    var humPrice = 60;
    var cokePrice = 30;
    var hum = parseInt(document.getElementById('hum').value)*humPrice;
    var coke = parseInt(document.getElementById('coke').value)*cokePrice;
    var total = document.getElementById('total').value;
    var count = document.getElementById('count').textContent = hum+coke;5
    console.log(hum);
    console.log(coke);
    console.log(typeof(hum+coke));
    console.log(hum+coke);
}
