const bcrypt = require('bcryptjs')
const users = [
    {
        name: 'Binu Bk',
        email: 'adminbin@example.com',
        password: bcrypt.hashSync('234567', 10),
        isAdmin: true
    },
    {
        name: 'Raju P',
        email: 'raju@example.com',
        password: bcrypt.hashSync('234567', 10),
    },
    {
        name: 'sonu G',
        email: 'sonu@example.com',
        password: bcrypt.hashSync('234567', 10),
    }

]

module.exports = users