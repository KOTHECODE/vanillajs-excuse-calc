/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  function phrase() {
    let who = ["the dog", "my leg", "uncle", "The Traffic"];
    let what = ["slowed", "jammed up", "got shakey", "did not pick up"];
    let when = [
      "even though  i  was late",
      "right in time",
      "when I need it the most",
      "during my down time",
      "while I was so far"
    ];

    let part = Math.floor(Math.random() * 4);

    return who[part] + " " + what[part] + " " + when[part];
  }

  document.textContent = "<h1>Sorry I'm late but,  " + phrase() + "</h1>";
};
