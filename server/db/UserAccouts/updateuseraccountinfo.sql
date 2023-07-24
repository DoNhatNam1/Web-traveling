
       -- Update first from child tables

       -- Finally Update from parent table
       Update [dbo].[UserInfo] set [HoVaTen] = @HoVaTen, [QueQuan] = @QueQuan, [Sdt] = @Sdt, [DiaChi] = @DiaChi, [Tuoi] = @Tuoi, [ImageUserAccount] = @ImageUserAccount where [MaTaiKhoan] = @MaTaiKhoan


SELECT * FROM [dbo].[UserInfo], [dbo].[UserAccout] WHERE [UserInfo].[MaTaiKhoan] = @MaTaiKhoan and [UserAccout].[MaTaiKhoan] = @MaTaiKhoan