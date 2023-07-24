DECLARE @MaTaiKhoan INT

SELECT @MaTaiKhoan = [MaTaiKhoan] from [dbo].[UserAccout] where 
[Email] = @email AND
[UserName] = @username AND
[Pass] = @pass 

if(@MaTaiKhoan is null)
BEGIN
INSERT INTO [dbo].[UserAccout] ( 
    [Email], 
    [UserName], 
    [Pass]
) 
VALUES (
    @email, 
    @username, 
    @pass
)
Select @MaTaiKhoan = SCOPE_IDENTITY()
END

Insert into [dbo].[UserInfo] (
    [MaTaiKhoan]
)
values (
    @MaTaiKhoan
)

Insert into [dbo].[UserRanking] (
    [MaTaiKhoan]
)
values (
    @MaTaiKhoan
)


SELECT * FROM [dbo].[UserAccout] WHERE [UserAccout].[MaTaiKhoan] = @MaTaiKhoan