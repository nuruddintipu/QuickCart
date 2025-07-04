const orderService =  {
    placeOrder: () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve("Order placed successfully!");
            }, 1000);
        });
    }
}

export default orderService;