// Load navigation dynamically
fetch('/navigation.html')
    .then(res => res.text())
    .then(text => {
        document.getElementById('nav-placeholder').innerHTML = text;
        setActivePage();
    });

function setActivePage() {
    const currentPage = location.pathname.split('/').pop();
    document.querySelectorAll('nav a').forEach(link => {
        if (link.getAttribute('href').includes(currentPage)) {
            link.classList.add('active');
        }
    });
}