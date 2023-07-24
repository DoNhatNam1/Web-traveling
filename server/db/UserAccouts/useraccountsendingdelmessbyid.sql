SELECT TOP 1 [UserAccout].[MaTaiKhoan]
        ,[UserSendingMessDelAccount].[ThoiGianGui]
FROM [dbo].[UserAccout]
INNER JOIN [dbo].[UserSendingMessDelAccount] ON [UserAccout].[MaTaiKhoan] = [UserSendingMessDelAccount].[MaTaiKhoan]
WHERE [UserAccout].[MaTaiKhoan]=@MaTaiKhoan and [UserSendingMessDelAccount].[MaTaiKhoan] = @MaTaiKhoan
ORDER BY [UserSendingMessDelAccount].[ThoiGianGui] DESC