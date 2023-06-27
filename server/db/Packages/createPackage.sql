DECLARE @MaChuyen INT

SELECT @MaChuyen=[MaChuyen] from [dbo].[Most_famos_list] where 
[DiemKhoiHanh] = @diemkhoihanh AND
[DiemDen] = @diemden AND
[GhiChu] = @ghichu AND
[tenDD] = @tendd AND
[NgayKhoiHanh] = @ngaykhoihanh AND
[DonGia] = @dongia AND
[imgSrc] = @imgsrc

if(@MaChuyen is null)
BEGIN
INSERT INTO [dbo].[Most_famos_list] ( 
    [DiemKhoiHanh], 
    [DiemDen], 
    [Ghi_chu], 
    [tenDD], 
    [NgayKhoiHanh], 
    [DonGia], 
    [imgSrc]
) 
VALUES (
    @diemkhoihanh, 
    @diemden, 
    @ghichu, 
    @tendd, 
    @ngaykhoihanh, 
    @dongia, 
    @imgsrc
)
Select @MaChuyen = SCOPE_IDENTITY()
END

SELECT * FROM [dbo].[Most_famos_list] WHERE [Most_famos_list].[MaChuyen] = @MaChuyen