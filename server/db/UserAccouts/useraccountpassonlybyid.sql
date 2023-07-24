SELECT DISTINCT [UserAccout].[MaTaiKhoan]
        ,[UserAccout].[Pass]
FROM [dbo].[UserAccout]
WHERE [UserAccout].[MaTaiKhoan]=@MaTaiKhoan