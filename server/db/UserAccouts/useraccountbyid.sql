SELECT DISTINCT [UserAccout].[MaTaiKhoan]
        ,[UserAccout].[Email]
        ,[UserAccout].[UserName]
        ,[UserAccout].[Pass]
FROM [dbo].[UserAccout]
WHERE [UserAccout].[MaTaiKhoan]=@MaTaiKhoan