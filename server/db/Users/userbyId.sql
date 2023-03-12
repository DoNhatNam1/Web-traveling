SELECT  [tkhach].[TenKhach],
        [tkhach].[DienThoai],
        [tkhach].[DiaChi],
        [tdangky].[MaChuyen],
        [tdangky].[NgayDKy],
        [tdangky].[STDTra]
FROM [dbo].[tkhach]
INNER JOIN [dbo].[tdangky] ON [tkhach].[Makhach] = [tdangky].[Makhach]
WHERE [tkhach].[MaKhach]=@makhach and [tdangky].[Makhach] = @makhach