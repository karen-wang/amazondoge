function preloadImage(url) {
    let img=new Image();
    img.src=url;
}

const amazonURLs = [
	'*://*.amazon.ae/*',
	'*://*.amazon.at/*',
	'*://*.amazon.ca/*',
	'*://*.amazon.cn/*',
	'*://*.amazon.co.jp/*',
	'*://*.amazon.co.uk/*',
	'*://*.amazon.com.au/*',
	'*://*.amazon.com.br/*',
	'*://*.amazon.com.mx/*',
	'*://*.amazon.com.sg/*',
	'*://*.amazon.com.tr/*',
	'*://*.amazon.com/*',
	'*://*.amazon.de/*',
	'*://*.amazon.es/*',
	'*://*.amazon.fr/*',
	'*://*.amazon.ie/*',
	'*://*.amazon.in/*',
	'*://*.amazon.it/*',
	'*://*.amazon.nl/*',
];

const dogeURL = chrome.extension.getURL('images/doge.png');
preloadImage(dogeURL);

let doge = document.createElement('img'); 
doge.id = 'theDoge'
doge.src = dogeURL;
document.body.appendChild(doge);

let muchCapitalism = document.createElement('span'); 
muchCapitalism.id = 'muchCapitalism'
muchCapitalism.innerHTML = 'much capitalism'
document.body.appendChild(muchCapitalism);

let wow = document.createElement('span'); 
wow.id = "wow"
wow.innerHTML = 'wow'
document.body.appendChild(wow);