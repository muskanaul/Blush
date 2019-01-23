/**
 * This class is used mostly to store the existent states on most of our application components. Those are basically
 * used to know which view to display to the user based on the information received from our Action class.
 *
 * 
 */

/** When we are in the middle of some operation (HTTP request, heavy computation, etc) **/
export const STATE_LOADING = 'state_loading';

/** To display an error on screen (could be lack of network, server response issue, yada yada) **/
export const STATE_ERROR = 'state_error';

/** When there is nothing to display to the user (empty list) **/
export const STATE_EMPTY_VIEW = 'state_empty';

/** When the requested action was successfully executed **/
export const STATE_SUCCESS = 'state_success';