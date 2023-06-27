SELECT DISTINCT [Most_famos_list].[MaChuyen]
        ,[Most_famos_list].[DiemKhoiHanh]
        ,[Most_famos_list].[DiemDen]
        ,[Most_famos_list].[GhiChu]
        ,[Most_famos_list].[tenDD]
        ,CONVERT(varchar(15), [Most_famos_list].[NgayKhoiHanh], 103) as NgayKhoiHanh
        ,[Most_famos_list].[imgSrc]
FROM [dbo].[Most_famos_list] WHERE [Most_famos_list].[MaChuyen]=@MaChuyen