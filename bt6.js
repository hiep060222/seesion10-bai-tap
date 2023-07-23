let sales = +prompt("Nhập doanh số bán hàng");
let commission;
if (sales >= 100000) {
    commission = sales * 0.1;
} else if (sales >= 50000) {
    commission = sales * 0.07;
} else if (sales >= 20000) {
    commission = sales * 0.05;
} else if (sales >= 10000) {
    commission = sales * 0.03;
} else {
    commission = sales * 0.02;
}
alert("Hoa hồng bạn nhận được là " + commission);