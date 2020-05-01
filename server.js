const app = require('./app');
const connectDB = require('./config/db');

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  connectDB();
  console.log('Server started...');
});
