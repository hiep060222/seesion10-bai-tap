let a = +prompt("Nhập số nguyên thứ nhất");
let b = +prompt("Nhập số nguyên thứ hai");
let c = +prompt("Nhập số nguyên thứ ba");
let max = a;
if (b > max) {
    max = b;
}
if (c > max) {
    max = c;
}
alert("Giá trị lớn nhất của ba số là " + max);