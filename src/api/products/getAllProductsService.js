

export const getAllProducts = async () => {
    const url = '/api/products/all-products';
    const response = await fetch(url);
    const products = await response.json();
    if (response.ok) {
        return products;
    } else {
        throw products
    }
}