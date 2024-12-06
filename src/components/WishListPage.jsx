import { Button, Input } from "@nextui-org/react";
import axios from "axios";
import { useState, useEffect } from "react";
import { axiosInstance } from "../lib/axios";
import { toast } from "sonner";

const WishListPage = () => {
  const [wishlistItems, setWishlistItems] = useState([]);
  const [wishlistInput, setWishlistInput] = useState("");

  const fetchWishlistItems = async () => {
    try {
      const response = await axiosInstance.get("/wishlist-items");
      // console.log(response.data);
      setWishlistItems(response.data);
    } catch (error) {
      toast.error("Server Error, Please wait for a moment!");
      // console.log(error);
    }
  };

  const addWishlist = async () => {
    try {
      await axiosInstance.post("/wishlist-items", {
        name: wishlistInput,
      });
      fetchWishlistItems();
      setWishlistInput("");
      toast.success("You Have added an item!");
    } catch (error) {
      toast.error("Server Error, Please wait for a moment!");
      // console.log(error);
    }

    // await axiosInstance.post("/wishlist-items", {
    //   name: wishlistInput,
    // });
    // if (wishlistInput.trim() !== "") {
    //    Pastikan input tidak kosong
    //   setWishlistItems([...wishlistItems, wishlistInput]);

    // }
  };

  useEffect(() => {
    fetchWishlistItems();
  }, []);

  return (
    <div className="p-4">
      <div className="flex items-center gap-4">
        <Input
          value={wishlistInput}
          onChange={(event) => {
            if (!/\d/.test(event.target.value)) {
              setWishlistInput(event.target.value);
            }
          }}
          label="Wishlist Item"
          color="secondary"
        />
        <Button onClick={addWishlist} color="primary">
          Add
        </Button>
      </div>

      <ul className="list-decimal list-inside text-center mt-4">
        {" "}
        {/* Menambahkan margin top untuk jarak */}
        {wishlistItems.map((item, index) => {
          return <li key={index}>{item.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default WishListPage;
