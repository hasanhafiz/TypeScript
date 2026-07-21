interface Book {
    id: number;
    title: string;
    author: string;
    category: string;
    price: number;
}

const API_URL = 'https://tsapidemo.lwhh.org/api/v1/books';
const catalogContainerElement = document.getElementById('book-catalog')!;
const errorMessageElement = document.getElementById('error-message')!;
const modalElement = document.getElementById('bookModal')!;
const modalBookDetailsElement = document.getElementById('modalBookDetails')!;

interface BootstrapModalConstructor {
    new (element: HTMLElement): {
        show(options?: unknown): void;
        hide(): void;
    };
}

interface WindowWithBootstrap extends Window {
    bootstrap?: {
        Modal: BootstrapModalConstructor;
    };
}

function showError(): void {
    catalogContainerElement.classList.add('d-none');
    errorMessageElement.classList.remove('d-none');
}

function formatPrice(price: number): string {
    return price.toFixed(2);
}

function showBookDetailsInModal(book: Book): void {
    modalBookDetailsElement.innerHTML = `
        <h4>${book.title}</h4>
        <p><strong>Author:</strong> ${book.author}</p>
        <p><strong>Category:</strong> ${book.category}</p>
        <p><strong>Price:</strong> $${formatPrice(book.price)}</p>
    `;

    const windowWithBootstrap = window as WindowWithBootstrap;
    if (windowWithBootstrap.bootstrap) {
        const modal = new windowWithBootstrap.bootstrap.Modal(modalElement);
        modal.show();
    }
}

function createBookCard(book: Book): HTMLElement {
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
    
    const bookCardDiv = cardElement.querySelector('.book-card') as HTMLElement;
    bookCardDiv.setAttribute('tabindex', '0');
    bookCardDiv.setAttribute('role', 'button');
    bookCardDiv.setAttribute('aria-label', `View details for ${book.title}`);
    bookCardDiv.addEventListener('click', () => {
        showBookDetailsInModal(book);
    });
    
    return cardElement;
}

async function fetchBooks(): Promise<void> {
    try {
        const response = await fetch(API_URL);
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const books: Book[] = await response.json();
        
        catalogContainerElement.innerHTML = '';
        
        books.forEach((book: Book) => {
            const cardElement = createBookCard(book);
            catalogContainerElement.appendChild(cardElement);
        });
    } catch (error) {
        console.error('Error fetching books:', error);
        showError();
    }
}

fetchBooks();