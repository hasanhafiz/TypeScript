"use strict";
const API_URL = 'https://tsapidemo.lwhh.org/api/v1/books';
const catalogContainerElement = document.getElementById('book-catalog');
const errorMessageElement = document.getElementById('error-message');
const modalElement = document.getElementById('bookModal');
const modalBookDetailsElement = document.getElementById('modalBookDetails');
function showError() {
    catalogContainerElement.classList.add('d-none');
    errorMessageElement.classList.remove('d-none');
}
function formatPrice(price) {
    return price.toFixed(2);
}
function showBookDetailsInModal(book) {
    modalBookDetailsElement.innerHTML = `
        <h4>${book.title}</h4>
        <p><strong>Author:</strong> ${book.author}</p>
        <p><strong>Category:</strong> ${book.category}</p>
        <p><strong>Price:</strong> $${formatPrice(book.price)}</p>
    `;
    const windowWithBootstrap = window;
    if (windowWithBootstrap.bootstrap) {
        const modal = new windowWithBootstrap.bootstrap.Modal(modalElement);
        modal.show();
    }
}
function createBookCard(book) {
    const cardElement = document.createElement('div');
    cardElement.className = 'col-12 col-sm-6 col-md-4 col-lg-3';
    cardElement.innerHTML = `
        <div class="card book-card h-100">
            <div class="card-body">
                <h5 class="book-title">${book.title}</h5>
                <p class="book-author mb-1">by ${book.author}</p>
                <span class="book-category">${book.category}</span>
                <p class="book-price mt-2">$${formatPrice(book.price)}</p>
            </div>
        </div>
    `;
    const bookCardDiv = cardElement.querySelector('.book-card');
    bookCardDiv.setAttribute('tabindex', '0');
    bookCardDiv.setAttribute('role', 'button');
    bookCardDiv.setAttribute('aria-label', `View details for ${book.title}`);
    bookCardDiv.addEventListener('click', () => {
        showBookDetailsInModal(book);
    });
    return cardElement;
}
async function fetchBooks() {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const books = await response.json();
        catalogContainerElement.innerHTML = '';
        books.forEach((book) => {
            const cardElement = createBookCard(book);
            catalogContainerElement.appendChild(cardElement);
        });
    }
    catch (error) {
        console.error('Error fetching books:', error);
        showError();
    }
}
fetchBooks();
//# sourceMappingURL=main.js.map