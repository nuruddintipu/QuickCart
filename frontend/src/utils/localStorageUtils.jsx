const CART_KEY = "quickcart-cart";

export const saveCartToLocalStorage = (cartState) => {
    localStorage.setItem(CART_KEY, JSON.stringify(cartState));
};

export const loadCartFromLocalStorage = () => {
    const saved = localStorage.getItem(CART_KEY);
    const parsed = saved ? JSON.parse(saved) : null;

    return parsed && parsed.cartItems && Array.isArray(parsed.cartItems)
        ? parsed
        : {
            cartItems: [],
            totalItems: 0,
            totalAmount: 0,
        };
};


export const clearCartFromLocalStorage = () => {
    localStorage.removeItem(CART_KEY);
}