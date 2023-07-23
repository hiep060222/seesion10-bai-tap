let test = +prompt("Nhập điểm bài kiểm tra");
let midterm = +prompt("Nhập điểm thi giữa kỳ");
let final = +prompt("Nhập điểm thi cuối kỳ");
let average = (test + midterm + final) / 3;
let rank;
if (average >= 9) {
    rank = "xuất sắc";
} else if (average >= 8) {
    rank = "giỏi";
} else if (average >= 7) {
    rank = "khá";
} else if (average >= 5) {
    rank = "trung bình";
} else {
    rank = "yếu";
}
alert("Điểm trung bình của bạn là " + average + " và xếp hạng học lực của bạn là " + rank);