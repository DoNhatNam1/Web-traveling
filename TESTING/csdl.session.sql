
-- @block
SELECT * FROM nhanvien;

-- @block
SELECT * FROM thanhnhan;


-- Nhan vien khong co ng than
-- @block
SELECT pb.tenpb, COUNT(nv.manv) AS so_luong_nhan_vien, SUM(nv.luong) as tong_luong_nhan_vien FROM nhanvien nv, phongban pb GROUP BY pb.tenpb



-- @block
SELECT * FROM nhanvien WHERE manv IN (SELECT manv FROM trph_key) AND luong < (SELECT luong FROM trph_key)


-- @block
SELECT COUNT(nv.manv) FROM nhanvien nv 
