function myfunction(){
    alert("Kan sudah bilang jangan di klik!");
}

document.addEventListener('DOMContentLoaded', function() {
    const klikBtn = document.querySelector('.klik-btn');
    if (klikBtn) {
        klikBtn.addEventListener('click', function() {
            Swal.fire({
                title: 'Tapiii Booong! 😝',
                text: 'Makanya jangan sembarangan pencet-pencet ya! 😂',
                icon: 'success',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                background: '#fff',
                iconColor: '#2ecc71',
                customClass: {
                    popup: 'animated bounceIn'
                },
                showClass: {
                    popup: 'animate__animated animate__bounceIn'
                },
                hideClass: {
                    popup: 'animate__animated animate__bounceOut'
                }
            });
        });
    }
});
