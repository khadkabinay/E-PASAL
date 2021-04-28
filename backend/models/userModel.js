const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const userSchema = mongoose.Schema({
    name:  {
        type: String,
        required: true
    },
    email:  {
        type: String,
        required: true,
        unique: true
    },
    password:  {
        type: String,
        required: true
    },
    isAdmin:  {
        type: Boolean,
        required: true,
        default: false
    },
}, {
    timestamps: true
})

// instantiate a method for compare old and new input password
userSchema.methods.matchPassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password)
}

const User = mongoose.model('User', userSchema) 

module.exports = User