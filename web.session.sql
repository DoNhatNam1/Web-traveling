-- @block
SELECT * FROM tchuyendulich, tdiadiemthamquan, ttuyen, tkhach, tdangky;

-- @block
WITH khach_key AS 
(INSERT INTO tkhach (tenkhach, dienthoai, diachi) VALUES ('Nguyen Nhat Minh', 355355355, 'Chung cu Cho Binh Thach') RETURNING makhach)
INSERT INTO tdangky (machuyen, makhach, ngaydky, stdtra) VALUES
((SELECT machuyen FROM tchuyendulich Where machuyen = 1),(SELECT makhach FROM khach_key), '5/6/2023', '$1200');

-- @block
SELECT * FROM tdangky ;

-- @block
INSERT INTO ttuyen (tentuyen, songay, ghichu) VALUES ('Tuyen ABC', 5, 'But I must explain to you how all this mistaken idea of denouncing of a pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.')

-- @block
SELECT TO_CHAR(ngaydky, 'dd/Mon/yyyy') FROM tdangky;
-- @block
INSERT INTO tchuyendulich (phuongtien, tenhdvien, dongia) VALUES ('Xe giuong nam 50 cho', 'MR dep trai', '$800');




