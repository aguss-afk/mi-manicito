
fetch('header.html')
  	.then(res => res.text())
    .then(data => {
    	document.getElementById('navbar').innerHTML = data;
    });
window.addEventListener('scroll', function() {
    const header = document.getElementById('nav');
    const scrollPosition = window.scrollY;

    if (scrollPosition > 100) {
        header.classList.add('transparent');
    } else {
        header.classList.remove('transparent');
    }
});
