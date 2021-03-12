document.getElementById("btnThemNV").addEventListener("click" , themNhanVien);
document.getElementById("tableDanhSach").addEventListener("click", delegation);

var danhSachNhanVien = new DanhSachNhanVien();
function themNhanVien(){
	var taiKhoan = document.getElementById("tknv").value;
	var hoTen = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var ngayLam = document.getElementById("datepicker").value;
	var chucVu = document.getElementById("chucvu").value;

	var nhanVien = new NhanVien(taiKhoan , hoTen, email, ngayLam, chucVu);
	danhSachNhanVien.themNhanVien(nhanVien);

	hienThiDSNV(danhSachNhanVien.dsnv);
}

function hienThiDSNV(dsnv){
	var tbody = document.getElementById("tableDanhSach");
	var inner = "";

	for(var i = 0 ; i < dsnv.length; i++){
		var nhanVien = dsnv[i];
		inner += `
			<tr>
				<td>
					${nhanVien.taiKhoan}
				</td>
				<td>
					${nhanVien.hoTen}
				</td>
				<td>
					${nhanVien.email}
				</td>
				<td>
					${nhanVien.ngayLam}
				</td>
				<td>
					${nhanVien.chucVu}
				</td>
				<td>
					<button class="btn btn-primary"data-taiKhoan="${nhanVien.taiKhoan}" data-action="edit">Edit</button>
					<button class="btn btn-danger"data-taiKhoan="${nhanVien.taiKhoan}" data-action="delete">Delete</button>
				</td>
			</tr>
		`;
	}
	tbody.innerHTML = inner;
}

function delegation(event){
	var target = event.target;
	var action = target.getAttribute("data-action");
	var taiKhoan = target.getAttribute("data-taiKhoan");

	if(action === "delete"){
		danhSachNhanVien.XoaNhanVien(taiKhoan);
	}else {
		alert("edit");
	}
	hienThiDSNV(danhSachNhanVien.dsnv);
}

function timNhanVien(){
	var search = document.getElementById("searchName").value;
	var dsnv = danhSachNhanVien.TimKiemNhanVien(search)
	hienThiDSNV(dsnv)
}