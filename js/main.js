document.getElementById("btnThemNV").addEventListener("click",themNhanVien);


var danhSachNhanVien = new DanhSachNhanVien();
function themNhanVien(){
	var taiKhoan = document.getElementById("tknv").value;
	var hoTen = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var matKhau = document.getElementById("password").value;
	var ngayLam = document.getElementById("datepicker").value;
	var luong = +document.getElementById("luongCB").value;
	var chucVu = document.getElementById("chucvu").value;
	var gioLam = +document.getElementById("gioLam").value;

	var nhanVien = new NhanVien(
		taiKhoan,
		hoTen,
		email,
		matKhau,
		ngayLam,
		luong,
		chucVu,
		gioLam
	);
		console.log(nhanVien);
		danhSachNhanVien.themNhanVien(nhanVien);
		console.log(danhSachNhanVien.dsnv);
		hienThiDSNV(danhSachNhanVien.dsnv);
}

function hienThiDSNV(dsnv) {
	var tbody = document.getElementById("tableDanhSach");
	var inner = "" ;

	for (var i = 0 ; i < dsnv.length ; i++){
		var nhanVien = dsnv[i];
		inner = inner + `
			<tr>
				<td>${nhanVien.taiKhoan}</td>
				<td>${nhanVien.hoTen}</td>
				<td>${nhanVien.email}</td>
				<td>${nhanVien.ngayLam}</td>
				<td>${nhanVien.chucVu}</td>
				<td>${nhanVien.luong}</td>
			</tr>
		`
		tbody.innerHTML = inner;
	}
}