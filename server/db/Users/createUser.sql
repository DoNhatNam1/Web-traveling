DECLARE @makhach INT

SELECT @makhach=[makhach] from [dbo].[tkhach] where 
[tenkhach] = @tenkhach AND
[DienThoai] = @dienthoai AND
[DiaChi] = @diachi

if(@makhach is null)
BEGIN
    Insert into [dbo].[tkhach] (
        [TenKhach], 
        [DienThoai], 
        [DiaChi]
    ) 
values (
    @tenkhach, 
    @dienthoai, 
    @diachi
    )
    Select @makhach = SCOPE_IDENTITY()
End 

Insert into [dbo].[tdangky] (
    [MaKhach], 
    [MaChuyen], 
    [NgayDKy], 
    [STDTra]
)
values (
    @makhach, 
    @machuyen, 
    @ngaydky, 
    @stdtra
)


SELECT * FROM [dbo].[tdangky], [dbo].[tkhach] WHERE [tkhach].[Makhach] = @makhach and [tdangky].[Makhach] = @makhach
