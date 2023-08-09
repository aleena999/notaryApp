const db = require('../db')

module.exports = {
    getAllUsers: async () => {
        const [rows] = await db.query("SELECT * FROM users")
            .catch(err => console.log(err))
        return rows;
    },

    addUsers: async (obj) => {
        const { name } = obj;
        const [row] = await db.query("INSERT INTO users(name) VALUES (?)", [name])
            .catch(err => console.log(err))
        const insertedCandidateId = row.insertId;
        return { Id: insertedCandidateId, name };
    },

    getAllCandidates: async () => {
        const [rows] = await db.query("SELECT * FROM candidates")
            .catch(err => console.log(err))
        return rows;
    },

    addCandidate: async (obj) => {
        const { uid, candidateName } = obj;
        const [row] = await db.query("INSERT INTO candidates(uid,candidateName) VALUES (?,?)", [uid, candidateName])
            .catch(err => console.log(err))
        const insertedCandidateId = row.insertId;
        return { Id: insertedCandidateId, uid, candidateName };
    },

    getCandidateStatus: async () => {
        const [rows] = await db.query("SELECT * FROM candidate_status")
            .catch(err => console.log(err))
        return rows;
    },

    addOrUpdateCandidateStatus: async (obj) => {
        const { cid, status, statusUpdatedAt } = obj;
        const [row] = await db.query("INSERT INTO candidate_status(cid, status, statusUpdatedAt ) VALUES (?,?,?)" +
            "ON DUPLICATE KEY UPDATE status = VALUES(status)",
            [cid, status, statusUpdatedAt])
            .catch(err => console.log(err))
        const insertedCandidateId = row.insertId;
        return { Id: insertedCandidateId, cid, status, statusUpdatedAt };
    },

    getStatusCount: async (obj) => {
        const { uid } = obj;
        const [row] = await db.query("SELECT u.Id AS UId, COUNT(c.Id) AS TotalCandidates, SUM(CASE WHEN cs.status = 'joined' THEN 1 ELSE 0 END) AS Joined, SUM(CASE WHEN cs.status = 'interview' THEN 1 ELSE 0 END) AS Interview FROM users u LEFT JOIN candidates c ON u.Id = c.uid LEFT JOIN candidate_status cs ON c.Id = cs.cid WHERE u.Id = ? GROUP BY u.Id",
            [uid])
            .catch(err => console.log(err))
        return row[0];
    },
}