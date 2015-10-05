var hours = process.argv[2];
var minutes = process.argv[3];

var arabNum = [1, 4, 5, 9, 10, 40, 50];
var romanNum = ["I", "IV", "V", "IX", "X", "XL", "L"];
var res = "";
if (hours < 0 || hours > 23 || minutes < 0 || minutes > 59) {
    process.stdout.write("Время указано не верно");
    return;
}
function convert(num) {
    var res = "";
    var i = arabNum.length - 1;
    while(num > 0) {
        if (num >= arabNum[i]) {
            res += romanNum[i];
            num -= arabNum[i];
        }
        else i--;
    }
    return res;
}
var result = convert(hours) + ":" + convert(minutes);
process.stdout.write(result);

