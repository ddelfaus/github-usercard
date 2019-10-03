/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
const cards = document.querySelector('.cards');


// axios
//   .get("https://api.github.com/users/ddelfaus")
//   .then(response => {
//     console.log(response);
    
//       const newUser = createProfile(response.data);
//       cards.appendChild(newUser);
    
//   })
//   .catch(error => {
//     console.log("The data was not returned", error);
//   });


/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/


/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = ['ddelfaus','ChrisDelf','devaneereid','bschatzj','jessicaGCooper','ikeman32'];

followersArray.forEach(followers => {


axios.get('https://api.github.com/users/'+ followers)
  .then(response => {
    console.log(response)
    const follower = createProfile(response.data)
    cards.appendChild(follower);
  })
  .catch(error => {
    console.log("The data was not returned", error);
  });

})
/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>
*/
function createProfile(user){
 
  // create elements
const card = document.createElement('div');
const userImg= document.createElement('img');
const cardInfo = document.createElement('div');
const name = document.createElement('h3');
const userName = document.createElement('p');
const userLocation = document.createElement('p');
const userProfileTitle= document.createElement('p');
const userProfileLink = document.createElement('a');
const userFollowers = document.createElement('p');
const userFollowing = document.createElement('p');
const userBio = document.createElement('p');

// classes

card.classList.add('card');
cardInfo.classList.add('card-info');
name.classList.add('name');
userName.classList.add('username')


// content

userImg.src = user.avatar_url;
name.textContent = user.name;
userName.textContent = user.login;
userLocation.textContent = user.location;
userProfileTitle.textContent = 'Profile'
userProfileLink.href = user.html_url;
userProfileLink.innerHTML = user.html_url;
userFollowers.textContent = `${user.followers} followers`;
userFollowing.textContent = `${user.following} following`;
userBio.textContent = user.bio;

// adding to index

card.appendChild(userImg);
card.appendChild(cardInfo);
cardInfo.appendChild(name);
cardInfo.appendChild(userName);
cardInfo.appendChild(userLocation);
cardInfo.appendChild(userProfileTitle);
cardInfo.appendChild(userProfileLink);
cardInfo.appendChild(userFollowers);
cardInfo.appendChild(userFollowing);
cardInfo.appendChild(userBio);

return card;

}



/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
