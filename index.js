function showSignup() {
  document.getElementById('signupModal').style.display = 'block';
}
function closeSignup() {
  document.getElementById('signupModal').style.display = 'none';
}
function showDetails(type) {
  if(type === 'natural') {
    alert('Natural Look: Prep your skin, apply foundation, blend neutral eyeshadow, add mascara, and finish with nude lipstick.');
  } else if(type === 'glam') {
    alert('Glamorous Look: Use primer, bold eyeshadow, winged liner, dramatic lashes, contour cheeks, and a red lip.');
  }
}
function sendMessage() {
  document.getElementById('formStatus').innerText = 'Thank you for your message!';
  return false;
}
window.onclick = function(event) {
  var modal = document.getElementById('signupModal');
  if (event.target == modal) {
    closeSignup();
  }
}