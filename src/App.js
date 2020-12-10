import React, { useState } from "react";
import "./styles.css";

const placeDictionary = {
  adventure: ["Bir-Billing", "Manali", "Ladakh"],
  honeymoon: ["andman and nicobar", "auli", "dalhousie"],
  nightlife: ["goa", "mumbai", "delhi"]
};
const placeRating = {
  adventure: ["4/5", "4.5/5", "3/5"],
  honeymoon: ["3.5/5", "4/5", "3/5"],
  nightlife: ["4/5", "3.5/5", "4/5"]
};
var flag = 0;

var placeKey = Object.keys(placeDictionary);

export default function App() {
  var [genre, setGenre] = useState("adventure");
  var [element2, setelement2] = useState("");

  function getgenre(num) {
    if (num === 0) {
      return placeKey[0];
    } else if (num === 1) {
      return placeKey[1];
    }
    return placeKey[2];
  }
  function clickHandler(genree, n) {
    setGenre(genree);

    var element = document.getElementById(n);
    if (flag === 0) {
      if (element2 === "") element2 = element; //setting element2 initial value(i.e span of id zero)
      element2.classList.remove("active");
      element.classList.add("active");
      flag = 1;
      setelement2(element);
    } else {
      element2.classList.remove("active");
      flag = 0;
      element.classList.add("active");
      setelement2(element);
    }
  }

  function getList(genre) {
    var places = placeDictionary[genre];
    return places.map((place, index) => {
      var placeSpecific = place;
      return (
        <li key={place} className="list-content">
          {placeSpecific}
          {
            // console.log(genre)
          }
          <h3>{placeRating[genre][index]}</h3>
        </li>
      );
    });
  }

  return (
    <div className="App">
      <h1 style={{ color: "#FFFBEB" }}>amazingPLACES</h1>
      <div>
        <span
          id="zero"
          onClick={() => clickHandler(getgenre(0), "zero")}
          className="genre "
        >
          adventure
        </span>
        <span
          id="one"
          onClick={() => clickHandler(getgenre(1), "one")}
          className="genre"
        >
          honeymoon
        </span>
        <span
          id="two"
          onClick={() => clickHandler(getgenre(2), "two")}
          className="genre"
        >
          nightlife
        </span>
      </div>

      <ul className="places">{getList(genre)}</ul>
    </div>
  );
}
