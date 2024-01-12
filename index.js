var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);
// Start BT1

$(".txt-btn1").onclick = () => {
  var diemChuan = $("#txt-diemChuan").value * 1;
  var khuVuc = $("#txt-khuVuc").value * 1;
  var doiTuong = $("#txt-doiTuong").value * 1;
  var diem1 = $("#txt-diem1").value * 1;
  var diem2 = $("#txt-diem2").value * 1;
  var diem3 = $("#txt-diem3").value * 1;
  var diemTB = 0;
  var xetDiem = "";
  diemTB = khuVuc + doiTuong + (diem1 + diem2 + diem3);
  ketQua = $(".txt-ketQua1");
  if (diem1 === 0 || diem2 === 0 || diem3 === 0) {
    diemTB = "0";
  }
  if (diemTB >= diemChuan) {
    xetDiem = "Đậu";
  } else {
    xetDiem = "Rớt";
  }
  ketQua.innerHTML = ` Tổng điểm: ${diemTB}; Bạn đã: ${xetDiem}`;
};
// End BT1
// Start BT2
$(".txt-btn2").onclick = () => {
  var hoTen = $("#txt-hoTen").value;
  var soKw = $("#txt-soKw").value * 1;
  var ketQua = $(".txt-ketQua2");
  var tong = 0;

  switch (true) {
    case soKw <= 50:
      tong = soKw * 500; // Giá cước cho 50 KW đầu là 10$
      break;
    case soKw <= 100:
      tong = 50 * 500 + (soKw - 50) * 650; // 50 KW đầu là 25$, 50 KW tiếp theo là 12$
      break;
    case soKw <= 200:
      tong = 50 * 500 + 50 * 650 + (soKw - 100) * 850; // 50 KW đầu là 10$, 50 KW tiếp theo là 12$, 50 KW tiếp theo là 14$
      break;
    case soKw <= 350:
      tong = 50 * 500 + 50 * 650 + 100 * 850 + (soKw - 200) * 1100; // 50 KW đầu là 10$, 50 KW tiếp theo là 12$, 50 KW tiếp theo là 14$, 150 KW tiếp theo là 16$
      break;
    default:
      tong = 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (soKw - 350) * 1300; // 50 KW đầu là 10$, 50 KW tiếp theo là 12$, 50 KW tiếp theo là 14$, 150 KW tiếp theo là 16$, phần còn lại là 18$
      break;
  }
  ketQua.innerHTML = `Họ tên ${hoTen}; Tiền điện  ${new Intl.NumberFormat(
    "vn-VN"
  ).format(tong)} VNĐ `;
};
// End BT2
// Start BT3
$(".txt-btn3").onclick = () => {
  var hoTen2 = $("#txt-name").value;
  var tongThuNhapNam = $("#txt-tongThuNhapNam").value * 1;
  var user = $("#txt-user").value * 1;

  var ketQua = $(".txt-ketQua3");

  tong = 0;

  if (tongThuNhapNam <= 9000000 && tongThuNhapNam >= 4000000) {
    tong = tongThuNhapNam * 0.02 + 20000 - user * 30000;
  } else if (tongThuNhapNam >= 10000000 && tongThuNhapNam <= 49000000) {
    tong = tongThuNhapNam * 0.03 - user * 60000;
  }
  else if (tongThuNhapNam >=  50000000 && tongThuNhapNam <=  99000000) {
    tong = tongThuNhapNam * 0.04 - user * 100000;
  }
  else if (tongThuNhapNam >=  100000000 && tongThuNhapNam <=  2000000000) {
    tong = tongThuNhapNam * 0.09 - user * 20000;
  }
  ketQua.innerHTML = ` Họ và tên: ${hoTen2}; Tiền thuế thu nhập cá nhân: ${new Intl.NumberFormat(
    "vn-VN"
  ).format(tong)} VNĐ `;
};

// End BT3
// Start BT4

$(".txt-btn4").onclick = () => {
  var select = $("#txt-select").value;

  var maKh = $("#txt-maKhachHang").value * 1;
  var maSoKenh = $("#txt-soKenh").value * 1;
  var soKetNoi = $("#txt-soKetNoi").value * 1;
  var ketQua = $(".txt-ketQua4");

  var tinhTien = 0;
  var giaTienMacDinhUser = 25000;
  var giaTienMacDinhCompany = 90000;
  if (select === "user" && maSoKenh === 0) {
    tinhTien = giaTienMacDinhUser;
  } else if (select === "user" && maSoKenh >= 1) {
    tinhTien = giaTienMacDinhUser + maSoKenh * 7500;
  } else if (select === "company" && soKetNoi > 10) {
    tinhTien =
      giaTienMacDinhCompany + (soKetNoi * 5000 - 50000) + maSoKenh * 50000;
  } else if (select === "company" && soKetNoi <= 10) {
    tinhTien = giaTienMacDinhCompany;
  }
  ketQua.innerHTML = ` <i class="fa-solid fa-circle-arrow-right fs-5 text-light"></i> Mã khách hàng ${maKh}; Tiền cáp ${new Intl.NumberFormat(
    "vn-VN"
  ).format(tinhTien)} VNĐ `;
};
// onChange
var myFunc = () => {
  var select = $("#txt-select").value;
  var soKetNoi = $("#txt-soKetNoi");
  if (select === "company") {
    soKetNoi.style.display = "block";
  } else {
    soKetNoi.style.display = "none";
  }
};
// End BT4
