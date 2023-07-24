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

const getByIdUserAccoutInfo = async (MaTaiKhoan) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('UserAccouts');
        const oneUserAccountInfo = await pool.request()
                                    .input('MaTaiKhoan', sql.Int, MaTaiKhoan)
                                    .query(sqlQueries.useraccountinfobyid);

        return oneUserAccountInfo.recordset;
    } catch (error) {
        return error.message;
    }
}

const getByIdUserAccout = async (MaTaiKhoan) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('UserAccouts');
        const oneUserAccountInfo = await pool.request()
                                    .input('MaTaiKhoan', sql.Int, MaTaiKhoan)
                                    .query(sqlQueries.useraccountbyid);

        return oneUserAccountInfo.recordset;
    } catch (error) {
        return error.message;
    }
}

const getByIdUserAccoutPasswordOnly= async (MaTaiKhoan) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('UserAccouts');
        const oneUserAccountInfo = await pool.request()
                                    .input('MaTaiKhoan', sql.Int, MaTaiKhoan)
                                    .query(sqlQueries.useraccountpassonlybyid);

        return oneUserAccountInfo.recordset;
    } catch (error) {
        return error.message;
    }
}

const getByIdUserAccountSendingDelMess= async (MaTaiKhoan) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('UserAccouts');
        const oneUserAccountSendingDelMess = await pool.request()
                                    .input('MaTaiKhoan', sql.Int, MaTaiKhoan)
                                    .query(sqlQueries.useraccountsendingdelmessbyid);

        return oneUserAccountSendingDelMess.recordset;
    } catch (error) {
        return error.message;
    }
}

const getByIdUserAccoutRanking = async (MaTaiKhoan) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('UserAccouts');
        const oneUserAccountRanking = await pool.request()
                                    .input('MaTaiKhoan', sql.Int, MaTaiKhoan)
                                    .query(sqlQueries.useraccountrankingbyid);

        return oneUserAccountRanking.recordset;
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
                                        .input("UserName", sql.NVarChar(100), UserAccoutData.UserName)
                                        .input("Pass", sql.NVarChar(100), UserAccoutData.Pass)
                                        .query(sqlQueries.createuseraccout);
        return insertUserAccount.recordset;
    } catch (error) {
        return error.message;
    }
}

const createUserAccoutSendingDelMess = async (UserAccoutData) =>{
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('UserAccouts');
        const insertUserAccountSendingDelMess = await pool.request()
                                        .input("MaTaiKhoan", sql.Int, UserAccoutData.MaTaiKhoan)
                                        .input("NoiDungYeuCau", sql.NVarChar(1000), UserAccoutData.NoiDungYeuCau)
                                        .input("ThoiGianGui", sql.DateTime, UserAccoutData.ThoiGianGui)
                                        .query(sqlQueries.createuseracountsendingdelmes);
        return insertUserAccountSendingDelMess.recordset;
    } catch (error) {
        return error.message;
    }
}

const updateUserAccout = async (MaTaiKhoan, userDataaccount) =>{
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('UserAccouts');
        const updateuseraccount = await pool.request()
                                .input("MaTaiKhoan", sql.Int, MaTaiKhoan)
                                .input("HoVaTen", sql.NVarChar(50), userDataaccount.HoVaTen)
                                .input("Sdt", sql.NVarChar(12), userDataaccount.Sdt)
                                .input("QueQuan", sql.NVarChar(100), userDataaccount.QueQuan)
                                .input("Tuoi", sql.Int, userDataaccount.Tuoi)
                                .input("DiaChi", sql.NVarChar(50), userDataaccount.DiaChi)
                                .input("ImageUserAccount", sql.NVarChar(1000), userDataaccount.ImageUserAccount)
                                .query(sqlQueries.updateuseraccountinfo);
        return updateuseraccount.recordset;

    } catch (error) {
        return error.message;
    }
}

const updateUserAccoutPassOnly = async (MaTaiKhoan, userDataaccount) =>{
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('UserAccouts');
        const updateuseraccountpassonly = await pool.request()
                                .input("MaTaiKhoan", sql.Int, MaTaiKhoan)
                                .input("Pass", sql.NVarChar(100), userDataaccount.Pass)
                                .query(sqlQueries.updateuseraccountpassonly);
        return updateuseraccountpassonly.recordset;

    } catch (error) {
        return error.message;
    }
}

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
    getByIdUserAccoutInfo,
    getByIdUserAccoutRanking,
    getByIdUserAccout,
    getByIdUserAccoutPasswordOnly,
    getByIdUserAccountSendingDelMess,
    createUserAccout,
    createUserAccoutSendingDelMess,
    updateUserAccout,
    updateUserAccoutPassOnly
    // deleteUser
}
