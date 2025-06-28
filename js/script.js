var preload = document.getElementById("preloader");
window.addEventListener('load', function() {
  setTimeout(() => {
    preload.classList.add('hidden'); 

    setTimeout(() => {
      preload.style.display = 'none';
    }, 2000);
  }, 1000);
});
console.log("para el que este viendo esta pagina, en realidad no la extraño(o si?)");