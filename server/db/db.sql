-- CREATE TABLE reviews (
--     id BIGSERIAL NOT NULL PRIMARY KEY,
--     restaurant_id BIGINT NOT NULL REFERENCES restaurants(id),
--     name VARCHAR(50) NOT NULL,
--     review TEXT NOT NULL,
--     rating INT NOT NULL check(
--         rating >= 1
--         and rating <= 5
--     )
-- );
-- select *
-- from restaurants
--     left join(
--         select restaurant_id,
--             count(*),
--             TRUNC(AVG(rating, 1)) as average_rating
--         from reviews
--         group by restaurant_id
--     ) reviews on restaurants.id = reviews.restaurant_id;



-- List table project for web-tourists
-- CREATE TABLE tTuyen (
-- MaTuyen BIGSERIAL NOT NULL PRIMARY KEY,
-- TenTuyen VARCHAR(50) NOT NULL,
-- SoNgay INT NOT NULL check(SoNgay >=1),
-- GhiChu TEXT NOT NULL
-- );

-- CREATE TABLE tDiaDiemThamQuan (
-- MaDD BIGSERIAL NOT NULL PRIMARY KEY,
-- TenDD VARCHAR(50) NOT NULL,
-- TenTinhThanh VARCHAR(50) NOT NULL
-- );

-- CREATE TABLE tKhach (
-- MaKhach BIGSERIAL NOT NULL PRIMARY KEY,
-- TenKhach VARCHAR(50) NOT NULL,
-- DienThoai INT NOT NULL,
-- DiaChi TEXT NOT NULL
-- );

-- CREATE TABLE tChuyenDuLich (
-- MaChuyen BIGSERIAL NOT NULL PRIMARY KEY,
-- MaTuyen BIGSERIAL NOT NULL REFERENCES tTuyen(MaTuyen),
-- PhuongTien VARCHAR(50) NOT NULL,
-- TenHDVien VARCHAR(50) NOT NULL,
-- DonGia money NOT NULL
-- );

-- CREATE TABLE tChiTietChuyenDuLich (
-- MaChuyen BIGSERIAL NOT NULL REFERENCES tChuyenDuLich(MaChuyen),
-- MaDD BIGSERIAL NOT NULL REFERENCES tDiaDiemThamQuan(MaDD)
-- );

-- CREATE TABLE TDangKy (
--     MaChuyen BIGSERIAL NOT NULL REFERENCES tChuyenDuLich(MaChuyen),
--     MaKhach BIGSERIAL NOT NULL REFERENCES tKhach(MaKhach),
--     NgayDKy TIMESTAMPTZ NOT NULL,
--     STDTra money NOT NULL
-- );

-- CREATE TABLE test (
-- id BIGSERIAL NOT NULL PRIMARY KEY,
-- tendd VARCHAR(50) NOT NULL,
-- tentinhthanh VARCHAR(50) NOT NULL,
-- dongia money NOT NULL
-- );




-- //////////////////////////////////////////////////////////////////////////////
-- //////////////////////////////DATABASE CSDL///////////////////////////////////
-- //////////////////////////////////////////////////////////////////////////////

CREATE TABLE NHANVIEN (
    HONV VARCHAR(9) NOT NULL,
    TENLOT VARCHAR(20) NOT NULL,
    MANV CHAR(9) PRIMARY KEY,
    NGSINH DATE,
    DCHI VARCHAR(50),
    PHAI CHAR(3),
    LUONG INT,
    MA_NQL CHAR(9) REFERENCES NHANVIEN(MANV),
    PHG INT
);

CREATE TABLE DUAN (
    TENDA VARCHAR(20) UNIQUE,
    MADA INT PRIMARY KEY,
    DIADIEM_DA VARCHAR(20),
    PHONG INT REFERENCES PHONGBAN(MAPHG)
);

