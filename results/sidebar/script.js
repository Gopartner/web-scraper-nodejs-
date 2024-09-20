const tombol = document.querySelector('.menu-toggle')

tombol.addEventListener('click', function() {
  document.querySelector('.sidebar').classList.toggle('active');
});

const btnClose = document.querySelector('.btn-close')

btnClose.addEventListener('click', function() {                                             document.querySelector('.sidebar').classList.toggle('active');                        });
