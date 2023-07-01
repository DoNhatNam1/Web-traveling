'use strict';

const utils = require('../utils/loadSql');
const config = require('../../config/mssql');
const sql = require('mssql');

const getUserAccout = async () =>{
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('UserAccouts');
        const list = await pool.request().query(sqlQueries.useraccoutlist);
        return list.recordset;
    } catch (error) {
        return error.message;
    }
}

const getByIdUserAccout = async (MaTaiKhoan) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('UserAccouts');
        const oneUserAccount = await pool.request()
                                    .input('MaTaiKhoan', sql.Int, MaTaiKhoan)
                                    .query(sqlQueries.useraccoutbyid);

        return oneUserAccount.recordset;
    } catch (error) {
        return error.message;
    }
}

const createUserAccout = async (UserAccoutData) =>{
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('UserAccouts');
        const insertUserAccount = await pool.request()
                                        .input("Email", sql.NVarChar(100), UserAccoutData.Email)
                                        .input("UserName", sql.NVARCHAR(100), UserAccoutData.UserName)
                                        .input("Pass", sql.NVARCHAR(100), UserAccoutData.Pass)
                                        .query(sqlQueries.createuseraccout);
        return insertUserAccount.recordset;
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
    getUserAccout,
    getByIdUserAccout,
    createUserAccout
    // updateUser,
    // deleteUser
}
