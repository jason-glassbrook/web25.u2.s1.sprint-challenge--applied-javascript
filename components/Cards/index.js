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
  const card           = newElem ("div"),
        headline       = newElem ("div"),
        authorInfo     = newElem ("div");
        authorImageDiv = newElem ("div");
        authorImage    = newElem ("img");
        authorName     = newElem ("span");
  /// return ///
  return (card);
}
