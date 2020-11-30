



// -------------------------------BÀI TẬP NÂNG CAO------------------------------------------------
document.getElementById("btnKQ").addEventListener("click", function () {
    var inputDay = parseInt(document.getElementById("inputDay").value);
    var inputMonth = parseInt(document.getElementById("inputMonth").value);
    var innputYear = parseInt(document.getElementById("innputYear").value);

    if (0 < inputDay && inputDay < 32) {
        var keTiepDay = ++inputDay;
        
    }
   if (0 < inputMonth && inputMonth < 13) {
       var keTiepMonth = ++inputMonth;
       
    }
    if (0 < innputYear ) {
        var keTiepYear = ++innputYear;
       
    }
    document.getElementById("txtKQ1").innerHTML = 'Ngày ' + keTiepDay + ' Tháng ' + keTiepMonth + ' Năm ' + keTiepYear + ' Kế Tiếp';

});

document.getElementById("btnKQ2").addEventListener("click", function () {
    var inputDay = parseInt(document.getElementById("inputDay").value);
    var inputMonth = parseInt(document.getElementById("inputMonth").value);
    var innputYear = parseInt(document.getElementById("innputYear").value);

    if (0 < inputDay && inputDay < 32) {
        
        var truocDay = --inputDay;
    }
   if (0 < inputMonth && inputMonth < 13) {
       
       var truocMonth = --inputMonth;
    }
    if (0 < innputYear ) {
        
        var truocYear = --innputYear;
    }
    document.getElementById("txtKQ1").innerHTML = 'Ngày '+truocDay + ' Tháng ' + truocMonth + ' Năm ' +truocYear +' Trước Đó';

});

document.getElementById("btnThongBao1").addEventListener("click", function () {
    var inputThang = parseInt(document.getElementById("inputThang").value);
    var inputNam = parseInt(document.getElementById("inputNam").value);
    if (inputThang == 1 || inputThang == 3 || inputThang ==5 || inputThang==7 || inputThang==8 || inputThang==10 ||inputThang==12) {
        alert('Tháng ' + inputThang + ' có 31 ngày');
    }
    if (inputThang == 4 || inputThang == 6 || inputThang ==9 || inputThang==11 ) {
        alert('Tháng ' + inputThang + ' có 30 ngày');
    }
    if ((inputNam % 4 == 0 && inputNam % 100 != 0 && inputThang == 2) || inputNam % 400 == 0) {
        alert('Năm '+inputNam+' Tháng '+inputThang+' nhuận có 29 ngày');
    }
     else if (inputThang == 2){
        alert('Tháng ' + inputThang + ' có 28 ngày');
        }
    
});

// ------------------Bài Số 3------------------------------

function docSo() {
    var inputNum = parseInt(document.getElementById("inputNum").value);
    var hundred = Math.floor(inputNum / 100);
    var ten = Math.floor(inputNum % 100 / 10);
    var unit = inputNum % 10;
    var conten1 = ' ';
    var conten3 = ' ';
    var conten2 = ' ';

    if (inputNum >= 100 && inputNum <= 999) {
        switch (hundred) {
            case 1:
                
                conten1 = 'Một Trăm ';
                break;
            case 2:
                conten1 = 'Hai Trăm ';
                break;
            case 3:
                conten1 = 'Ba Trăm ';
                    break;
            case 4:
                conten1 = 'Bốn Trăm ';
                break;
            case 5:
                conten1 = 'Năm Trăm ';
                    break;
            case 6:
                conten1 = 'Sáu Trăm ';
                break;
            case 7:
                conten1 = 'Bảy Trăm ';
                    break;
            case 8:
                conten1 = 'Tám Trăm ';
                break;
            case 9:
                conten1 = 'Chín Trăm ';
                    break;
        }
        switch (ten) {
            case 1:
                
                conten2 = 'Mười ';
                break;
            case 2:
                conten2 ='Hai Mươi ';
                break;
            case 3:
                conten2 ='Ba Mươi ';
                    break;
            case 4:
                conten2 ='Bốn Mươi ';
                break;
            case 5:
                    conten2 ='Năm Mươi ';
                    break;
            case 6:
                    conten2 ='Sáu Mươi ';
                break;
            case 7:
                    conten2 ='Bảy Mươi ';
                    break;
            case 8:
                    conten2 ='Tám Mươi ';
                break;
            case 9:
                    conten2 ='Chín Mươi ';
                    break;
        }
        switch (unit) {
            case 1:   
                conten3 = 'Một ';
                break;
            case 2:
                conten3 ='Hai ';
                break;
            case 3:
                    conten3 ='Ba ';
                    break;
            case 4:
                    conten3 ='Bốn ';
                break;
            case 5:
                   conten3 ='Năm ';
                    break;
            case 6:
                    conten3 ='Sáu ';
                break;
            case 7:
                    conten3 ='Bảy' ;
                    break;
            case 8:
                    conten3 ='Tám ';
                break;
            case 9:
                    conten3 ='Chín ';
                    break;
        }


    } else {
        alert('Xin vui lòng nhập 3 số')
    }
    document.getElementById("txtTB2").innerHTML = conten1 + conten2 + conten3;
}

