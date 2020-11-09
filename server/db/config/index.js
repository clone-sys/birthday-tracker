const mongoose = require('mongoose');

try {
  mongoose.connect(process.env.ATLAS_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  console.log('MongoDB has been connected!');
} catch (error) {
  console.log(error);
}
