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

function Header() {
  /// create elements ///
  const header = newElem ("div"),
        date   = newElem ("span"),
        title  = newElem ("h1"),
        temp   = newElem ("span");
  /// build structure ///
  header.append (date , title , temp);
}
