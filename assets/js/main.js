document.addEventListener('DOMContentLoaded', function () {
    const isDark = localStorage.getItem('darkTheme') === 'true';
    document.getElementById('checkbox').checked = isDark;
    updateBodyClass(isDark);

    document.getElementById('checkbox').addEventListener('change', function() {
        localStorage.setItem('darkTheme', this.checked);
        updateBodyClass(this.checked);
    });
});

function updateBodyClass(isDark) {
    if (isDark) {
        document.body.classList.add('dark-theme');
    } else {
        document.body.classList.remove('dark-theme');
    }
}