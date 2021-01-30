let doge = document.createElement('img'); 
doge.id = 'theDoge'
doge.src = chrome.extension.getURL('images/doge.png');
document.body.appendChild(doge);

let muchCapitalism = document.createElement('span'); 
muchCapitalism.id = 'muchCapitalism'
muchCapitalism.innerHTML = 'much capitalism'
document.body.appendChild(muchCapitalism);

let wow = document.createElement('span'); 
wow.id = "wow"
wow.innerHTML = 'wow'
document.body.appendChild(wow);