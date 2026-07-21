interface OpenLibraryDoc {
  title: string;
  author_name?: string[];
  first_publish_year?: number;
  subject?: string[];
  edition_count?: number;
}

interface OpenLibraryResponse {
  docs: OpenLibraryDoc[];
}

interface Book {
  title: string;
  author: string;
  tag: string;
  price: string;
  ref: string;
  edition: string;
}

const API_URL = 'https://openlibrary.org/search.json?q=programming&limit=6';
// const API_URL = 'https://tsapidemo.lwhh.org/api/v1/books';

const listEl = document.getElementById('bookList');
const detailEl = document.getElementById('detailCard');
const bookCountEl = document.getElementById('bookCount');

if (!listEl || !detailEl || !bookCountEl) {
  throw new Error('Required DOM elements not found');
}

const $list = listEl;
const $detail = detailEl;
const $count = bookCountEl;

function renderList(books: Book[], activeIndex: number): void {
  $list.innerHTML = books.map((b, i) => `
    <button class="book-row ${i === activeIndex ? 'active' : ''}" data-index="${i}">
      <div class="book-title">${b.title}</div>
      <div class="book-author">${b.author}</div>
    </button>
  `).join('');

  $list.querySelectorAll('.book-row').forEach((row) => {
    row.addEventListener('click', () => {
      const idx = parseInt(row.getAttribute('data-index') ?? '0', 10);
      renderList(books, idx);
      renderDetail(books, idx);
    });
  });
}

function renderDetail(books: Book[], index: number): void {
  const b = books[index];
  $detail.innerHTML = `
    <span class="badge-tag">${b.tag}</span>
    <div class="detail-title">${b.title}</div>
    <div class="detail-author">by ${b.author}</div>
    <div class="divider"></div>
    <div class="row">
      <div class="col-6">
        <div class="meta-label">Price</div>
        <div class="price-value">$${b.price}</div>
      </div>
      <div class="col-6">
        <div class="meta-label">Ref</div>
        <div class="price-value" style="font-size:1.4rem;">#${b.ref}</div>
      </div>
    </div>
    <div class="divider"></div>
    <div class="edition-details"><span>—</span>Edition details</div>
    <p class="mt-3 text-muted" style="font-size:0.95rem;">${b.edition}</p>
  `;
}

function mapDocToBook(doc: OpenLibraryDoc, index: number): Book {
  return {
    title: doc.title,
    author: doc.author_name?.[0] ?? 'Unknown Author',
    tag: doc.subject?.[0] ?? 'General',
    price: `${(20 + index * 8).toFixed(2)}`,
    ref: String(index + 1),
    edition: `First published ${doc.first_publish_year ?? 'N/A'} · ${doc.edition_count ?? 1} edition`
  };
}

async function init(): Promise<void> {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data: OpenLibraryResponse = await response.json();
    const books = data.docs.slice(0, 6).map(mapDocToBook);
    $count.textContent = String(books.length);
    renderList(books, 0);
    renderDetail(books, 0);
  } catch (error) {
    console.error('Failed to fetch books:', error);
    $detail.innerHTML = '<p class="text-muted">Failed to load catalog. Please try again later.</p>';
  }
}

init();
