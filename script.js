// --- 1. Navigasi Antar Layar (SPA Style) ---
function showScreen(screenId) {
    // Sembunyikan semua layar utama
    document.getElementById('start-screen').classList.replace('flex', 'hidden');
    document.getElementById('home-screen').classList.replace('block', 'hidden');
    document.getElementById('triangle-screen').classList.replace('block', 'hidden');
    document.getElementById('circle-screen').classList.replace('block', 'hidden');
    
    // Tampilkan layar target dengan class yang sesuai
    const targetScreen = document.getElementById(screenId);
    if (screenId === 'start-screen') {
        targetScreen.classList.replace('hidden', 'flex'); // Start screen pakai flex untuk pengetengahan
    } else {
        targetScreen.classList.replace('hidden', 'block'); // Layar lain pakai block standar
    }
    
    // Scroll ke atas otomatis saat ganti layar
    window.scrollTo(0, 0);
}

// --- 2. Logika Matematika SEGITIGA ---
function hitungSegitiga() {
    let a = parseFloat(document.getElementById('tri-a').value);
    let t = parseFloat(document.getElementById('tri-t').value);
    let unitA = document.getElementById('tri-unit-a').value;
    let unitT = document.getElementById('tri-unit-t').value;

    // Validasi Input
    if (isNaN(a) || isNaN(t) || a <= 0 || t <= 0) {
        alert("Harap masukkan nilai alas dan tinggi yang valid (angka positif)!");
        return;
    }

    // --- Fitur Konversi Satuan Otomatis ---
    // Kita konversi 'tinggi' mengikuti satuan 'alas' agar hitungan valid.
    let tConverted = t;
    if (unitA !== unitT) {
        // Konversi sederhana ke milimeter (mm) sebagai basis
        let t_in_mm = t;
        if (unitT === 'cm') t_in_mm = t * 10;
        if (unitT === 'm') t_in_mm = t * 1000;

        // Konversi dari mm ke satuan Alas (unitA)
        if (unitA === 'mm') tConverted = t_in_mm;
        if (unitA === 'cm') tConverted = t_in_mm / 10;
        if (unitA === 'm') tConverted = t_in_mm / 1000;
    }

    // Perhitungan Luas (Rumus benar: 1/2 * a * t)
    let luas = 0.5 * a * tConverted;
    
    // Pembulatan agar desimal tidak terlalu panjang (max 4 desimal)
    let luasFormatted = Math.round(luas * 10000) / 10000; 

    // Update Tampilan Hasil dan Proses
    let prosesText = `Proses:\nLuas = 1/2 x a x t\nLuas = 1/2 x ${a} ${unitA} x ${tConverted} ${unitA}\nLuas = ${luasFormatted}`;
    let hasilText = `Hasil:\n${luasFormatted} ${unitA}²`;

    document.getElementById('tri-process').innerText = prosesText;
    document.getElementById('tri-result').innerText = hasilText;
}

function resetSegitiga() {
    document.getElementById('tri-a').value = '';
    document.getElementById('tri-t').value = '';
    document.getElementById('tri-unit-a').value = 'cm';
    document.getElementById('tri-unit-t').value = 'cm';
    document.getElementById('tri-process').innerText = 'Proses: -';
    document.getElementById('tri-result').innerText = 'Hasil: -';
}

// --- 3. Logika Matematika LINGKARAN ---
function hitungLingkaran() {
    let r = parseFloat(document.getElementById('circ-r').value);
    let piText = document.getElementById('circ-pi').value;
    let unit = document.getElementById('circ-unit').value;

    // Validasi Input
    if (isNaN(r) || r <= 0) {
        alert("Harap masukkan nilai jari-jari yang valid (angka positif)!");
        return;
    }

    // --- Fitur Pilih Nilai Phi (π) ---
    let piVal = (piText === '22/7') ? (22/7) : 3.14;
    let piDisplay = (piText === '22/7') ? '22/7' : '3,14';

    // Perhitungan Luas (Rumus: π * r * r)
    let luas = piVal * r * r;
    let rKuadrat = Math.round(r * r * 10000) / 10000;

    // Pembulatan agar desimal tidak terlalu panjang
    let luasFormatted = Math.round(luas * 10000) / 10000; 

    // Update Tampilan Hasil dan Proses
    let prosesText = `Proses:\nLuas = π x r x r\nLuas = ${piDisplay} x ${r} x ${r}\nLuas = ${piDisplay} x ${rKuadrat}\nLuas = ${luasFormatted}`;
    let hasilText = `Hasil:\n${luasFormatted} ${unit}²`;

    document.getElementById('circ-process').innerText = prosesText;
    document.getElementById('circ-result').innerText = hasilText;
}

function resetLingkaran() {
    document.getElementById('circ-r').value = '';
    document.getElementById('circ-pi').value = '3.14';
    document.getElementById('circ-unit').value = 'cm';
    document.getElementById('circ-process').innerText = 'Proses: -';
    document.getElementById('circ-result').innerText = 'Hasil: -';
}