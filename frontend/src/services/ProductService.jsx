import apiClient from "./api.jsx";

const productService = {
    getAllProducts: async () => {
        const url = 'api/products'
        const response = await apiClient.get(url).then((response) => response.data);
        const products = response.data;
        return products;
    },
    getProductById: async (id) => {
        const url = `api/products/${id}`
        const response = await apiClient.get(url).then((response) => response.data);
        const product = response.data;
        if (!product) throw new Error("Product not found");
        return product;
    }
};

export default productService;

//
// const mockProducts = [
//     {
//         id: 1,
//         name: "Wireless Headphones",
//         price: 59.99,
//         image: "https://picsum.photos/150?random=1",
//         description: "High-quality wireless headphones with noise cancellation.",
//         category: "Audio",
//         brand: "SoundMagic",
//         rating: 4.6,
//         stock: 15
//     },
//     {
//         id: 2,
//         name: "Smart Watch",
//         price: 89.99,
//         image: "https://picsum.photos/150?random=2",
//         description: "Stylish smart watch with fitness tracking features.",
//         category: "Wearable",
//         brand: "WristTech",
//         rating: 4.2,
//         stock: 10
//     },
//     {
//         id: 3,
//         name: "Gaming Mouse",
//         price: 29.99,
//         image: "https://picsum.photos/150?random=3",
//         description: "Ergonomic gaming mouse with high DPI and RGB lighting.",
//         category: "Accessories",
//         brand: "ClickPro",
//         rating: 4.4,
//         stock: 25
//     },
//     {
//         id: 4,
//         name: "Bluetooth Speaker",
//         price: 45.99,
//         image: "https://picsum.photos/150?random=4",
//         description: "Portable Bluetooth speaker with deep bass and long battery life.",
//         category: "Audio",
//         brand: "BassBoom",
//         rating: 4.5,
//         stock: 12
//     },
//     {
//         id: 5,
//         name: "Laptop Backpack",
//         price: 39.99,
//         image: "https://picsum.photos/150?random=5",
//         description: "Durable and water-resistant laptop backpack with USB charging port.",
//         category: "Bags",
//         brand: "UrbanPack",
//         rating: 4.3,
//         stock: 30
//     },
//     {
//         id: 6,
//         name: "Fitness Tracker",
//         price: 49.99,
//         image: "https://picsum.photos/150?random=6",
//         description: "Advanced fitness tracker with heart rate monitoring and step counter.",
//         category: "Wearable",
//         brand: "FitPulse",
//         rating: 4.0,
//         stock: 20
//     },
//     {
//         id: 7,
//         name: "USB-C Hub",
//         price: 24.99,
//         image: "https://picsum.photos/150?random=7",
//         description: "7-in-1 USB-C hub with HDMI, USB 3.0, and SD card slots.",
//         category: "Accessories",
//         brand: "PortX",
//         rating: 4.1,
//         stock: 40
//     },
//     {
//         id: 8,
//         name: "Noise Cancelling Earbuds",
//         price: 69.99,
//         image: "https://picsum.photos/150?random=8",
//         description: "Compact earbuds with active noise cancellation and clear sound.",
//         category: "Audio",
//         brand: "ZenSound",
//         rating: 4.7,
//         stock: 18
//     },
//     {
//         id: 9,
//         name: "Mechanical Keyboard",
//         price: 79.99,
//         image: "https://picsum.photos/150?random=9",
//         description: "RGB backlit mechanical keyboard for fast and accurate typing.",
//         category: "Accessories",
//         brand: "KeyChronix",
//         rating: 4.5,
//         stock: 22
//     },
//     {
//         id: 10,
//         name: "Wireless Charger Pad",
//         price: 19.99,
//         image: "https://picsum.photos/150?random=10",
//         description: "Fast wireless charging pad compatible with all Qi-enabled devices.",
//         category: "Accessories",
//         brand: "ChargeMate",
//         rating: 4.3,
//         stock: 50
//     },
//     {
//         id: 11,
//         name: "Mini Projector",
//         price: 129.99,
//         image: "https://picsum.photos/150?random=11",
//         description: "Compact HD mini projector suitable for home or travel use.",
//         category: "Electronics",
//         brand: "VisualBeam",
//         rating: 4.4,
//         stock: 8
//     },
//     {
//         id: 12,
//         name: "VR Headset",
//         price: 199.99,
//         image: "https://picsum.photos/150?random=12",
//         description: "Immersive VR headset compatible with mobile and desktop.",
//         category: "Gaming",
//         brand: "ImmersiTech",
//         rating: 4.6,
//         stock: 6
//     },
//     {
//         id: 13,
//         name: "Portable SSD 1TB",
//         price: 109.99,
//         image: "https://picsum.photos/150?random=13",
//         description: "High-speed portable SSD for reliable data transfer.",
//         category: "Storage",
//         brand: "DataSwift",
//         rating: 4.7,
//         stock: 14
//     },
//     {
//         id: 14,
//         name: "Digital Photo Frame",
//         price: 64.99,
//         image: "https://picsum.photos/150?random=14",
//         description: "Wi-Fi enabled digital photo frame with auto-rotate display.",
//         category: "Home",
//         brand: "FrameIt",
//         rating: 4.2,
//         stock: 17
//     },
//     {
//         id: 15,
//         name: "4K Action Camera",
//         price: 149.99,
//         image: "https://picsum.photos/150?random=15",
//         description: "Rugged 4K action camera with waterproof casing and remote control.",
//         category: "Photography",
//         brand: "GoXtreme",
//         rating: 4.5,
//         stock: 9
//     }
// ];
