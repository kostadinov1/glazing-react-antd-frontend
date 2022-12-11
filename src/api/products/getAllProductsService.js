

export const getAllProducts = async () => {
    const url = 'http://127.0.0.1:8000/api/products/all-products';
    const response = await fetch(url);
    const products = await response.json();
    if (response.ok) {
        return products;
    } else {
        throw products
    }
}