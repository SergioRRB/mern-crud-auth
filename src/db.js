import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
        mongoose.connect('mongodb://localhost/merndb');
        console.log('MongoDB connected');
    } catch {
        console.log( error );
    }
}
