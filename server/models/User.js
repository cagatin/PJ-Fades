const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Must match an email address!'],
    },
    password: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 28
    },
    reservations: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Reservation'
        }
    ]
});

// set up pre-save middleware to create password
userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});

// create verifyPassword method to compare incoming password with hashed password
userSchema.methods.verifyPassword = async function (password) {
    return bcrypt.compare(password, this.password);
}

// Create the User schema
const User = model('User', userSchema);

module.exports = User;