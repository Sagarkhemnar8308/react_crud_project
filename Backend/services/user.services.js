const userSchema = require('../models/user_schema.js')

const user = {

    async userAll() {
        return await userSchema.find();
    },

    async postData(data) {
        return await userSchema.create(data);
    },

    async updateData(id, data) {
        return await userSchema.findByIdAndUpdate(id, data, { new: true });
    },

    async deleteuser(id) {
        return await userSchema.findByIdAndDelete(id);
    }

}

module.exports = user;