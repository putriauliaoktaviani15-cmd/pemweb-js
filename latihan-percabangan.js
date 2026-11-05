console.log("Latihan Percabangan 1");

function cekKelulusan(nilai) {
    if (nilai >= 75) {
        console.log("Lulus");
    } else {
        console.log("Remedial");
    }
}

cekKelulusan(90);
cekKelulusan(75);
cekKelulusan(60);

console.log("Latihan Percabangan 2");

function cekRole (kodePeran) {
    switch (kodePeran) {
        case "A":
            console.log("Admin");
            break;

        case "U":
            console.log("User");
            break;

        default:
            console.log("Guest");
    }
}

cekRole("A");
cekRole("U");
cekRole("P")
