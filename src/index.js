import app from './app.js';
import { connectDB } from './db.js';

console.clear();
connectDB();
app.listen(4000, () => {
    console.log('Server running on port 4000');
});