CREATE TABLE PHANCONG (
    MA_NVIEN CHAR(9) REFERENCES NHANVIEN(MANV),
    SODA INT REFERENCES DUAN(MADA),
    THOIGIAN INT,
    CONSTRAINT PC_MANVIEN_SODA_PK PRIMARY KEY (MA_NVIEN, SODA)
);
CREATE TABLE DIADIEM_PHONG (
    DIADIEM CHAR(20),
    MAPHG INT REFERENCES PHONGBAN(MAPHG),
    CONSTRAINT MAPHG_DIADIEM_PK PRIMARY KEY (DIADIEM, MAPHG)
);
CREATE TABLE PHONGBAN(
    MAPHG BIGSERIAL PRIMARY KEY NOT NULL,
    TENPB VARCHAR(20) UNIQUE,
    TRPHG CHAR(9) REFERENCES NHANVIEN(MANV),
    NG_NHANCHUC DATE
);
CREATE TABLE THANHNHAN (
    TENTN CHAR(20),
    MA_NVIEN CHAR(9) REFERENCES NHANVIEN(MANV),
    CONSTRAINT TN_MA_NVIEN_TENTN_PK PRIMARY KEY(MA_NVIEN,TENTN),
    PHAI CHAR(3),
    NGSINH DATE,
    QUANHE CHAR(9)
);


-- //////////////////////////////-- NHAN VIEN ///////////////////////////////////////////////////////
INSERT INTO nhanvien (manv, honv, tenlot, ngsinh, phai, luong, dchi, phg) values (123456789, 'Dinh Ba', 'Tien', '01/09/1965', 'Nam', 300, 'Da Nang', 5);
INSERT INTO nhanvien (manv, honv, tenlot, ngsinh, phai, luong, dchi, phg) values (333445555, 'Nguyen Thanh', 'Tung', '12/08/1975', 'Nam', 350, 'Da Nang', 5);
INSERT INTO nhanvien (manv, honv, tenlot, ngsinh, phai, luong, dchi, phg) values (999887777, 'Bui Thuy', 'Vu', '07/19/1978', 'Nam', 250, 'Ha Noi', 4);
INSERT INTO nhanvien (manv, honv, tenlot, ngsinh, phai, luong, dchi, phg) values (987654321, 'Le Thi', 'Nhan', '06/20/1963', 'Nu', 430, 'Quang Nam', 4);
INSERT INTO nhanvien (manv, honv, tenlot, ngsinh, phai, luong, dchi, phg) values (666884444, 'Nguyen Manh', 'Hung', '09/15/1972', 'Nam', 280, 'Quang Nam', 5);
INSERT INTO nhanvien (manv, honv, tenlot, ngsinh, phai, luong, dchi, phg) values (453453453, 'Tran Thanh', 'Tam', '07/31/1982', 'Nam', 250, 'Binh Dinh', 5);
INSERT INTO nhanvien (manv, honv, tenlot, ngsinh, phai, luong, dchi, phg) values (987987987, 'Tran Hong', 'Quan', '03/29/1989', 'Nam', 200, 'Da Nang', 4);
INSERT INTO nhanvien (manv, honv, tenlot, ngsinh, phai, luong, dchi, phg) values (888665555, 'Vuong Ngoc', 'Quyen', '10/10/1977', 'Nu', 650, 'Quang Nam', 1);

ALTER TABLE nhanvien
ADD CONSTRAINT PHG1 FOREIGN KEY (PHG) REFERENCES phongban (MAPHG);


UPDATE nhanvien SET ma_nql =333445555 where manv = '123456789';
UPDATE nhanvien SET MA_NQL= 888665555 where manv = '333445555';
UPDATE nhanvien SET MA_NQL= 987654321 where manv = '999887777';
UPDATE nhanvien SET MA_NQL= 888665555 where manv = '987654321';
UPDATE nhanvien SET MA_NQL= 333445555 where manv = '666884444';
UPDATE nhanvien SET MA_NQL= 333445555 where manv = '453453453';
UPDATE nhanvien SET MA_NQL= 987654321 where manv = '987987987';




