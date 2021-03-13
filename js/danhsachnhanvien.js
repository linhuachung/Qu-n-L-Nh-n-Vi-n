function DanhSachNhanVien(){
	this.dsnv = [];
	this.themNhanVien = function(NhanVien){
		this.dsnv.push(NhanVien);
	}

}
DanhSachNhanVien.prototype.layChiTietNhanVien = function(taiKhoan){
	var result = null;
	for(var i = 0 ; i < this.dsnv.length; i++){
		if(this.dsnv[i].taiKhoan === taiKhoan){
			result = this.dsnv[i];
			break;
		}
	}
	return result;
}
DanhSachNhanVien.prototype.XoaNhanVien = function(taiKhoan){
	var index = -1;
	for(var i = 0 ; i<this.dsnv.length; i++){
		if(this.dsnv[i].taiKhoan === taiKhoan){
			index = i;
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
DanhSachNhanVien.prototype.capNhatNhanVien = function(nhanVien){
	var index = -1;
	for(var i = 0 ; i<this.dsnv.length; i++){
		if(this.dsnv[i].taiKhoan === nhanVien.taiKhoan){
			index = i;
			break;
		}
	}
	if(index !== -1){
		this.dsnv[index] = nhanVien;
	}
}