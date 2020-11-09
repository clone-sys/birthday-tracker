const router = require('express').Router();
const {
  getAllBirthdays,
  createBirthday,
  getOneBirthday,
  deleteBirthday,
  updateBirthday
} = require('../controllers/birthdaysController');

router.get('/', getAllBirthdays);
router.get('/:id', getOneBirthday);
router.post('/', createBirthday);
router.delete('/:id', deleteBirthday);
router.put('/:id', updateBirthday);

module.exports = router;
