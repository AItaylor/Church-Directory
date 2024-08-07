document.addEventListener('DOMContentLoaded', function() {
    function includeHTML(id, file) {
        return fetch(file)
            .then(response => response.text())
            .then(data => {
                document.getElementById(id).innerHTML = data;
            });
    }
    
    function setCurrentYear() {
        const yearSpan = document.getElementById('currentYear');
        if (yearSpan) {
            yearSpan.textContent = new Date().getFullYear();
        }
    }

    // Include all your HTML files
    Promise.all([
        // includeHTML('header', 'header.html'),
        includeHTML('nav', 'nav.html'),
        // includeHTML('order-of-service', 'order-of-service.html'),
        // includeHTML('hymns', 'hymns.html'),
        // includeHTML('notices', 'notices.html'),
        includeHTML('footer', 'footer.html')
    ]).then(() => {
        // After all includes are loaded, set the current year
        setCurrentYear();
    }).catch(error => {
        console.error('Error loading includes:', error);
    });
});