// Export to CSV
function exportToCSV() {
    let csv = 'Title,Author,ISBN,Price,Quantity\n';
    inventory.forEach(book => {
        csv += `"${book.title}","${book.author}","${book.isbn}",${book.price},${book.quantity}\n`;
    });

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'inventory.csv';
    a.click();
}

// Search functionality
function searchInventory(query) {
    const searchResults = inventory.filter(book => 
        book.title.toLowerCase().includes(query.toLowerCase()) ||
        book.author.toLowerCase().includes(query.toLowerCase()) ||
        book.isbn.includes(query)
    );
    displayInventory(searchResults);
}

// Sort inventory
function sortInventory(field) {
    inventory.sort((a, b) => {
        if (a[field] < b[field]) return -1;
        if (a[field] > b[field]) return 1;
        return 0;
    });
    displayInventory();
}
