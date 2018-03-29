var greet = 'Hello,請問您是本日壽星嗎?';
document.getElementById('greet').textContent = greet;

var myBirth = 6;
var nowBirth = 3;
var happyBirthday = myBirth == nowBirth;
console.log(happyBirthday);
document.getElementById('ans1').textContent = happyBirthday + '，我不是';
sumPeople = 2;
nowPeople = 1;
var ans = sumPeople !== nowPeople;
console.log(ans);
document.getElementById('ans2').textContent = ans + '，是得沒錯!';