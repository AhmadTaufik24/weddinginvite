// JavaScript for handling transitions and slideshow

// Handle transition from page 1 to page 2
function openInvitation() {
    window.location.href = 'invitation.html';
}

// Slideshow functionality
let slideIndex = 0;

function showSlides() {
    const slides = document.querySelectorAll('.slide');
    slides.forEach((slide, index) => {
        slide.style.opacity = index === slideIndex ? 1 : 0;
    });
    slideIndex = (slideIndex + 1) % slides.length;
    setTimeout(showSlides, 3000); // Change slide every 3 seconds
}

if (document.body.classList.contains('page-2')) {
    showSlides();
}

// JavaScript for Gallery Modal
function openModal(src, alt) {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const captionText = document.getElementById('caption');
    modal.style.display = 'block';
    modalImg.src = src;
    captionText.innerHTML = alt;
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

// Add event listeners to gallery images
document.querySelectorAll('.gallery-item img').forEach(img => {
    img.addEventListener('click', function() {
        openModal(this.src, this.alt);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('rsvp-form');
    const messagesContainer = document.getElementById('messages-container');
    const loadMoreButton = document.getElementById('load-more');
    let messageCount = 0;
    const maxMessages = 10; // Jumlah pesan yang ditampilkan sebelum tombol "Lihat Lebih Banyak" muncul

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Ambil data dari formulir
        const name = document.getElementById('name').value;
        const attendance = document.getElementById('attendance').value;
        const message = document.getElementById('message').value;

        // Buat elemen pesan baru
        const messageItem = document.createElement('div');
        messageItem.className = 'message-item';
        messageItem.innerHTML = `<strong>${name}</strong> (${attendance}):<br>${message}`;
        messagesContainer.appendChild(messageItem);

        // Bersihkan formulir
        form.reset();

        // Tampilkan tombol "Lihat Lebih Banyak" jika diperlukan
        messageCount++;
        if (messageCount > maxMessages) {
            loadMoreButton.style.display = 'block';
        }
    });

    loadMoreButton.addEventListener('click', function() {
        const allMessages = messagesContainer.querySelectorAll('.message-item');
        allMessages.forEach((item, index) => {
            if (index >= maxMessages) {
                item.style.display = 'block';
            }
        });
        loadMoreButton.style.display = 'none';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const giftBtn = document.getElementById('gift-btn');
    const giftForm = document.getElementById('gift-form');
    const paymentMethodSelect = document.getElementById('payment-method');
    const paymentInfoDiv = document.getElementById('payment-info');

    // Toggle gift form display on button click
    giftBtn.addEventListener('click', function() {
        giftForm.style.display = giftForm.style.display === 'none' ? 'block' : 'none';
    });

    // Update payment info based on selected payment method
    paymentMethodSelect.addEventListener('change', function() {
        const method = paymentMethodSelect.value;
        let paymentInfo = '';

        switch(method) {
            case 'qris':
                paymentInfo = '<img src="qris.png" alt="QRIS" style="width: 100%;">';
                break;
            case 'bca':
                paymentInfo = '<p>Transfer BCA: 123-456-789</p>';
                break;
            case 'bri':
                paymentInfo = '<p>Transfer BRI: 987-654-321</p>';
                break;
            case 'shopee':
                paymentInfo = '<p>Shopee: 1234567890</p>';
                break;
            default:
                paymentInfo = '';
        }

        paymentInfoDiv.innerHTML = paymentInfo;
    });

    // Handle form submission
    document.getElementById('gift-form-content').addEventListener('submit', function(event) {
        event.preventDefault();

        // Simulate redirect to payment gateway
        alert('Silakan lanjutkan pembayaran melalui metode yang dipilih. Terima kasih!');

        // Optionally, handle sending the form data to a server or email
        // Example: Use Fetch API to send data to a server-side script
        // const formData = new FormData(event.target);
        // fetch('/path/to/server', { method: 'POST', body: formData });

        // Clear form after submission
        event.target.reset();
    });
});

