import Router from "express";
export const accountRouter = Router();

import mongoose, { Schema } from 'mongoose';

import crypto from 'crypto';
const salt = "paraplane".toString('hex');

function getHash(password) {
    let hash = crypto.pbkdf2Sync(password, salt, 1000, 64, `sha512`).toString(`hex`)
    return hash;
}

const accountSchema = new Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    admin: { type: Boolean, default: false }
})

mongoose.model('accounts', accountSchema);

accountRouter.get('/', async (req, res) => {
    try {
        const accounts = await mongoose.models.accounts.find();
        res.json(accounts);
    } catch (error) {
        res.status(500).json({ "error": "internal server error" });
    }
})

accountRouter.post('/', async (req, res) => {
    try {
        const account = new mongoose.models.accounts();
        account.email = req.body.email;
        account.password = getHash(req.body.password);
        await account.save();
        res.json({"result": "created"});
    } catch (error) {
        if (error.email === 'MongoError' && error.code === 11000) {
            res.status(400).json({ "error": "email already exist!" });
        } else {
            res.status(500).json({ "error": "internal server error" });
        }
    }
})