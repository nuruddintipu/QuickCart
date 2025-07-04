import {useDispatch, useSelector} from "react-redux";
import { addToCart, removeFromCart, clearCart, decreaseItem } from "../features/cartSlice";
import {useState} from "react";
import {toast} from "react-toastify";

export const useCart = () => {
    const dispatch = useDispatch();
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [showCheckout, setShowCheckout] = useState(false);
    const toggleCheckout = () => setShowCheckout((prev) => !prev);

    const { cartItems, totalAmount } = useSelector((state) => state.cart);

    const cartItemCount = cartItems.length;

    const toggleCart = () => setIsCartOpen((prev) => !prev);

    const add = (product) => {
        dispatch(addToCart(product));
        toast.success("Item Added to Cart!");
    };

    const remove = (product) => {
        dispatch(removeFromCart(product));
        toast.info('Item removed from cart.');
    };

    const increase = (product) => {
        add(product);
    };

    const decrease = (item) => {
        const foundItem = cartItems.find((p) => p.id === item.id);
        if (foundItem?.quantity === 1) toast.info("Item removed from cart.");

        dispatch(decreaseItem(item));
    };

    const clear = () => {
        dispatch(clearCart());
        toast.success("Items cleared from cart");
    };

    return { cartItems, cartItemCount, isCartOpen, toggleCart, setIsCartOpen, totalAmount, add, remove, increase, decrease, clear, showCheckout, toggleCheckout};
};