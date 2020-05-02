const tinggiBadanSiswa = () => {
  let sakura = 150;
  let naruto = 160;
  let sasuke = 170;

  if (naruto > sakura) {
    if (naruto > sasuke) {
      console.log("Naruto adalah yang siswa tertinggi");
      console.log("Naruto = ", naruto, " cm");
      console.log("Sakura = ", sakura, " cm");
      console.log("Sasuke = ", sasuke, " cm");
    } else {
      console.log("Sasuke adalah yang siswa tertinggi ");
      console.log("Sasuke = ", sasuke, " cm");
      console.log("Naruto = ", naruto, " cm");
      console.log("Sakura = ", sakura, " cm");
    }
  } else if (naruto < sakura) {
    if (naruto > sasuke) {
      console.log("Sakura adalah yang siswa tertinggi");
      console.log("Sakura = ", sakura, " cm");
      console.log("Sasuke = ", sasuke, " cm");
      console.log("Naruto = ", naruto, " cm");
    } else {
      console.log("Sasuke adalah yang siswa tertinggi");
      console.log("Sasuke = ", sasuke, " cm");
      console.log("Sakura = ", sakura, " cm");
      console.log("Naruto = ", naruto, " cm");
    }
  } else {
    console.log("tinggi siswa semua adalah sama");
  }
}

tinggiBadanSiswa()
