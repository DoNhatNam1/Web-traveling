-- @block
SELECT * FROM tchuyendulich, tdiadiemthamquan, ttuyen, tkhach, tdangky;

-- @block
WITH khach_key AS 
(INSERT INTO tkhach (tenkhach, dienthoai, diachi) VALUES($1, $2, $3) RETURNING makhach),[req.body.tenkhach, req.body.dienthoai, req.body.diachi]
INSERT INTO tdangky (ngaydky, stdtra, makhach)
SELECT khach_key.makhach FROM khach_key; 

-- @block
WITH dangky_key AS 
(INSERT INTO tdangky (ngaydky, stdtra) VALUES ('1/2/2023', '$800') RETURNING makhach)
INSERT INTO tkhach (makhach, tenkhach, dienthoai, diachi) VALUES
((SELECT * FROM dangky_key), 'Do Nhat Nam', 363982926, 'Chung cu Bau Cat');

-- @block
WITH khach_key AS 
(INSERT INTO tkhach (tenkhach, dienthoai, diachi) VALUES ('Do Nhat Nam', 363982926, 'Chung cu Bau Cat') RETURNING makhach)
INSERT INTO tdangky (machuyen, makhach, ngaydky, stdtra) VALUES
((SELECT machuyen FROM tchuyendulich),(SELECT makhach FROM khach_key), '1/2/2023', '$800');

-- @block
INSERT INTO ttuyen (tentuyen, songay, ghichu) VALUES ('Tuyen ABC', 5, 'But I must explain to you how all this mistaken idea of denouncing of a pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.')

-- @block
SELECT TO_CHAR(ngaydky, 'dd/Mon/yyyy') FROM tdangky;
-- @block
INSERT INTO tchuyendulich (phuongtien, tenhdvien, dongia) VALUES ('Xe giuong nam 50 cho', 'MR dep trai', '$800');