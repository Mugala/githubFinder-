// search input
const searchUser = document.getElementById('searchUser');

//Search Inputs event Listener

searchUser.addEventListener('keyup', (e) => {
  //Get input text
  const userText = e.target.value;

  if(userText !==''){
    console.log(userText);
  }
});