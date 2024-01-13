// Import telebih dahulu npm i mongodb
// Mengimpor kelas MongoClient dari modul "mongodb".
import { MongoClient } from "mongodb";

// Mendeklarasikan variabel connectionString yang akan menyimpan nilai string koneksi ke database MongoDB.
const connectionString = process.env.MONGODB_CONNECTION_STRING;

// Memastikan bahwa connectionString sudah ada value-nya
// Mengecek apakah connectionString memiliki nilai yang valid. 
// Jika tidak, program akan menghasilkan error dengan pesan yang sesuai.
if (!connectionString) {
  throw new Error("MONGODB_CONNECTION_STRING is not defined");
}

// Mendeklarasikan variabel client dengan tipe data MongoClient. 
// Variabel ini akan digunakan untuk menyimpan instance koneksi ke MongoDB.
// Tipe data dari client adalah MongoClient
let client: MongoClient;

// Fungsi ini akan mengembalikan client yang sudah terkoneksi dengan MongoDB
// Hanya boleh ada 1 instance client (Singleton)
export const getMongoClientInstance = async () => {
  if (!client) {
    client = await MongoClient.connect(connectionString);
    await client.connect();
  }

  return client;
};
