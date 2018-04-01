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

// var farms = [
//     {
//         farmer:'卡斯柏',
//         field:6,
//         chick:200,
//         banana:5000
//     },
//     {
//         farmer:'查理',
//         field:10,
//         chick:50,
//         banana:5000
//     },
//     {
//         farmer:'約翰',
//         field:6,
//         chick:120,
//         banana:5000
//     }
// ]
// var farmsTotal = farms.length;
// console.log(farmsTotal);
// var bananaTotal = 0;
// for(var i = 0; i<farmsTotal; i++){
//     bananaTotal = bananaTotal+farms[i].banana;
// }
// console.log(bananaTotal);