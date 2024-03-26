
function generateExcuse() {
    
    let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
    let action = ['ate', 'peed', 'crushed', 'broke'];
    let what = ['my homework', 'my phone', 'the car'];
    let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

    let arrayposition = Math.floor(Math.random() * 3)
    let fullSentence = `${who[arrayposition]} ${action[arrayposition]} ${what[arrayposition]} ${when[arrayposition]}`;
    let span = document.getElementById("excuse");
    span.innerHTML = fullSentence;
  }


