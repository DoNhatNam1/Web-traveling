SELECT [tkhach].[MaKhach]
        ,[tkhach].[TenKhach]
        ,[tkhach].[DienThoai]
        ,[tkhach].[DiaChi]
        ,[tdangky].[MaChuyen]
        ,[tdangky].[NgayDKy]
        ,[tdangky].[STDtra]
FROM [dbo].[tkhach], [dbo].[tdangky] WHERE [tkhach].[Makhach] = [tdangky].[Makhach]

