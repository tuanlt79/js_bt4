// -------------------BÀI TẬP 1----------------------------------------------------
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


