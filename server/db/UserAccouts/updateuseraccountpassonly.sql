      -- Update first from child tables

       -- Finally Update from parent table
       Update [dbo].[UserAccout] set [Pass] = @Pass where [MaTaiKhoan] = @MaTaiKhoan


SELECT * FROM [dbo].[UserAccout] WHERE [UserAccout].[MaTaiKhoan] = @MaTaiKhoan