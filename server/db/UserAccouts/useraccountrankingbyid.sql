SELECT  [UserAccout].[MaTaiKhoan]
        ,[UserRanking].[Ranking]
        ,[UserRanking].[SoTienDaTraTrongThang]
        ,[UserRanking].[UuDai]
FROM [dbo].[UserAccout]
INNER JOIN [dbo].[UserRanking] ON [UserAccout].[MaTaiKhoan] = [UserRanking].[MaTaiKhoan]
WHERE [UserAccout].[MaTaiKhoan]=@MaTaiKhoan and [UserRanking].[MaTaiKhoan] = @MaTaiKhoan