document.getElementById("btnThongBao2").addEventListener("click", docSo);

// ------------------Bài Số 4------------------------------
function toaDo() {
    var tenSV1 = document.getElementById("inputSV1").value;
    var tenSV2 = document.getElementById("inputSV2").value;
    var tenSV3 = document.getElementById("inputSV3").value;
    
    var hd1 = parseFloat(document.getElementById("inputX1").value);
    var td1 = parseFloat(document.getElementById("inputY1").value);
    var hd2 = parseFloat(document.getElementById("inputX2").value);
    var td2 = parseFloat(document.getElementById("inputY2").value);
    var hd3 = parseFloat(document.getElementById("inputX3").value);
    var td3 = parseFloat(document.getElementById("inputY3").value);
    var hdTH = parseFloat(document.getElementById("inputTHX").value);
    var tdTH = parseFloat(document.getElementById("inputTHY").value);

    // var kC1 = Math.sqrt(Math.pow(hdTH - hd1) + Math.pow(tdTH - td1));

   
    var kC1=Math.round((Math.sqrt((hdTH - hd1) * (hdTH - hd1) + (tdTH - td1) * (tdTH - td1))) * 100) / 100;
    console.log(kC1);
    var kC2=Math.round((Math.sqrt((hdTH - hd2) * (hdTH - hd2) + (tdTH - td2) * (tdTH - td2))) * 100) / 100;
    console.log(kC2);
    var kC3=Math.round((Math.sqrt((hdTH - hd3) * (hdTH - hd3) + (tdTH - td3) * (tdTH - td3))) * 100) / 100;
    console.log(kC3);

    if (kC1 > kC2) {
        if (kC2 > kC3) {
            document.getElementById("txtTB3").innerHTML = 'Khoảng cách Sinh Viên ' + tenSV1 + ' là xa nhất: ' + kC1;
        }
        else if (kC1 > kC3) {
            document.getElementById("txtTB3").innerHTML = 'Khoảng cách Sinh Viên ' + tenSV1 + ' là xa nhất: ' + kC1;
        }
        else {
            document.getElementById("txtTB3").innerHTML = 'Khoảng cách Sinh Viên ' + tenSV3 + ' là xa nhất: ' + kC3;
        }
    }
    else if (kC2 > kC3) {
        if (kC1 > kC3) {
            
            document.getElementById("txtTB3").innerHTML = 'Khoảng cách Sinh Viên ' + tenSV2 + ' là xa nhất: ' + kC2;
        }
        else {
           
            document.getElementById("txtTB3").innerHTML = 'Khoảng cách Sinh Viên ' + tenSV2 + ' là xa nhất: ' + kC2;
        }
    }
    else {
        
        document.getElementById("txtTB3").innerHTML = 'Khoảng cách Sinh Viên ' + tenSV3 + ' là xa nhất: ' + kC3;
    }
    
}
document.getElementById("btnThongBao3").addEventListener("click",toaDo);