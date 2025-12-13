// FOTO SLIDE
let photos = ["p1.jpg", "p2.jpg", "p3.jpg"];

// TEKS UNTUK SETIAP SLIDE
let texts = [
`Selamat ulang tahun ya sayang,maap belum bisa
kasih apa yang kamu mau,aku cuma ide aja bikinin
kamu kartu digital ini pake ide aku sendiri hehe
semoga kamu suka ya sama kartu buatan aku ini,sekali
lagi maap belum bisa kasihh apaa apaa,semoga kedepan nya
aku di kasih banyak rejeki buat bisa beliin apapun yang kamu 
mauu.


Semoga kamu suka ya.
Dan terima kasih sudah bertahan sejauh ini.`,

`Aku bersyukur banget punya kamu.
Kita udah lewat banyak banget hal—senang, sedih, bahagia,
bahkan berantem pun sering,tapi apa ujung ujung nya juga sayang-
sayangan lagi,cinta cintaan lagi,justru menurut aku di situ letak 
makna cinta tuh,mau sebesar apapun masalahnya yang di selesain itu
masalah nya bukan hubungan nya,akuu minta sama kamu sesulit apapun
jalan yang akan kita tempuh nantinya semoga kita mampu bertahan sampe
kapanpun itu harus sama sama terus.

karna itulah yang membuat hubungan ini luar biasaaaa.`,

`kamu tau gasih semenjak ketemu sama kamu tuh ngebuat aku lebih ngerasa 
bahagia banget beda banget sebelum sama kamu tuh hidup aku bener bener 
hampa bener bener gaada tujuan hidup lagi dan bener bener udah mau nyerah
tapi setelah hadirnya kamu di hidup aku,itu bener bener ngerubah banget 
kahidupan aku bener bener lebih ceria,seneng,apalagi bahagiaa ituu pastii
bahagiaa bangettt.akuu mintaa kamuu jangann tinggalinn akuu ya,akuu mauu
kitaa samaa samaa teruss sampai nanti,aku gamau liat kamu di sayang dan kamu
sayang sama cowo lainn,akuu cumaa mauu kamuu samaa akuu ajaa di sinii samaa samaa
sedihhh,senengg,sakittt,susahhh,kitaa lewatinn ituu semuaaa samaa samaa yahhh
genggamm eratt keduaa tangann kitaa buatt berjalann bersamaa menuju hal yangg
lebihhh indahh ke depan nyaaa,gaa banyakk yangg mauu akuu sampeinn samaa kamuu
cumaa inii ajaa yangg mauu sampeinn ke kamuuu,samaa samaa teruss yaaaaaaaaaaaa
karnaaa cintaa yangg sempurnaaa ituuu di perjuangkannn samaa samaaa
I LOVEEEE YOUUUU SAYANGGGGGGG.`
];

let index = 0;
let typingIndex = 0;
let speed = 50; // kecepatan animasi mengetik

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
 