const express = require('express');
const router = express.Router();
const mergeSort = require('../lib').mergeSort;

router.post('/', (req, res) => {
  res.send(mergeSort(req.query.unsortedNumbers));
});

module.exports = router;

