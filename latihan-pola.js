// Latihan Pola 1: Segitiga //

var bintang = "*";

for (let i= 1; i < 6; i++) {
  let bintang = "";

  for (let j= 1; j < i; j++) {
    bintang += "*"
  }
  console.log(bintang);
}

// Latihan Pola 2: Persegi panjang //

var bintang = "*";

for (let i= 1; i < 5; i++) {
  let bintang = "";

  for (let j= 1; j < 9; j++) {
    bintang += "*"
  }
  console.log(bintang);
}

// Latihan Pola 3: Persegi panjang kosong //

for (let i = 1; i <= 5; i++) {
    let pola = "";

    for (let j = 1; j <= 9; j++) {
        if (i == 1 || i == 5 || j == 1 || j == 9) {
            pola += "*";
        } else {
            pola += " ";
        }
    }

    console.log(pola);
}

// Latiham  Pola 4: Segitiga sama sisi //

for (let i = 1; i <= 4; i++) {
    let pola = "";

    // Spasi sebelum angka
    for (let j = 1; j <= 4 - i; j++) {
        pola += " ";
    }

    // Angka
    for (let j = 1; j <= i; j++) {
        pola += i + " ";
    }

    console.log(pola);
}
 
// Latihan  Pola 5: Segitiga sama sisi 2 //

let angka = 1;

for (let i = 1; i <= 4; i++) {
    let pola = "";

    // Membuat spasi
    for (let j = 1; j <= 4 - i; j++) {
        pola += " ";
    }

    // Membuat angka berurutan
    for (let j = 1; j <= i; j++) {
        pola += angka + " ";
        angka++;
    }

    console.log(pola);
}

// Latihan Pola 6: Belah ketupat //

// Bagian atas
for (let i = 1; i <= 4; i++) {
    let pola = "";

    // Membuat spasi
    for (let j = 1; j <= 4 - i; j++) {
        pola += " ";
    }

    // Membuat bintang
    for (let j = 1; j <= (2 * i - 1); j++) {
        pola += "*";
    }

    console.log(pola);
}

// Bagian bawah
for (let i = 3; i >= 1; i--) {
    let pola = "";

    // Membuat spasi
    for (let j = 1; j <= 4 - i; j++) {
        pola += " ";
    }

    // Membuat bintang
    for (let j = 1; j <= (2 * i - 1); j++) {
        pola += "*";
    }

    console.log(pola);
}

// Latihan 7: Jam pasir //

// Bagian atas
for (let i = 4; i >= 1; i--) {
    let pola = "";

    // Membuat spasi
    for (let j = 1; j <= 4 - i; j++) {
        pola += " ";
    }

    // Membuat bintang
    for (let j = 1; j <= (2 * i - 1); j++) {
        pola += "*";
    }

    console.log(pola);
}

// Bagian bawah
for (let i = 2; i <= 4; i++) {
    let pola = "";

    // Membuat spasi
    for (let j = 1; j <= 4 - i; j++) {
        pola += " ";
    }

    // Membuat bintang
    for (let j = 1; j <= (2 * i - 1); j++) {
        pola += "*";
    }

    console.log(pola);
}

// Latihan Pola 8: Segitiga kosong //

for (let i = 1; i <= 5; i++) {
    let pola = "";

    // Membuat spasi di sebelah kiri
    for (let j = 1; j <= 5 - i; j++) {
        pola += " ";
    }

    // Membuat bintang dan bagian kosong
    for (let j = 1; j <= (2 * i - 1); j++) {

        if (i == 5 || j == 1 || j == (2 * i - 1)) {
            pola += "*";
        } else {
            pola += " ";
        }

    }

    console.log(pola);
}