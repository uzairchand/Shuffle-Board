const items = [
    "JavaScript Basics",
    "Learning HTML and CSS",
    "Introduction to Web Development",
    "Advanced JavaScript Techniques",
    "Understanding JavaScript Arrays",
    "Building a Simple Search Engine",
    "Creating Responsive Websites",
    "Mastering Front-End Development",
    "JavaScript String Methods Explained"
];
function filterItems(searchTerm) {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    return items.filter(item => item.toLowerCase().includes(lowerCaseSearchTerm));
}
// Function to display filtered results
function displayResults(results) {
    const resultsList = document.getElementById('results');
    resultsList.innerHTML = '';

    results.forEach(result => {
        const li = document.createElement('li');
        li.textContent = result;
        resultsList.appendChild(li);
    });
}
document.getElementById('searchInput').addEventListener('input', (e) => {
    const searchTerm = e.target.value;
    const filteredItems = filterItems(searchTerm);
    displayResults(filteredItems);
});