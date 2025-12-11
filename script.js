// FOTO SLIDE
let photos = ["p1.jpg", "p2.jpg", "p3.jpg"];

// TEKS UNTUK SETIAP SLIDE
let texts = [
`Maaf kalau aku belum bisa ngasih apa-apa selain
kartu yang aku buat sendiri ini.

Semoga kamu suka ya.
Dan terima kasih sudah bertahan sejauh ini.`,

`Aku bersyukur banget punya kamu.
Kita udah lewat banyak hal—senang, sedih, bahagia,
bahkan berantem pun sering.

Tapi tetap bertahan sejauh ini.
Itu yang bikin hubungan ini luar biasa.`,

`Terima kasih sudah menjadi seseorang
yang membuat dunia terasa lebih lembut.`
];

let index = 0;
let typingIndex = 0;
let speed = 35; // kecepatan animasi mengetik

// Tampilkan slide awal
document.getElementById("slidePhoto").src = photos[index];
typeWriter();

// NEXT & PREV
function nextSlide() {
    index = (index + 1) % photos.length;
    updateSlide();
}

function prevSlide() {
    index = (index - 1 + photos.length) % photos.length;
    updateSlide();
}

// UPDATE SLIDE
function updateSlide() {
    // Ganti foto
    document.getElementById("slidePhoto").src = photos[index];
    // Reset teks
    document.getElementById("slideText").innerHTML = "";
    typingIndex = 0;
    typeWriter();
}

// TYPEWRITER EFFECT
function typeWriter() {
    let text = texts[index];
    if (typingIndex < text.length) {
        document.getElementById("slideText").innerHTML += text.charAt(typingIndex);
        typingIndex++;
        setTimeout(typeWriter, speed);
    }
}
