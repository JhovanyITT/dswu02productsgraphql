const User = require('../models/userSchema');
const facturapi = require('../apis/Facturapi/user')

module.exports = {
    getAllUsers: async () => await User.find(),
    getUserById: async (_id) => await User.findById(_id),
    createUser: async (args) => {
        const user = new User(args);
        const facturapiUser = await facturapi.createUser(user);
        user.facturapiid = facturapiUser.id; 
        return await user.save();
    },
    updateUser: async ({ _id, ...rest }) => {
        const updatedUser = await User.findByIdAndUpdate(_id, rest, { new: true });
        facturapi.updateUser(updatedUser.facturapiid, updatedUser);
        return updatedUser;
    },
    deleteUser: async (_id) => {
        const deletedUser = await User.findByIdAndDelete(_id);
        facturapi.deleteUser(deletedUser.facturapiid);
        return deletedUser;
    }
}