-- //////////////////////////////-- PHONG BAN ///////////////////////////////////////////////////////
INSERT INTO phongban (maphg, tenpb, trphg, ng_nhanchuc) values (5, 'Nghien cuu', 333445555, '05/22/1978');
INSERT INTO phongban (maphg, tenpb, trphg, ng_nhanchuc) values (4, 'Dieu Hanh', 987987987, '01/01/1985');
INSERT INTO phongban (maphg, tenpb, trphg, ng_nhanchuc) values (1, 'Quan Li', 888665555, '06/19/1971');


-- //////////////////////////////-- DIADIEM_PHONG ///////////////////////////////////////////////////////
INSERT INTO diadiem_phong (maphg, diadiem) values (1, 'Da Nang');
INSERT INTO diadiem_phong (maphg, diadiem) values (4, 'Tp HCM');
INSERT INTO diadiem_phong (maphg, diadiem) values (5, 'Quang Nam');
INSERT INTO diadiem_phong (maphg, diadiem) values (5, 'DA Nang');
INSERT INTO diadiem_phong (maphg, diadiem) values (5, 'Ha Noi');


-- //////////////////////////////-- PHANCONG ///////////////////////////////////////////////////////
INSERT INTO phancong (ma_nvien, soda, thoigian ) values (123456789, 1, 33);
INSERT INTO phancong (ma_nvien, soda, thoigian ) values (123456789, 2, 8);
INSERT INTO phancong (ma_nvien, soda, thoigian ) values (666884444, 3, 40);
INSERT INTO phancong (ma_nvien, soda, thoigian ) values (453453453, 1, 20);
INSERT INTO phancong (ma_nvien, soda, thoigian ) values (453453453, 2, 20);
INSERT INTO phancong (ma_nvien, soda, thoigian ) values (333445555, 3, 10);
INSERT INTO phancong (ma_nvien, soda, thoigian ) values (333445555, 10, 10);
INSERT INTO phancong (ma_nvien, soda, thoigian ) values (333445555, 20, 10);
INSERT INTO phancong (ma_nvien, soda, thoigian ) values (999887777, 30, 30);
INSERT INTO phancong (ma_nvien, soda, thoigian ) values (999887777, 10, 10);
INSERT INTO phancong (ma_nvien, soda, thoigian ) values (987987987, 20, 35);
INSERT INTO phancong (ma_nvien, soda, thoigian ) values (987987987, 30, 5);
INSERT INTO phancong (ma_nvien, soda, thoigian ) values (987654321, 30, 20);
INSERT INTO phancong (ma_nvien, soda, thoigian ) values (987654321, 20, 15);
INSERT INTO phancong (ma_nvien, soda ) values (888665555, 10);


-- //////////////////////////////-- DUAN ///////////////////////////////////////////////////////
INSERT INTO duan (mada, tenda, phong ) values (1, 'San pham X', 5);
INSERT INTO duan (mada, tenda, phong ) values (2, 'San pham Y', 5);
INSERT INTO duan (mada, tenda, phong ) values (3, 'San pham Z', 5);
INSERT INTO duan (mada, tenda, phong ) values (10, 'Tin hoc hoa', 4);
INSERT INTO duan (mada, tenda, phong ) values (20, 'Quang cao', 1);
INSERT INTO duan (mada, tenda, phong ) values (30, 'Dao tao', 4);

UPDATE duan SET diadiem_da='Da Nang' where mada = 1;
UPDATE duan SET diadiem_da='Quang Nam' where mada = 2;
UPDATE duan SET diadiem_da='Ha Noi' where mada = 3;
UPDATE duan SET diadiem_da='Da Nang' where mada = 10;
UPDATE duan SET diadiem_da='Tp HCM' where mada = 20;
UPDATE duan SET diadiem_da='Quang Nam' where mada = 30;


