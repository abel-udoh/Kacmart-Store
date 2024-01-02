/*
import connection from "../configs/connectDB";
import bcryptjs from "bcryptjs";

let createNewUser = (user) => {
    return new Promise(executor: async (resolve, reject) => {
        try {
            //check if email exist or not
            let check = await checkEmailUser(user.email);
            if(check){
                reject(reason: `This email "${user.email}" has already exist. Please choose another email`);
            } else{
                //hash the user password
                let salt = bcryptjs.genSaltSync(10);
                let data = {
                    fullname: user.fullname,
                    email: user.email,
                    password: bcryptjs.hashSync(user.password, salt)
                }

                connection.query( sql: "INSERT INTO users set ? ", data, function(error, rows) {
                    if(error){
                        reject(error);
                    }
                    resolve( value: "New User Created Successfully");
                })
            }
        } catch (e) {
            reject(e);
        }
    });
};
let checkEmailUser = (email) => {
    return new Promise(((resolve, reject) => {
        try{
            connection.query(sql: "SELECT * from users where email = ?", email, cb: function(error, rows) {
                if (error){
                    reject(error);
                }
                if (rows.length > 0) {
                    resolve( value: true)
                } else {
                    resolve( value: false)
                }
            })
        }catch(e) {
            reject(e);
        }
    }));
};

module.exports =  {
    createNewUser: createNewUser
}
*/

import connection from "../configs/connectDB";
import bcryptjs from "bcryptjs";

const createNewUser = async (user) => {
    try {
        // Check if email exists or not
        const emailExists = await checkEmailUser(user.email);
        
        if (emailExists) {
            throw new Error(`This email "${user.email}" already exists. Please choose another email.`);
        } else {
            // Hash the user password
            const salt = bcryptjs.genSaltSync(10);
            const hashedPassword = bcryptjs.hashSync(user.password, salt);

            const userData = {
                fullname: user.fullname,
                email: user.email,
                password: hashedPassword
            };

            const insertUserQuery = "INSERT INTO users SET ?";
            const row = await queryAsync(insertUserQuery, userData);

            return "New User Created Successfully";
        }
    } catch (error) {
        throw error;
    }
};

const checkEmailUser = async (email) => {
    try {
        const selectUserQuery = "SELECT * FROM users WHERE email = ?";
        const rows = await queryAsync(selectUserQuery, email);

        return rows.length > 0;
    } catch (error) {
        throw error;
    }
};

const queryAsync = (sql, values) => {
    return new Promise((resolve, reject) => {
        connection.query(sql, values, (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
};

export { createNewUser };
