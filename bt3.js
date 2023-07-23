let number = +prompt("Nhập một số nguyên bất kỳ");
if (number > 0) {
    alert("Số nhập là " + number + " và nó lớn hơn 0");
} else if (number < 0) {
    alert("Số bạn nhập là " + number + " và nó nhỏ hơn 0");
} else {
    alert("Số bạn nhập là " + number + " và nó bằng 0");
}