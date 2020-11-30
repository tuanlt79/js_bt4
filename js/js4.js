// -------------------BÀI TẬP 1----------------------------------------------------
/**
 * Mô hình 3 khối.
 * Khối 1:
 * Nhập vào 3 số
 * Khối 2:
 * Tạo 3 biến: num, num2, num3
 * Sử dụng If, else if để so sánh 3 số vừa nhập
 * num > num2 và num > num 3 => num lớn nhất
 * num2 > num và num2 > num3 và num > num3 => num2 lớn nhất > num3 > num
 * Còn lại.
 * Khối 3:
 * In ra sắp xếp tăng dần
 * 
 */
document.getElementById("btnTang").addEventListener("click", function () {
    var num = parseFloat(document.getElementById("num").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var num3 = parseFloat(document.getElementById("num3").value);

    if (num > num2) {
        if (num2 > num3) {
            // num3 < num2 < num
            document.getElementById("txtTang").innerHTML = (num3 + '<' + num2 + '<' + num);

        }
        else if (num > num3) {
            // num2 < num3 < num
            document.getElementById("txtTang").innerHTML = (num2 + '<' + num3 + '<' + num);
        }
        else {
            // num2 < num < num3
            document.getElementById("txtTang").innerHTML = (num2 + '<' + num + '<' + num3);
        }
    }
    else if (num2 > num3) {
        if (num > num3) {
            // num3 < num < num2
            document.getElementById("txtTang").innerHTML = (num3 + '<' + num + '<' + num2);
        }
        else {
            //num < num3 < num2
            document.getElementById("txtTang").innerHTML = (num + '<' + num3 + '<' + num2);
        }
    }
    else {
        //num < num2 < num3
        document.getElementById("txtTang").innerHTML = (num + '<' + num2 + '<' + num3);
    }
});
// ---------------------------BÀI TẬP 2--------------------------------------------
/**
 * Mô hình 3 khối.
 * Khối 1:
 * Chọn người muốn chào, Bố, Mẹ, Em Gái, Anh Trai
 * Khối 2:
 * Tạo biến select, khai báo value trong từng mục chọn select
 * Sử dụng if == value của select rồi xuất câu chào.
 * Khối 3:
 * In ra câu chào của người đã chọn
 * 
 */
document.getElementById("btnCH").addEventListener("click", function () {
    var selectVT = document.getElementById("selectVT").value;
    if (selectVT == 'B') {
        alert('Hello Bố');
    }
    if (selectVT == 'M') {
        alert('Hello Mẹ');
    }
    if (selectVT == 'E') {
        alert('Hello Em Gái Nuôi');
    }
    if (selectVT == 'A') {
        alert('Hello Anh Trai Mưa');
    }
});
// ---------------------------BÀI TẬP 3--------------------------------------------

/**
 * Mô hình 3 khối.
 * Khối 1:
 *Nhập vào 3 số nguyên
 * Khối 2:
 * Tạo 3 biến number,
 * Sử dụng if
 * Tạo 2 biến countChan = 0 (đại diện số lượng số chẵn). countLe =0 ( đại diện cho số lẻ).
 * Sử dụng if
* Để biết số đó có chẵn ko thì mình đem chia % cho 2. Nếu kết quả là 0 thì là chia hết, tăng count lên 1 (countChan++)
* Ngược lại, không cộng
* Có được số lượng số chẵn rồi thì lấy 3 - count = số lượng số lẻ
 * Khối 3:
 * In ra có bao nhiêu số là chẵn, lẻ

 */
function demSoNguyen() {
    var number1 = parseFloat(document.getElementById("number1").value);
    var number2 = parseFloat(document.getElementById("number2").value);
    var number3 = parseFloat(document.getElementById("number3").value);
    var countChan = 0;
    var countLe = 0;
    if (number1 % 2 == 0   ) {
        countChan++;
        if (number1 % 2 != 0   ) {
            countLe = 3 - countChan;
            
        }
    } if (number2 % 2 == 0) {
        countChan++;
        if (number2 % 2 != 0) {
            countLe = 3 - countChan;
        }
    }
     if (number3 % 2 == 0) {
         countChan++;
         if (number3 % 2 != 0) {
            countLe = 3 - countChan;
         }
     }

    else {
        alert('Vui lòng nhập số thích hợp để đếm'); 
    }
    document.getElementById("txtDem").innerHTML = 'Có '+ countChan+' số chẵn <br>' + 'Có '+countLe+' số lẻ.' ;
}
document.getElementById("btnDem").addEventListener("click", demSoNguyen);
// ---------------------------BÀI TẬP 4--------------------------------------------
/**
 * Khối 1:
 * Nhập 3 cạnh của tam giác
 * Khối 2:
 * Tạo 4 biến của cạnh: canh1, canh2, canh 3, conten =0.
 * Sử dụng if hoặc if else
 *  Nếu có 2 cạnh bất kì bằng nhau => tam giác cân
_Nếu 3 cạnh bằng nhau => tam giác đều
_Nếu có 1 cạnh bằng tổng bình phương 2 cạnh còn lại => tam giác vuông (pytago)
_Nếu không rơi vào các loại trên => tam giác thường
 * Khối 3:
 * Kiểm tra kết quả và xuất loại tam giác
 */
function timTamGiac() {
    var canh1 = parseFloat(document.getElementById("numb1").value);
    var canh2 = parseFloat(document.getElementById("numb2").value);
    var canh3 = parseFloat(document.getElementById("numb3").value); 
    var conten = 0;

    if(canh1 == canh2 && canh2== canh3) {
        alert('Tam Giác Đều')
    }
    else if (canh1 == canh2  || canh2 == canh3 || canh1 == canh3) {
        alert("Tam Giác Cân")
        
    }
    else if (canh1 * canh1 + canh2 * canh2 == canh3 * canh3
        || canh1 * canh1 + canh3 * canh3 == canh2 * canh2
        || canh2 * canh2 + canh3 * canh3 == canh1 * canh1) {
            alert('Tam Giác Vuông')
        }
    else {
        alert("Đây là tam giác thường")
    }
   
}
document.getElementById("btnTG").addEventListener("click", timTamGiac);


