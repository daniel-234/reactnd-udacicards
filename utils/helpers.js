/*
 * UUID generator function.
 * Code taken from an answer on Stackoverflow on how to generate a simple
 * UUID identifier.
 */
export const generateUUID = function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

/*
 * Get results data as argument in JSON format and return a JavaScript
 * object.
 */
export const formatResults = function resultsFromAsyncCall(results) {
	// Build a decks object from the JSON string `results`.
	const decks = JSON.parse(results);
	return decks;
}