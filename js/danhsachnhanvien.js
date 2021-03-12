function DanhSachNhanVien(){
	this.dsnv = [];
	this.themNhanVien = function(NhanVien){
		this.dsnv.push(NhanVien);
	}

}

DanhSachNhanVien.prototype.XoaNhanVien = function(taiKhoan){
	var index = -1;
	for(var i = 0 ; i<this.dsnv.length; i++){
		if(this.dsnv[i].taiKhoan === taiKhoan){
			index = 1;
			break;
		}
	}
	if(index !== -1){
		this.dsnv.splice(index, 1);
	}
}

DanhSachNhanVien.prototype.TimKiemNhanVien = function(search){
	var result = [];
	for(var i =0; i < this.dsnv.length; i++){
		if(nhanVien.hoTen.toLowerCase().trim().indexOf(search.toLowerCase().trim()) !== -1){
			result.push(nhanVien);
		}
	}
	return result;
};