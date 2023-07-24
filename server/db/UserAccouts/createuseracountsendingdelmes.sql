DECLARE @MaMess INT

SELECT @MaMess = [MaMess] from [dbo].[UserSendingMessDelAccount] where 
[NoiDungYeuCau] = @NoiDungYeuCau AND
[MaTaiKhoan] = @MaTaiKhoan AND
[ThoiGianGui] = @ThoiGianGui

if(@MaMess is null)
BEGIN
INSERT INTO [dbo].[UserSendingMessDelAccount] ( 
    [MaTaiKhoan], 
    [NoiDungYeuCau], 
    [ThoiGianGui] 
) 
VALUES (
    @MaTaiKhoan, 
    @NoiDungYeuCau,
    @ThoiGianGui
)

Select @MaMess = SCOPE_IDENTITY()
END

SELECT * FROM [dbo].[UserSendingMessDelAccount] WHERE [UserSendingMessDelAccount].[MaMess] = @MaMess