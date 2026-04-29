const books = [
    { title: "Computer Organization", author: "Carl Hamacher", cover: "https://m.media-amazon.com/images/I/516m77pZ5rL.jpg", available: true },
    { title: "Data Structures in C", author: "Reema Thareja", cover: "https://m.media-amazon.com/images/I/51Y7W6+mclL.jpg", available: false },
    { title: "React Native Mobile App", author: "C. Freeman", cover: "https://m.media-amazon.com/images/I/81S7vGTVrAL.jpg", available: true },
    { title: "Python for Cybersecurity", author: "Howard Poston", cover: "https://m.media-amazon.com/images/I/71u9D7YFq+L.jpg", available: true }
];

function displayBooks(data = books) {
    const tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = '';

    data.forEach((book) => {
        // Find original index for toggle functionality
        const originalIndex = books.findIndex(b => b.title === book.title);
        const statusClass = book.available ? 'available' : 'issued';
        const statusText = book.available ? 'Available' : 'Out of Stock';
        
        tableBody.innerHTML += `
            <tr>
                <td><img src="${book.cover}" class="cover-img"></td>
                <td><strong>${book.title}</strong></td>
                <td>${book.author}</td>
                <td><span class="status-badge ${statusClass}">${statusText}</span></td>
                <td>
                    <button onclick="toggleStatus(${originalIndex})" 
                            style="background:${book.available ? '#27ae60' : '#3498db'}; 
                            color:white; border:none; padding:8px 15px; border-radius:5px; cursor:pointer;">
                        ${book.available ? 'Borrow' : 'Return'}
                    </button>
                </td>
            </tr>
        `;
    });
}

function filterBooks() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const filtered = books.filter(book => 
        book.title.toLowerCase().includes(searchTerm) || 
        book.author.toLowerCase().includes(searchTerm)
    );
    displayBooks(filtered);
}

function toggleStatus(index) {
    books[index].available = !books[index].available;
    displayBooks();
}

// Load initial data
displayBooks();