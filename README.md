# sort-backend
An express backend to sort numbers.

### Usage

To use this server, simply open in to the directory within your terminal, and run `npm start`. 

The available endpoints are listed below. 

**Note.** Both endpoints require the `unsortedNumbers` query parameter. 

Eg. `localhost:3000/bubblesort?unsortedNumbers=11898, 10175, 155, 10211, 4037, 11228, 4553, 2781, 6331`

##### To run tests
`npm run test`

### Endpoints

#### POST /bubblesort
This endpoint uses the Bubble sort algorithm to sort numbers.
Bubble sort has an average worst-case complexity of O(n^2), which doesn't make
this algorithm very practical as the complexity grows by a power of 2 as the 
problem grows. However, an attractive detail about this algorithm is that it's memory usage
complexity is O(1).

#### POST /mergesort
This endpoint uses the tradional merge sort algorithm to sort numbers. Merge sort has a better avg worst-case complexity of O(n log n), therefore, as the problem set grows, the complexity doesn't grow as quickly, which means there isn't a huge performance decrease has the problem set grows. Memory usage is linear however (in this implementation).

#### Constraints & observations

##### On memory
Both sorting algorithms will start to perform poorly if problem set requires more
space than available in RAM, however it must be noted since we're providing input via the URL,
the accepted common limit is ~2000 characters. I would recommend using the body of the request instead to pass the numbers. One technique to mitigate the negative impacts of running out of space in RAM would be to perhaps split up the set in to chunks and process and combine instead of trying to process
whole array in one shot.

##### On non-number inputs
I decided to silently remove non-numbers from the input, I'd like to make that optional as perhaps
this might not be what the user expects in some cases.

##### Error handling
I've opted to use a middleware style for error handling, as I figured it provided a more declartive
way of handling the error and freed up the route handlers them selves from repeating error logic.

##### Security
Added `helmet` package to remove some verbose headers in the responses. Though the main advantages for
`helmet` are when used with a browser env, I find it's generally good to have in any case.

##### File-structure
I've tried to lay out the application in logical chunks (e.g. routes, library modules, main). However,
I find the filenames themselves kind of annoying and relying on `index.js` convention within node to be
a bit...... weird. In anycase, if you're using a modern IDE it's pretty easy to navigate. Within vim, it could be better.

#### Feedback
This was an interesting exercise. I can't remember the last time I've had to implement these
algorithms from scratch :), and doing a quick refresher on Big O was also nice. I enjoyed it a lot, and am considering perhaps continuing to implement more endpoints using different sorting algorithms.
