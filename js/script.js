function hitungLuasPersegi() {
    var sisi = document.getElementById("sisi").value;
    var luas = sisi * sisi;
    document.getElementById("hasil").innerHTML = "Luas Persegi: " + luas + " cm<sup>2</sup> (L: S x S)";
   }
   
   function hitungKelilingPersegi() {
    var sisi = document.getElementById("sisi").value;
    var keliling = 4 * parseFloat(sisi);
    document.getElementById("hasil").innerHTML = "Keliling Persegi: " + keliling + " cm (K: 4 x S)";
   }
   
   function resetForm() {
    document.getElementById("sisi").value = "";
    document.getElementById("hasil").innerHTML = "";
   }