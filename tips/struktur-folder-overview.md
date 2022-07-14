
<!-- from -->
<!-- https://medium.com/@deshayk/programming-101-file-structures-2e4699ac0fc2 -->
<!-- https://mitcommlab.mit.edu/broad/commkit/file-structure/ -->

# Penjelasan Umum Singkat Struktur Folder Program

Program dirancang oleh _developer_ dengan menempatkan kode program dalam folder tertentu. Hal ini berakibat pada pentingnya struktur folder dalam alur kerja developer. Dengan membuat struktur folder yang baik, _developer_ dapat bekerja dengan lebih baik lagi daripada developer yang membuat struktur folder dengan sembarangan.

## Alasan membuat struktur folder yang baik

* `1.` Program lebih mudah dipelajari
* `2.` Memudahkan orang lain untuk berinteraksi dengan _source code_
* `3.` Lebih mudah menjelaskan analisis dari suatu program
* `4.` Untuk memudahkan pengembangan program di masa yang akan datang
* `5.` Mempercepat proses _maintenance_ suatu program

## Contoh Konvensi Folder

* **`src/`** _(source)_: File dalam folder ini merupakan source code yang digunakan untuk proses build dan pengembangan program
* **`dist/`** _(distribution)_: Folder ini digunakan untuk proses _production_. Biasa disebut juga dengan folder **`build/`** atau **`public/`**.
* **`lib/`** _(library)_: Kumpulan dari file, program, routine, script, atau function yang dapat digunakan dalam kode program.
* **`bin/`** : File di dalam folder ini akan ditambahkan ke PATH ketika program diinstal.
* **`test/`** : Folder untuk melakukan proses uji coba pada program untuk memastikan program berjalan dengan semestinya
* **`assets/`** : Folder berisi file multimedia yang digunakan oleh program tersebut seperti foto, video, audio, font, dll.

Artikel ini hanya untuk referensi semata. Struktur program sebaiknya disusun sesuai dengan projek yang dikerjakan. Semangat!!!
