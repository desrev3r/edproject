const app = require('./app');
const connectDB = require('./config/db');

const PORT = 5000;
app.listen(PORT, () => {
  connectDB();
  console.log('Server started...');
});
