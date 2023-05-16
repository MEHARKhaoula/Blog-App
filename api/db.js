import mysql from "mysql"

export const db = mysql.createConnection({
  
    host:"sql.freedb.tech",
    user:"freedb_ik_mehar",
    password:"RBcMGNa&9KN4qrv",
    database:"freedb_blog-db"
})