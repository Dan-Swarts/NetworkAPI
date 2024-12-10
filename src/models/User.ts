import { Schema, Types, model, type Document } from 'mongoose';

interface IUser extends Document {
    username: string,
    email: string,
}