-- //////////////////////////////-- THANHNHAN ///////////////////////////////////////////////////////
INSERT INTO thanhnhan (ma_nvien, tentn, phai, ngsinh, quanhe ) values (333445555, 'Nhu', 'Nu', '04/05/2005', 'Con gai');
INSERT INTO thanhnhan (ma_nvien, tentn, phai, ngsinh, quanhe ) values (333445555, 'Khang', 'Nam', '10/25/2010', 'Con trai');
INSERT INTO thanhnhan (ma_nvien, tentn, phai, ngsinh, quanhe ) values (333445555, 'Hien', 'Nu', '05/03/1980', 'Vo chong');
INSERT INTO thanhnhan (ma_nvien, tentn, phai, ngsinh, quanhe ) values (987654321, 'Dang', 'Nam', '02/28/1970', 'Vo chong');
INSERT INTO thanhnhan (ma_nvien, tentn, phai, ngsinh, quanhe ) values (123456789, 'Duy', 'Nam', '01/01/1990', 'Con trai');
INSERT INTO thanhnhan (ma_nvien, tentn, phai, ngsinh, quanhe ) values (123456789, 'Nhu', 'Nu', '12/31/1994', 'Con gai');
INSERT INTO thanhnhan (ma_nvien, tentn, phai, ngsinh, quanhe ) values (123456789, 'Hien', 'Nu', '05/05/1967', 'Vo chong');


-- //////////////////// TOOLS /////////////////////////
DELETE FROM thanhnhan where ma_nvien = '333445555';
DROP TABLE nhanvien;


-- ////////////////////////////////////-- BAI TAP CSDL //////////////////////////////////////////////////////////////////
-- Cau 1
    
    -- Cach 1 (code ngan nhung khong toi uu)
    SELECT * FROM NHANVIEN WHERE PHG = 4
    
    -- Cach 2 (code dai nhung Toi uu)
SELECT nhanvien.manv, nhanvien.honv, nhanvien.tenlot FROM PHONGBAN INNER JOIN NHANVIEN ON PHONGBAN.MAPHG = NHANVIEN.PHG WHERE PHONGBAN.TENPB = 'Dieu Hanh';


-- Cau 2
    
    --  Cach 1 (code ngan nhung Khong toi uu)
    SELECT nhanvien.manv, nhanvien.honv, nhanvien.tenlot FROM phongban, nhanvien WHERE phongban.tenpb = 'Quan Li' and phongban.trphg = nhanvien.manv;
    
    -- Cach 2 (code dai nhung Toi uu)
    SELECT nhanvien.manv, nhanvien.honv, nhanvien.tenlot FROM phongban INNER join nhanvien on phongban.trphg = nhanvien.manv WHERE phongban.tenpb = 'Quan Li';


-- Cau 3
   
    -- Cach 1 (code ngan nhung Khong toi uu)
    SELECT nhanvien.manv, nhanvien.honv, nhanvien.tenlot FROM duan, nhanvien, phongban WHERE duan.diadiem_da = 'Ha Noi' and phongban.trphg = nhanvien.manv and duan.phong = phongban.maphg;
    
    -- Cach 2 (code dai nhung toi uu)
    SELECT nhanvien.manv, nhanvien.honv, nhanvien.tenlot FROM ((nhanvien 
    INNER JOIN phongban ON nhanvien.manv = phongban.trphg)
     INNER JOIN duan ON duan.phong = phongban.maphg)
     WHERE duan.diadiem_da = 'Ha Noi';


