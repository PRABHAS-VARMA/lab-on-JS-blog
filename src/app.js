class Blog {
  // Progression 1: Add 2 methods - addTitle(), and addDescription()
  constructor(title, detail) {
    this.title = title;
    this.detail = detail;
  }
  addTitle() {
    var title_card = document.createElement('h1');
    title_card.setAttribute('id', 'blog-title');
    console.log(title_card);
    document.getElementById('card-text').appendChild(title_card);
    title_card.innerHTML += this.title;
  }
  addDescription() {
    var descriptionOfCard = document.createElement('h3');
    descriptionOfCard.setAttribute('id', 'blog-description');
    console.log(descriptionOfCard);
    document.getElementById('card-text').appendChild(descriptionOfCard);
    descriptionOfCard.innerHTML += this.detail;
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

// Function to add a new post and display it
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
  const blog = new Blog(x, y);
  blog.addTitle();
  blog.addDescription();
}
