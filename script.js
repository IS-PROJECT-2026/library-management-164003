// ===== DATA =====
let books = JSON.parse(localStorage.getItem('bookshelf')) || [
  { id: 1, title: "Atomic Habits", author: "James Clear", category: "non-fiction", status: "read" },
  { id: 2, title: "Dune", author: "Frank Herbert", category: "fiction", status: "reading" },
  { id: 3, title: "A Brief History of Time", author: "Stephen Hawking", category: "science", status: "unread" }
];

let currentFilter = "all";

// ===== SAVE TO LOCALSTORAGE =====
function saveBooks() {
  localStorage.setItem('bookshelf', JSON.stringify(books));
}

// ===== FORMAT STATUS LABEL =====
function formatStatus(status) {
  const labels = { 
    read: '✅ Read', 
    unread: '📌 To Read', 
    reading: '📖 Reading' 
  };
  return labels[status] || status;
}

// ===== UPDATE STATS =====
function updateStats() {
  document.getElementById('totalBooks').textContent = books.length;
  document.getElementById('readBooks').textContent = books.filter(b => b.status === 'read').length;
  document.getElementById('unreadBooks').textContent = books.filter(b => b.status === 'unread').length;
}

// ===== TOGGLE READ STATUS =====
function toggleStatus(id) {
  const book = books.find(b => b.id === id);
  if (!book) return;
  const cycle = ['unread', 'reading', 'read'];
  const next = cycle[(cycle.indexOf(book.status) + 1) % cycle.length];
  book.status = next;
  saveBooks();
  renderBooks();
}

// ===== DELETE BOOK =====
function deleteBook(id) {
  books = books.filter(b => b.id !== id);
  saveBooks();
  renderBooks();
}

// ===== RENDER BOOKS =====
function renderBooks() {
  const grid = document.getElementById('bookGrid');
  const searchTerm = document.getElementById('searchInput').value.toLowerCase();

  let filtered = books.filter(book => {
    const matchFilter = currentFilter === 'all' || book.category === currentFilter;
    const matchSearch = book.title.toLowerCase().includes(searchTerm) ||
                        book.author.toLowerCase().includes(searchTerm);
    return matchFilter && matchSearch;
  });

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
          <button class="btn-delete" onclick="deleteBook(${book.id})">Remove</button>
        </div>
      </div>
    `).join('');
  }

  updateStats();
}

// ===== INITIAL RENDER =====
renderBooks();