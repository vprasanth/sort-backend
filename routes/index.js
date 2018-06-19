const bubbleSortHandler = require('./bubblesort');
const mergeSortHandler = require('./mergesort');

function configureSortRoutes (app) {
  /**
   * For the following endpoints
   * if unsortedNumbers query param does not exist
   * a 400 is returned
   */
  app.use(routeGuard); 
  app.use(queryHelper); 
  app.use('/bubblesort', bubbleSortHandler);
  app.use('/mergesort', mergeSortHandler);
}

function queryHelper(req, res, next) {
  if (req.query.unsortedNumbers) {
    req.query.unsortedNumbers = stringToArray(req.query.unsortedNumbers);
  }
  next();
}

/**
 * In addtion to converting an array of
 * numbers in string to a JS array, this
 * function also removes any NaNs from
 * @todo make this optional based on another
 * param or startup option
 */
function stringToArray(str) {
  return str.split(',').reduce((acc, curr)  => {
    let temp = parseFloat(curr, 10);
    if (!isReallyNaN(temp)) {
      acc.push(temp);
    }
    return acc;
  }, []);
}

/**
 * Neat lil trickt I learned from
 * Essential JavaScript. 
 * The NaN is the only JS object
 * that is _not_ equal to itself.
 */
function isReallyNaN(x) {
  return x !== x;
}

function routeGuard(req, res, next) {
  if(req.query.unsortedNumbers){
    next();
  } else {
    let message = {
      message: 'unsortedNumbers query param missing'
    };
    res.status(400).send(message);
  }
}

module.exports = configureSortRoutes;

