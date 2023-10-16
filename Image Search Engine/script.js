const searchForm = document.getElementById('search-form');
const searchBox = document.getElementById('search-box');
const searchResult = document.getElementById('search-result');
const showMoreButton = document.getElementById('show-more-btn');

let keyWord = '';
let page = 1;
const accessKey = 'CCDulUGZZ1q0YBfiHf5HRFKfomqVoXuqJpqa3S9TQms';

async function searchImages() {
   keyWord = searchBox.value;
   const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyWord}&client_id=${accessKey}&per_page=12`;

   const response = await fetch(url);
   const data = await response.json();

   // console.log(data);

   if (page === 1) {
      searchResult.innerHTML = '';
   }
   const results = data.results;

   results.map((result) => {
      const image = document.createElement('img');
      image.src = result.urls.small;
      const imageLink = document.createElement('a');
      imageLink.href = result.links.html;
      imageLink.target = '_blank';

      imageLink.appendChild(image);
      searchResult.appendChild(imageLink);
   })

   showMoreButton.style.display = 'block';
}

searchForm.addEventListener('submit', (e) => {
   e.preventDefault();
   page = 1;
   searchImages();
})

showMoreButton.addEventListener('click', () => {
   page++;
   searchImages();
})