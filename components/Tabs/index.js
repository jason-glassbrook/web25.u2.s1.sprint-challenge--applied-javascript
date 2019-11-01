// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

/***********************************************************
  SEQUENCE
***********************************************************/
{
  const myAPI = `https://lambda-times-backend.herokuapp.com/topics`;
  let myData = {};

  const myContainer = document.querySelector (".tabs");
  let myTabs = [];

  axios
    .get (myAPI)
    .then (function (re) {
      console.log ("--- 😄 --- success --- 😄 ---");
      myData = re.data;
      console.log (myData);
      myTabs = myData["topics"].map (
        (data) => (Tab ({"topic" : data}))
      );
      console.log (myTabs);
      myContainer.append (...myTabs);
    })
    // .catch (function (re) {
    //   console.log ("--- 😨 --- uh-oh --- 😨 ---");
    // })
    // .finally (function (re) {
    //   console.log ("--- 😘 --- we're done here --- 😘 ---");
    // })
}

/***********************************************************
  COMPONENTS
***********************************************************/
function Tab(data) {
  /// create elements ///
  const tab = newElem ("div");
  /// class it up! ///
  tab .upClass ("tab");
  /// add static data ///
  tab .insertAdjacentHTML ("afterbegin" , data["topic"]);
  /// return ///
  return (header);
}
