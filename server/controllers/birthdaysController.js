const User = require('../db/models/birthday');

//Get All Birthdayss
const getAllBirthdays = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({ users });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get ONE Birthday
const getOneBirthday = async (req, res) => {
  try {
    const user = await User.findById({ _id: req.params.id }).populate(
      'birthdays'
    );
    res.status(200).json({ birthday });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//Create a new Birthday
const createBirthday = async (req, res) => {
  try {
    const birthday = new User(req.body);
    await birthday.save();
    res.status(201).json({ user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//Delete a user
const deleteBirthday = async (req, res) => {
  try {
    const birthday = await Birthday.findByIdAndDelete({ _id: req.params.id });
    await birthday.remove();
    res.status(200).json({ message: 'Birthday has been deleted.' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//Update a User
const updateBirthday = async (req, res) => {
  try {
    const user = await Birthday.findOne({ _id: req.params.id });
    birthday.username = req.body.username;
    birthday.cohort_number = req.body.cohort_number;
    birthday.month = req.body.month;
    birthday.date = req.body.date;
    await birthday.save();
    res.status(200).json({ birthday });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getAllBirthdays,
  createBirthday,
  getOneBirthday,
  deleteBirthday,
  updateBirthday
};
