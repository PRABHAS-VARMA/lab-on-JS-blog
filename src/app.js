class Blog {
  // Progression 1: Add 2 methods - addTitle(), and addDescription()
  constructor(title, detail) {
    this.title = title;
    this.detail = detail;
  }
  addTitle() {
    var titleOfTheCard = document.createElement('h1');
    titleOfTheCard.setAttribute('id', 'blog-title');
    console.log(titleOfTheCard);
    document.getElementById('card-text').appendChild(titleOfTheCard);
    titleOfTheCard.innerHTML += this.title;
  }
  addDescription() {
    var descriptionOfTheCard = document.createElement('h5');
    descriptionOfTheCard.setAttribute('id', 'blog-description');
    console.log(descriptionOfTheCard);
    document.getElementById('card-text').appendChild(descriptionOfTheCard);
    descriptionOfTheCard.innerHTML += this.detail;
  }
}

// Progression 2: Setup an event listner - add two functions
// 1. `helperAddPost()`
// 2. `helperPost()`
function helperAddPost() {
  const popupFrame = document.getElementById('popupFrame');
  if (popupFrame.style.display === 'none' || popupFrame.style.display === '') {
    popupFrame.style.display = 'block';
  } else {
    popupFrame.style.display = 'none';
  }
}

let x;
function helperAddPost() {
  if (x !== 1) {
    document.getElementById('popupContact').style.display = 'none';
    return (x = 1);
  } else {
    document.getElementById('popupContact').style.display = 'inline';
    return (x = 0);
  }
}

function helperPost() {
  const x = document.getElementById('title').value;
  const y = document.getElementById('detail').value;
  const z = new Blog(x, y);
  z.addTitle();
  z.addDescription();
}
