Begin Try

       Begin Tran 

       Declare @MaKhachToUpdate int = @makhach 

       -- Update first from child tables
       Update [dbo].[tdangky] set [Machuyen] = @machuyen, [NgayDKy] = @ngaydky, [STDTra] = @stdtra  where [MaKhach] = @MaKhachToUpdate

       -- Finally Update from parent table
       Update [dbo].[tkhach] set [TenKhach] = @tenkhach, [DienThoai] = @dienthoai, [DiaChi] = @diachi where [MaKhach] = @MaKhachToUpdate 

       Commit Tran
End Try 

Begin Catch

       Rollback Tran

End Catch

SELECT * FROM [dbo].[tdangky], [dbo].[tkhach] WHERE [tkhach].[Makhach] = @makhach and [tdangky].[Makhach] = @makhach