-- Cau 4
    
    -- Cach 1 (code ngan nhung khong toi uu)
    SELECT DISTINCT nv.manv, nv.honv, nv.tenlot FROM thanhnhan tn, nhanvien nv WHERE tn.ma_nvien = nv.manv;
    
    -- Cach 2 (code dai nhung toi uu)
    SELECT DISTINCT nv.manv, nv.honv, nv.tenlot FROM thanhnhan tn INNER JOIN nhanvien nv ON tn.ma_nvien = nv.manv;
   
   
    -- Cau 5
   
    -- Cach 1 (code ngan nhung khong toi uu)
    SELECT DISTINCT nv.manv, nv.honv, nv.tenlot FROM phancong pc, nhanvien nv WHERE pc.ma_nvien = nv.manv;
    
    -- Cach 2 (code dai nhung toi uu)
    SELECT DISTINCT nv.manv, nv.honv, nv.tenlot FROM phancong pc INNER JOIN nhanvien nv ON pc.ma_nvien = nv.manv;


    -- Cau 6

    -- Cach 1 (code ngan nhung khong toi uu)
    SELECT nv.manv, nv.honv, nv.tenlot, nv.ngsinh, nv.phai, nv.luong, nv.dchi FROM phongban pb, nhanvien nv WHERE nv.phg = pb.maphg and pb.tenpb = 'Dieu Hanh' and nv.phai = 'Nam';

    -- Cach 2 (code dai nhung toi uu)
    SELECT nv.manv, nv.honv, nv.tenlot, nv.ngsinh, nv.phai, nv.luong, nv.dchi FROM phongban pb INNER JOIN nhanvien nv on nv.phg = pb.maphg WHERE pb.tenpb = 'Dieu Hanh' and nv.phai = 'Nam';


    -- Cau 7

    -- Cach 1 (code ngan nhung khong toi uu)
    SELECT DISTINCT nv.manv FROM thanhnhan tn, duan da, nhanvien nv, phancong pc WHERE tn.ma_nvien = nv.manv and pc.ma_nvien = nv.manv and pc.soda = da.mada and da.mada = 10;

    -- Cach 2 (code dai nhung toi uu)
    SELECT DISTINCT nv.manv FROM (((phancong pc INNER JOIN nhanvien nv ON pc.ma_nvien = nv.manv) INNER JOIN duan da ON pc.soda = da.mada) INNER JOIN thanhnhan tn ON tn.ma_nvien = nv.manv) WHERE da.mada = 10;


    -- Cau 8

    -- Cach 1 (code ngan theo kieu hard-code)
    SELECT nv.honv, nv.tenlot FROM nhanvien nv WHERE nv.ma_nql = '333445555' ;

    -- Cach 2 (code dai nhung dung yeu cau de bai)
    SELECT nv.honv, nv.tenlot FROM nhanvien nv WHERE nv.ma_nql = (SELECT nv.manv FROM nhanvien nv WHERE nv.honv = 'Nguyen Thanh' and nv.tenlot = 'Tung');


    -- Cau 9

        -- Cach 1 (code ngan nhung khong toi uu)
        SELECT DISTINCT da.mada FROM duan da, phancong pc, nhanvien nv WHERE pc.soda = da.mada and pc.ma_nvien = nv.manv and nv.honv LIKE 'Nguyen%';

        -- Cach 2 (code dai nhung toi uu)
        SELECT DISTINCT da.mada FROM ((phancong pc INNER JOIN duan da ON pc.soda = da.mada) INNER JOIN nhanvien nv ON pc.ma_nvien = nv.manv) WHERE nv.honv LIKE 'Nguyen%';


        -- Cau 10

        ---- Cach 1 (code ngan nhung khong toi uu)
        SELECT DISTINCT da.mada FROM duan da, phongban pb, nhanvien nv WHERE da.phong = pb.maphg and pb.trphg = nv.manv and nv.honv LIKE 'Nguyen%';

        -- Cach 2 (code dai nhung toi uu)
        SELECT DISTINCT da.mada FROM ((phongban pb INNER JOIN duan da ON da.phong = pb.maphg) INNER JOIN nhanvien nv ON pb.trphg = nv.manv) WHERE nv.honv LIKE 'Nguyen%';


        -- Cau 11

        ---- Cach 1 (code ngan nhung khong toi uu)
        SELECT DISTINCT (SELECT da.mada FROM nhanvien nv, duan da, phancong pc WHERE pc.soda = da.mada and pc.ma_nvien = nv.manv and nv.honv = 'Dinh') as honvA, (SELECT da.mada FROM nhanvien nv, duan da, phongban pb WHERE da.phong = pb.maphg and pb.trphg = nv.manv and nv.honv = 'Dinh') as honvB FROM duan da, nhanvien nv, phancong pc, phongban pb;

        -- Cach 2 (code dai nhung toi uu)

        



