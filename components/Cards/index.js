// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

/***********************************************************
  SEQUENCE
***********************************************************/
{
  const myAPI = `https://lambda-times-backend.herokuapp.com/articles`;
  let myData = {};

  const myContainer = document.querySelector (".cards-container");
  let myCards = [];

  axios
    .get (myAPI)
    .then ((re) => {
      ///
      console.log ("--- 😄 --- success --- 😄 ---");
      /// store data ///
      myData = re.data;
      console.log (myData);
      // /// make babies ///
      // myCards = myData["topics"].map (
      //   (data) => (Card ({"topic" : data}))
      // );
      // console.log (myCards);
      // /// give babies ///
      // myContainer.append (...myCards);
      ///
    })
    .catch ((re) => {
      console.log ("--- 😨 --- uh-oh --- 😨 ---");
    })
    .finally ((re) => {
      console.log ("--- 😘 --- we're done here --- 😘 ---");
    })
}

/***********************************************************
  COMPONENTS
***********************************************************/
function Card(data) {
  /// create elements ///
  const card        = newElem ("div"),
        headline    = newElem ("div"),
        author      = newElem ("div");
        authorImage = newElem ("div");
        authorPhoto = newElem ("img");
        authorName  = newElem ("span");
  /// build structure ///
  card        .append (headline , author);
  author      .append (authorImage , authorName);
  authorImage .append (authorPhoto);
  /// class it up! ///
  card        .upClass ("card");
  headline    .upClass ("headline");
  author      .upClass ("author");
  authorImage .upClass ("img-container");
  authorPhoto .upClass ("author-photo");
  authorName  .upClass ("author-name");
  /// add data attributes ///
  card        .setAttribute ("data-topic" , data["topic"]);
  authorPhoto .setAttribute ("data-author-photo" , data["authorPhoto"]);
  authorName  .setAttribute ("data-author-name" , data["authorName"]);
  /// add data ///
  headline    .insertAdjacentHTML ("afterbegin" , data["headline"]);
  authorPhoto .src = data["authorPhoto"];
  authorImage .insertAdjacentHTML ("afterbegin" , data["authorName"]);
  /// return ///
  return (card);
}
