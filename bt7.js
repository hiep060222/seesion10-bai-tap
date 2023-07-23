let minutes = prompt("Nhập số phút gọi điện thoại");
let fee;
if (minutes <= 50) {
    fee = minutes * 600;
} else if (minutes <= 150) {
    fee = 50 * 600 + (minutes - 50) * 400;
} else if (minutes <= 200) {
    fee = 50 * 600 + 100 * 400 + (minutes - 150) * 200;
} else {
    fee = 50 * 600 + 100 * 400 + 50 * 200 + (minutes - 200) * 100;
}
alert("Cước điện thoại của bạn là " + fee);