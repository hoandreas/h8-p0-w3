function dataHandling2(input) {
    input.splice(1, 4, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro");
    console.log(input);

    var tanggal = input[3];
    var newTanggal = tanggal.split("/");
    var editBulan = tanggal.split("/");
    var newTgl = tanggal.split("/");
    // console.log(editBulan);

    switch (editBulan[1]) {
        case '01' :
            editBulan[1] = 'Januari';
            break;
        case '02' :
            editBulan[1] = 'Februari';
            break;
        case '03' :
            editBulan[1] = 'Maret';
            break;
        case '04' :
            editBulan[1] = 'April';
            break;
        case '05' :
            editBulan[1] = 'Mei';
            break;
        case '06' :
            editBulan[1] = 'Juni';
            break;
        case '07' :
            editBulan[1] = 'Juli';
            break;
        case '08' :
            editBulan[1] = 'Agustus';
            break; 
        case '09' :
            editBulan[1] = 'September';
            break;
        case '10' :
            beditBulan[1] = 'Oktober';
            break;
        case '11' :
            editBulan[1] = 'November';
            break;
        case '12' :
            editBulan[1] = 'Desember';
            break;
        default:
            console.log('Invalid month');
            break;
    }
    console.log(editBulan[1]);

    var sortTanggal = newTanggal.sort(
        function(angkaSebelum, angkaSesudah) {
            return parseInt(angkaSesudah) - parseInt(angkaSebelum);
        }
    );
    console.log(sortTanggal);
    
    var joinTanggal = newTgl.join('-');
    console.log(joinTanggal);

    var newName = input[1].slice(0, 15);
    console.log(newName);
}



var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling2(input);