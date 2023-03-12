Begin Try

       Begin Tran 

       Declare @MaKhachToDelete int = @makhach 

       -- Delete first from child tables
       Delete from [dbo].[tdangky] where [MaKhach] = @MaKhachToDelete

       -- Finally Delete from parent table
       Delete from [dbo].[tkhach] where [MaKhach] = @MaKhachToDelete 

       Commit Tran
End Try 

Begin Catch

       Rollback Tran

End Catch