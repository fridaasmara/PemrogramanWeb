let belanja = parseInt(prompt('Masukan total belanja : '));
if (belanja > 0 && belanja < 100000) {
    document.writeln(`Anda belanja : ${belanja} <br>`);
    document.writeln(`Anda tidak mendapatkan diskon. <br>`);
    document.writeln(`Total bayar : ${belanja} <br>`);
}

else if (belanja >= 100000 && belanja <= 150000) {
    let diskon10 = belanja * 0.1;
    document.writeln(`Anda belanja : ${belanja} <br>`);
    document.writeln(`Anda mendapatkan diskon 10%. <br>`);
    document.writeln(`Total bayar : ${belanja - diskon10} <br>`);
}

else if (belanja > 150000) {
    let diskon25 = belanja * 0.25;
    document.writeln(`Anda belanja : ${belanja} <br>`);
    document.writeln(`Anda mendapatkan diskon 25%. <br>`);
    document.writeln(`Total bayar : ${belanja - diskon25} <br>`);
} else {
    document.writeln(`Anda salah memasukan angka`)
}