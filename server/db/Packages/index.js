'use strict';

const utils = require('../utils/loadSql');
const config = require('../../config/mssql');
const sql = require('mssql');

const getPackages = async () =>{
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('Packages');
        const list = await pool.request().query(sqlQueries.packageslist);
        return list.recordset;
    } catch (error) {
        return error.message;
    }
}

const getByIdPackage = async (MaChuyen) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('Packages');
        const onePackage = await pool.request()
                                    .input('MaChuyen', sql.Int, MaChuyen)
                                    .query(sqlQueries.packagebyId);

        return onePackage.recordset;
    } catch (error) {
        return error.message;
    }
}

const createPackage = async (PackageData) =>{
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('Packages');
        const insertPackage = await pool.request()
                                        .input("DiemKhoiHanh", sql.NVarChar(255), PackageData.DiemKhoiHanh)
                                        .input("DiemDen", sql.NVARCHAR(255), PackageData.DiemDen)
                                        .input("GhiChu", sql.NVARCHAR(1000), PackageData.GhiChu)
                                        .input("tenDD", sql.NVARCHAR(1000), PackageData.tenDD)
                                        .input("NgayKhoiHanh", sql.Date, PackageData.NgayKhoiHanh)
                                        .input("DonGia", sql.Int, PackageData.DonGia)
                                        .input("imgSrc", sql.NVarChar(1000), PackageData.imgSrc)
                                        .query(sqlQueries.createPackage);
        return insertPackage.recordset;
    } catch (error) {
        return error.message;
    }
}

// const updateUser = async (Ma_chuyen, userData) =>{
//     try {
//         let pool = await sql.connect(config.sql);
//         const sqlQueries = await utils.loadSqlQueries('Users');
//         const update = await pool.request()
//                                 .input("Ma_chuyen", sql.Int, Ma_chuyen)
//                                 .input("TenKhach", sql.NVarChar(50), userData.TenKhach)
//                                 .input("DienThoai", sql.NVarChar(12), userData.DienThoai)
//                                 .input("DiaChi", sql.NVarChar(100), userData.DiaChi)
//                                 .input("MaChuyen", sql.Int, userData.MaChuyen)
//                                 .input("NgayDKy", sql.NVarChar(15), userData.NgayDKy)
//                                 .input("STDTra", sql.Numeric(10,0), userData.STDTra)
//                                 .query(sqlQueries.updateUser);
//         return update.recordset;

//     } catch (error) {
//         return error.message;
//     }
// }

// const deleteUser = async (Ma_chuyen) =>{
//     try {
//         let pool = await sql.connect(config.sql);
//         const sqlQueries = await utils.loadSqlQueries('Users'); 
//         const deleted = await pool.request()
//                                     .input('Ma_chuyen', sql.Int, Ma_chuyen)
//                                     .query(sqlQueries.deleteUser);
//         return deleted.recordset;
//     } catch (error) {
//         return error.message;
//     }
// }

module.exports = {
    getPackages,
    getByIdPackage,
    createPackage
    // updateUser,
    // deleteUser
}
