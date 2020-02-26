# riliv-backend-test
Teknologi yang digunakan:
- Postgre SQL + Sequelize (Object Relational Mapping)
- Node Js
- Express
- Git
- Heroku (Deployment url: https://riliv-backend-test.herokuapp.com/)

Penjelasan project:
- Untuk endpoint yang membutuhkan authorization, harus mendapatkan token terlebih dahulu sebelum menggunakan endpoint tersebut.

Cara untuk mendapatkan token:
- Masukkan url dengan endpoint api/auth ke postman
- Gunakan method post (tanpa mengisi request body)
- Tekan tombol send, otomatis akan mendapatkan token yang sudah di generate
- Inputkan token yang diperoleh dengan menggunakan berarer jwt pada header postman
- Silahkan masukkan endpoint-endpoint yang ingin di coba
Catatan: Token yang diperoleh hanya berlaku selama 2 menit, setelah 2 menit token akan expired.













