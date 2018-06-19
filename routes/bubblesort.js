const express = require('express');
const router = express.Router();
const bubbleSort = require('../lib').bubbleSort;

router.post('/', (req, res) => {
  /**
   * Since bubble sort is a very poor
   * sort algorithm in terms of its avg complexity
   * of O(n^2), I'm artificially setting a max
   * timout for this endpoint so using this 
   * sort is discouraged.
   */
  res.send(bubbleSort(req.query.unsortedNumbers));
});

module.exports = router;

