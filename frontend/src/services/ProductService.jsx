const mockProducts = [
    {
        id: 1,
        name: "Wireless Headphones",
        price: 59.99,
        image: "https://picsum.photos/150?random=1",
        description: "High-quality wireless headphones with noise cancellation.",
    },
    {
        id: 2,
        name: "Smart Watch",
        price: 89.99,
        image: "https://picsum.photos/150?random=2",
        description: "Stylish smart watch with fitness tracking features.",
    },
    {
        id: 3,
        name: "Gaming Mouse",
        price: 29.99,
        image: "https://picsum.photos/150?random=3",
        description: "Ergonomic gaming mouse with high DPI and RGB lights.",
    },
    {
        id: 4,
        name: "Bluetooth Speaker",
        price: 45.0,
        image: "https://picsum.photos/150?random=4",
        description: "Portable Bluetooth speaker with surround sound.",
    },
    {
        id: 5,
        name: "Keyboard Combo",
        price: 39.99,
        image: "https://picsum.photos/150?random=5",
        description: "Mechanical keyboard and mouse combo for work and play.",
    },
    {
        id: 6,
        name: "USB-C Hub",
        price: 19.99,
        image: "https://picsum.photos/150?random=6",
        description: "Multiport USB-C hub with HDMI, USB 3.0, and card reader.",
    },
];

const productService = {
    getAllProducts: async () => {
        await new Promise((res) => setTimeout(res, 1000));
        return mockProducts;
    }
};

export default productService;