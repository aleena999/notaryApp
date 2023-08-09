const db = require('../db')

module.exports = {
 getAllUsers : async () => {
        const [rows] = await db.query("SELECT * FROM users")
            .catch(err => console.log(err))
        return rows;
    },

    addUsers: async (obj) => {
        const row = await db.query("INSERT INTO users(name) VALUES (?)", [obj.name])
            .catch(err => console.log(err))
        return row;
    }

}