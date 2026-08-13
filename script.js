// ========================================
// BOOKSHELF — Library Management System
// ========================================

// ===== STATE =====
let books = JSON.parse(localStorage.getItem('bookshelf')) || [
  { id: 1, title: "Atomic Habits",           author: "James Clear",      category: "non-fiction", status: "read"    },
  { id: 2, title: "Dune",                    author: "Frank Herbert",    category: "fiction",     status: "reading" },
  { id: 3, title: "A Brief History of Time", author: "Stephen Hawking", category: "science",     status: "unread"  }
];

let currentFilter = "all";

// ===== PERSISTENCE =====
function saveBooks() {
  localStorage.setItem('bookshelf', JSON.stringify(books));
}

// ===== CLEAR ALL BOOKS =====
function clearLibrary() {
  if (confirm('Are you sure you want to clear your entire library? This cannot be undone.')) {
    books = [];
    saveBooks();
    renderBooks();
  }
}

// ===== HELPERS =====
function formatStatus(status) {
  const labels = {
    read:    '✅ Read',
    unread:  '📌 To Read',
    reading: '📖 Reading'
  };
  return labels[status] || status;
}

function getSearchTerm() {
  return document.getElementById('searchInput').value.toLowerCase();
}

function filterBooks() {
  const searchTerm = getSearchTerm();
  return books.filter(book => {
    const matchFilter = currentFilter === 'all' || book.category === currentFilter;
    const matchSearch = book.title.toLowerCase().includes(searchTerm) ||
                        book.author.toLowerCase().includes(searchTerm);
    return matchFilter && matchSearch;
  });
}

// ===== RENDER =====
function renderBooks() {
  const grid    = document.getElementById('bookGrid');
  const filtered = filterBooks();

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="empty-state">
        <p>📭 No books found. Try a different filter or add a new book!</p>
      </div>`;
  } else {
    grid.innerHTML = filtered.map(book => `
      <div class="book-card" data-id="${book.id}">
        <h3>${book.title}</h3>
        <p>by ${book.author}</p>
        <span class="badge ${book.status}">${formatStatus(book.status)}</span>
        <span class="category-tag">${book.category}</span>
        <div class="card-actions">
          <button class="btn-toggle" onclick="toggleStatus(${book.id})">Toggle Status</button>
          <button class="btn-delete"  onclick="deleteBook(${book.id})">Remove</button>
        </div>
      </div>
    `).join('');
  }

  updateStats();
}

// ===== STATS =====
function updateStats() {
  const total    = books.length;
  const read     = books.filter(b => b.status === 'read').length;
  const unread   = books.filter(b => b.status === 'unread').length;
  const reading  = books.filter(b => b.status === 'reading').length;
  const percent  = total > 0 ? Math.round((read / total) * 100) : 0;

  document.getElementById('totalBooks').textContent   = total;
  document.getElementById('readBooks').textContent    = read;
  document.getElementById('unreadBooks').textContent  = unread;
  document.getElementById('readingBooks').textContent = reading;
  document.getElementById('percentRead').textContent  = percent + '%';
}

// ===== BOOK ACTIONS =====
function toggleStatus(id) {
  const book  = books.find(b => b.id === id);
  if (!book) return;
  const cycle = ['unread', 'reading', 'read'];
  book.status = cycle[(cycle.indexOf(book.status) + 1) % cycle.length];
  saveBooks();
  renderBooks();
}

function deleteBook(id) {
  books = books.filter(b => b.id !== id);
  saveBooks();
  renderBooks();
}

function addBook() {
  const title    = document.getElementById('bookTitle').value.trim();
  const author   = document.getElementById('bookAuthor').value.trim();
  const category = document.getElementById('bookCategory').value;
  const status   = document.getElementById('bookStatus').value;

  if (!title || !author) {
    alert('Please fill in the title and author fields.');
    return;
  }

  books.push({ id: Date.now(), title, author, category, status });
  saveBooks();
  renderBooks();
  closeModal();
  clearModalInputs();
}

function clearModalInputs() {
  document.getElementById('bookTitle').value  = '';
  document.getElementById('bookAuthor').value = '';
}

// ===== MODAL =====
function openModal()  { document.getElementById('modalOverlay').classList.add('active');    }
function closeModal() { document.getElementById('modalOverlay').classList.remove('active'); }

// ===== EVENT LISTENERS =====
document.getElementById('openModal').addEventListener('click', openModal);
document.getElementById('closeModal').addEventListener('click', closeModal);
document.getElementById('saveBook').addEventListener('click', addBook);

document.getElementById('modalOverlay').addEventListener('click', (e) => {
  if (e.target.id === 'modalOverlay') closeModal();
});

document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentFilter = btn.dataset.filter;
    renderBooks();
  });
});

document.getElementById('searchInput').addEventListener('input', renderBooks);

// ===== INIT =====
renderBooks();