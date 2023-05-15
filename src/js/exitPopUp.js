/******************** Creating constants for script ********************/

// Pop Up that is shown when player decides to join session.
const exitPopUp = document.getElementById('popUpExit');
// Button that allows player to close pop up.
const cancelButton = document.getElementById('btnCancel');
// Button that allows player to return to main page.
const acceptButton = document.getElementById('btnAccept');

/********************** Functions used on script **********************/

/**
 * Close Pop Up.
 */
function closePopUp () {
  if(exitPopUp && cancelButton) {
    exitPopUp.style.display = 'none';
  }
}

/************************ Listeners for buttons ************************/

cancelButton.addEventListener('click', closePopUp);