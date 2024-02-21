import User from "../models/user-model.js";

export const getAllUser = async (req, res) => {
    try {
        const users = await User.find();
        if (!users || users.length === 0) throw new Error("No user found");
        return res.status(200).json({ success: true, data: users });
    } catch(error) {
        return res.status(404).json({ success: false, message: error.message });
    }
}

export const getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createUser = async (req, res) => {
    const user = req.body;
    const newUser = new User(user);
    try {
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

// PUT /users/:id -> update a user by its id
export const updateUser = async (req, res) => {
    const user = req.body;
    const id = req.params.id;
    try {
        await User.findByIdAndUpdate(id, user);
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

// DELETE /users/:id -> delete a user by its id
export const deleteUser = async (req, res) => {
    const id = req.params.id;
    try {
        await User.findByIdAndDelete(id);
        res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}