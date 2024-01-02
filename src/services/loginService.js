/*
const connection = require("../configs/connectDB");
const bcrypt = require('bcryptjs');

let findUserByEmail = (email) => {
    return new Promise((resolve, reject) => {
        try{
            connection.query(sql: "SELECT * from users email=?", email, cb: function(error, rows) {
                if(error){
                    reject(error);
                }
                let user = rows[0];
                resolve(user);
            })
        }catch (e) {
            reject(e);
        }
    });
};

let comparePasswordUser = (user, password) => {
    return new Promise( executor: async (resolve, reject) => {
        try{
            let isMatch = await bcrypt.compare(password, user.password);
            if (isMatch) resolve( value: true);
            resolve( reason: "The password that you've entered is incorrect");
        } catch (e) {
            reject(e);
        }
    });

};


const findUserById = (id) => {
    return new Promise((resolve, reject) => {
        try{
            connection.query(sql: "SELECT * from users  where id=?", id, cb: function(error, rows) {
                if(error){
                    reject(error);
                }
                let user = rows[0];
                resolve(user);
            })
        }catch (e) {
            reject(e);
        }
    });

};

module.exports = {
    findUserByEmail: findUserByEmail,
    comparePasswordUser: comparePasswordUser,
    findUserById: findUserById
};

/*
const connection = require("../configs/connectDB");
const bcrypt = require('bcryptjs');

const findUserByEmail = (email) => {
    return new Promise((resolve, reject) => {
        try {
            const sql = "SELECT * FROM users WHERE email=?";
            connection.query(sql, [email], (error, rows) => {
                if (error) {
                    reject(error);
                } else {
                    const user = rows[0];
                    resolve(user);
                }
            });
        } catch (e) {
            reject(e);
        }
    });
}; 

const comparePasswordUser = async (user, password) => {
    try {
        const isMatch = await bcrypt.compare(password, user.password);
        if (isMatch) {
            return true;
        } else {
            throw new Error("The password that you've entered is incorrect");
        }
    } catch (e) {
        throw e;
    }
};

const findUserById = (id) => {

};

module.exports = {
    findUserByEmail: findUserByEmail,
    comparePasswordUser: comparePasswordUser
    findUserById: findUserById
};
*/
const connection = require("../configs/connectDB");
const bcrypt = require('bcryptjs');

const findUserByEmail = (email) => {
    return new Promise((resolve, reject) => {
        try {
            connection.query("SELECT * FROM users WHERE email=?", [email], (error, rows) => {
                if (error) {
                    reject(error);
                } else {
                    const user = rows[0];
                    resolve(user);
                }
            });
        } catch (e) {
            reject(e);
        }
    });
};

const comparePasswordUser = (user, password) => {
    return new Promise(async (resolve, reject) => {
        try {
            const isMatch = await bcrypt.compare(password, user.password);
            if (isMatch) {
                resolve(true);
            } else {
                reject("The password that you've entered is incorrect");
            }
        } catch (e) {
            reject(e);
        }
    });
};

const findUserById = (id) => {
    return new Promise((resolve, reject) => {
        try {
            connection.query("SELECT * FROM users WHERE id=?", [id], (error, rows) => {
                if (error) {
                    reject(error);
                } else {
                    const user = rows[0];
                    resolve(user);
                }
            });
        } catch (e) {
            reject(e);
        }
    });
};

module.exports = {
    findUserByEmail: findUserByEmail,
    comparePasswordUser: comparePasswordUser,
    findUserById: findUserById
};
