const db = require('../db')

module.exports = {
    getAllUsers: async () => {
        const [rows] = await db.query("SELECT * FROM users")
            .catch(err => console.log(err))
        return rows;
    },

    addUsers: async (obj) => {
        const { name } = obj;
        const [row] = await db.query("INSERT INTO users(name) VALUES (?)", [obj.name])
            .catch(err => console.log(err))
        const insertedCandidateId = row.insertId; // Get the ID of the inserted candidate
        return { Id: insertedCandidateId, name };
    },

    getAllCandidates: async () => {
        const [rows] = await db.query("SELECT * FROM candidates")
            .catch(err => console.log(err))
        return rows;
    },

    addCandidates: async (obj) => {
        const { uid, candidateName } = obj;
        const row = await db.query("INSERT INTO users(uid,name) VALUES (?,?)", [obj.name])
            .catch(err => console.log(err))
        return row;
    },

}