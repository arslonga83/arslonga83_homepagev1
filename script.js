class card {
  constructor(title, link, img, desc){
this.title = title;
this.link = link;
this.img = img;
this.desc = desc;
  }
}

const cards = [];


cards[0] = new card(
  'test title',
  'test link',
  'test img', 
  'test desc'
);

console.log(cards)

function printCards(card) {
const gallery = document.getElementById('gallery');
let div = document.createElement('div');
div.classList.add('card');
let title = div.appendChild(document.createElement('h2'));
title.innerHTML = card.title;
let link = div.appendChild(document.createElement('a'));
link.href = card.link;
let img = div.appendChild(document.createElement('img'));
img.url = card.img;
let desc = div.appendChild(document.createElement('p'));
desc.innerHTML = card.desc;
gallery.appendChild(div);
};

printCards(cards[0]);