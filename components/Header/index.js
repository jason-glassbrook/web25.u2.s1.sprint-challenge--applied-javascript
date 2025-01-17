"use strict";
// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

/***********************************************************
  SEQUENCE
***********************************************************/
{
  const myData = {
    "title" : `Lambda Times`,
    "date"  : `SMARCH 28, 2019`,
    "temp"  : `98°`,
  };

  const myContainer = document.querySelector (".header-container");
  const myHeader = Header (myData);

  myContainer.append (myHeader);
}

/***********************************************************
  COMPONENTS
***********************************************************/
function Header(data) {
  /// create elements ///
  const header = newElem ("div"),
        title  = newElem ("h1"),
        date   = newElem ("span"),
        temp   = newElem ("span");
  /// build structure ///
  header.append (date , title , temp);
  /// class it up! ///
  header .upClass ("header");
  date   .upClass ("date");
  temp   .upClass ("temp");
  /// add static data ///
  title .insertAdjacentHTML ("afterbegin" , data["title"]);
  date  .insertAdjacentHTML ("afterbegin" , data["date"]);
  temp  .insertAdjacentHTML ("afterbegin" , data["temp"]);
  /// return ///
  return (header);
}
