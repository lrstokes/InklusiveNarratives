<script>
document.addEventListener('DOMContentLoaded', () => {
  const addToCollectionButtons = document.querySelectorAll('.add-to-collection');
  const personalCollection = document.querySelector('.personal-collection ul');
  const suggestionForm = document.querySelector('.suggestion form');
  const searchInput = document.querySelector('.suggestion input');
  const featuredBooks = Array.from(document.querySelectorAll('.book'));

  addToCollectionButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
      const book = e.target.closest('.book');
      const bookTitle = book.querySelector('h3').innerText;
      const listItem = document.createElement('li');
      listItem.innerText = bookTitle;
      personalCollection.appendChild(listItem);
    });
  });

  suggestionForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const searchTerm = searchInput.value.toLowerCase();
    searchInput.value = '';

    featuredBooks.forEach((book) => {
      const bookTitle = book.querySelector('h3').innerText.toLowerCase();
      if (bookTitle.includes(searchTerm)) {
        book.style.display = 'flex';
      } else {
        book.style.display = 'none';
      }
    });
  });
});
<script>
