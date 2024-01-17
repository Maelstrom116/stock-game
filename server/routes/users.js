const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json([
    {
      username: 'Trevor',
      age: 26,
    },
    {
      username: 'Bill',
      age: 32,
    },
  ]);
});

module.exports = router;
