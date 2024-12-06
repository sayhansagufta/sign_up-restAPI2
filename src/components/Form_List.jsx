import { Button, Input } from "@nextui-org/react"; // Mengimpor komponen Button dan Input dari library NextUI
import { useRef, useState } from "react"; // Mengimpor hook useRef dan useState dari React

const FormList = () => {
  // Mendefinisikan komponen fungsional FormList
  const inputRef = useRef(); // Membuat referensi untuk elemen input agar dapat diakses langsung
  const [wishlistItems, setWishlistItems] = useState([]); // Menginisialisasi state wishlistItems sebagai array kosong

  const addWishlist = () => {
    // Mendefinisikan fungsi untuk menambahkan item ke wishlist
    const wishlistInputValue = inputRef.current.value; // Mengambil nilai dari input menggunakan referensi
    const oldArray = [...wishlistItems]; // Membuat salinan dari wishlistItems yang ada
    oldArray.push(wishlistInputValue); // Menambahkan nilai input ke array salinan
    setWishlistItems(oldArray); // Mengupdate state wishlistItems dengan array baru
    // setWishlistItems([...wishlistItems, wishlistInputValue]); cara ke 1
    // setWishlistItem(wishlistInputValue); // untuk mendapatkan hasil yang di input user
  };
  return (
    <>
      <div className="flex items-center p-4 gap-4">
        {" "}
        {/* container untuk input dan tombol */}
        <Input ref={inputRef} label="Wishlist Item" color="secondary" /> {/* Input untuk item wishList */}
        <Button onClick={addWishlist} color="primary">
          Add
        </Button>{" "}
        {/* tombol untuk menambahkan item ke wishList */}
      </div>

      {/* <p className="text-center font-semibold text-2xl">{wishlistItem}</p> */}
      <ul className="list-decimal list-inside text-center">
        {" "}
        {/* daftar untuk menampilkan item wishlist */}
        {wishlistItems.map((item, index) => {
          // mengiterasi wishlistItems untuk membuat elemen list
          return <li key={index}>{item}</li>; // mengembalikan elemen list dengan key unik
        })}
      </ul>
    </>
  );
};

export default FormList; // mengkespor komponen FormList agar dapat digunakan kembali di tempat lain
