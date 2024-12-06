import { Button, Input } from "@nextui-org/react"; // Mengimpor komponen Button dan Input dari library NextUI
import { useState } from "react"; // Mengimpor hook useState dari React

const ControlledUncontrolled = () => {
  // Mendefinisikan komponen fungsional ControlledUncontrolled
  const [wishlistInput, setWishlistInput] = useState(""); // Menginisialisasi state wishlistInput sebagai string kosong
  const [wishlistItems, setWishlistItems] = useState([]); // Menginisialisasi state wishlistItems sebagai array kosong

  const addWishlist = () => {
    // Mendefinisikan fungsi untuk menambahkan item ke wishlist
    setWishlistItems([...wishlistItems, wishlistInput]); // Menambahkan nilai wishlistInput ke dalam array wishlistItems
    setWishlistInput(""); // Mengosongkan input setelah menambahkan item
  };

  return (
    // Mengembalikan elemen JSX untuk dirender
    <>
      <div className="flex items-center p-4 gap-4">
        {" "}
        {/* Kontainer untuk input dan tombol */}
        <Input
          value={wishlistInput} // Mengikat nilai input ke state wishlistInput
          onChange={(event) => {
            // Menangani perubahan pada input
            if (!event.target.value.endsWith("1")) {
              // Memeriksa apakah input tidak diakhiri dengan '1'
              setWishlistInput(event.target.value); // Mengupdate state wishlistInput dengan nilai baru
            }
          }}
          label="Wishlist Item" // Label untuk input
          color="secondary" // Warna untuk input
        />{" "}
        {/** Input untuk item wishlist */}
        <Button onClick={addWishlist} color="primary">
          {" "}
          {/* Tombol untuk menambahkan item ke wishlist */}
          Add
        </Button>
      </div>

      {/* <p className="text-center">{wishlistInput}</p> */}
      <ul className="list-decimal list-inside text-center">
        {" "}
        {/* Daftar untuk menampilkan item wishlist */}
        {wishlistItems.map((item, index) => {
          // Mengiterasi wishlistItems untuk membuat elemen list
          return <li key={index}>{item}</li>; // Mengembalikan elemen list dengan key unik
        })}
      </ul>
    </>
  );
};

export default ControlledUncontrolled; // Mengekspor komponen ControlledUncontrolled agar dapat digunakan di tempat lain
