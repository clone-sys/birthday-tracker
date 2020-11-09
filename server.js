require('dotenv').config();
const app = require('./server/app');

const PORT = process.env.PORT || 7000;

app.listen(PORT, () => {
  console.log(`Express is listening on port ${PORT}`);
});
