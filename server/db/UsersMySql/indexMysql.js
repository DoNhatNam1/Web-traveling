// 'use strict';

// const utils = require('../utils/loadSql');
// const config = require('../../config/mysql');
// const sql = require('mysql');

// const getUsers = async () =>{
//     try {
//         let pool = await sql.connect(config.sql);
//         const sqlQueries = await utils.loadSqlQueries('Users');
//         const list = await pool.request().query(sqlQueries.userslist);
//         return list.recordset;
//     } catch (error) {
//         return error.message;
//     }
// }

// const getById = async (makhach) => {
//     try {
//         let pool = await sql.connect(config.sql);
//         const sqlQueries = await utils.loadSqlQueries('Users');
//         const oneUser = await pool.request()
//                                     .input('makhach', sql.Int, makhach)
//                                     .query(sqlQueries.userbyId);

//         return oneUser.recordset;
//     } catch (error) {
//         return error.message;
//     }
// }

// const createUser = async (userData) =>{
//     try {
//         let pool = await sql.connect(config.sql);
//         const sqlQueries = await utils.loadSqlQueries('users');
//         const insertUser = await pool.request()
//                                         .input("TenKhach", sql.NVarChar(50), userData.TenKhach)
//                                         .input("DienThoai", sql.NVarChar(12), userData.DienThoai)
//                                         .input("DiaChi", sql.NVarChar(100), userData.DiaChi)
//                                         .input("MaChuyen", sql.Int, userData.MaChuyen)
//                                         .input("NgayDKy", sql.NVarChar(15), userData.NgayDKy)
//                                         .input("STDTra", sql.Numeric(10,0), userData.STDTra)
//                                         .query(sqlQueries.createUser);
//         return insertUser.recordset;
//     } catch (error) {
//         return error.message;
//     }
// }

// const updateUser = async (makhach, userData) =>{
//     try {
//         let pool = await sql.connect(config.sql);
//         const sqlQueries = await utils.loadSqlQueries('Users');
//         const update = await pool.request()
//                                 .input("makhach", sql.Int, makhach)
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

// const deleteUser = async (makhach) =>{
//     try {
//         let pool = await sql.connect(config.sql);
//         const sqlQueries = await utils.loadSqlQueries('Users'); 
//         const deleted = await pool.request()
//                                     .input('makhach', sql.Int, makhach)
//                                     .query(sqlQueries.deleteUser);
//         return deleted.recordset;
//     } catch (error) {
//         return error.message;
//     }
// }

// module.exports = {
//     getUsers,
//     getById,
//     createUser,
//     updateUser,
//     deleteUser
// }
