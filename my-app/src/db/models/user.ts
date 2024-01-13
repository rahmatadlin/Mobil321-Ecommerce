// Mengimpor beberapa modul yang diperlukan, termasuk Db dan ObjectId dari modul "mongodb",
import { Db, ObjectId } from "mongodb";
// Impor Fungsi getMongoClientInstance dari file "../config",
import { getMongoClientInstance } from "../config";
// Impor Fungsi hashText dari file "../utils/hash".
import { hashText } from "../utils/hash";

// Mendefinisikan tipe data UserModel yang merepresentasikan struktur data untuk model pengguna.
export type UserModel = {
  _id: ObjectId;
  name: string;
  username: string;
  email: string;
  password: string;
};

// Mendefinisikan type dari UserModelCreateInput yang tidak menggunakan _id
export type UserModelCreateInput = Omit<UserModel, "_id">;

// constant value
// Mendefinisikan konstanta DATABASE_NAME yang menyimpan nama database MongoDB (dibaca dari variabel lingkungan MONGODB_DB_NAME) atau menggunakan nilai default "test".
const DATABASE_NAME = process.env.MONGODB_DB_NAME || "test";
// Mendefinisikan konstanta COLLECTION_USER yang menyimpan nama koleksi pengguna di database.
const COLLECTION_USER = "Users";

// MODEL CRUD

// Mendefinisikan fungsi getDb yang mengembalikan instance koneksi ke database MongoDB (Db).
// Fungsi ini menggunakan getMongoClientInstance untuk mendapatkan instance MongoClient
// Kemudian mengambil database dengan nama yang telah ditentukan.
export const getDb = async () => {
  const client = await getMongoClientInstance();
  const db: Db = client.db(DATABASE_NAME);

  return db;
};

// Mendefinisikan fungsi getUsers yang mengambil semua pengguna dari koleksi pengguna dalam database,
// Menghilangkan kolom password
// Mengembalikan array dari objek UserModel.
export const getUsers = async () => {
  const db = await getDb();

  // Di sini kita akan mendefinisikan type dari users
  // Karena kembalian dari toArray() adalah array `WithId<Document>[]`
  // kita akan type casting menjadi UserModel[] dengan menggunakan "as"
  const users = (await db
    .collection(COLLECTION_USER)
    .find()
    // Exclude kolom password
    // (For the sake of security...)
    .project({ password: 0 })
    .toArray()) as UserModel[];

  return users;
};

// Mendefinisikan fungsi createUser yang membuat pengguna baru,
// Meng-hash password sebelum menyimpannya dalam database
// Mengembalikan hasil dari operasi penambahan satu dokumen ke dalam koleksi.
export const createUser = async (user: UserModelCreateInput) => {
  // Kita akan memodifikasi user yang baru
  // karena butuh untuk meng-hash password
  // (For the sake of security...)
  const modifiedUser: UserModelCreateInput = {
    ...user,
    password: hashText(user.password),
  };
  console.log(modifiedUser, "<<< user");

  const db = await getDb();
  const result = await db.collection(COLLECTION_USER).insertOne(modifiedUser);
  // console.log(result, "<<< hasil");

  return result;
};



// Mendefinisikan fungsi getUserById yang mengambil pengguna berdasarkan ID yang diberikan
// Menghilangkan kolom password
// Mengembalikan objek UserModel.
export const getUserById = async (id: string) => {
  const db = await getDb();
  const objectId = new ObjectId(id);

  const user = (await db.collection(COLLECTION_USER).findOne(
    { _id: objectId },
    {
      projection: {
        // Exclude kolom password
        // (For the sake of security...)
        password: 0,
      },
    }
  )) as UserModel;

  return user;
};

// Mendefinisikan fungsi getUserByEmail yang mengambil user berdasarkan alamat email yang diberikan
// Mengembalikan objek UserModel
export const getUserByEmail = async (email: string) => {
  const db = await getDb();
  const user = (await db
    .collection(COLLECTION_USER)
    .findOne({ email: email })) as UserModel;

  return user;
};
