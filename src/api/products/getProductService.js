
export const getProduct = async (productId) => {
    console.log(productId);
    const url = `http://127.0.0.1:8000/api/products/product/${productId}/`;
    const response = await fetch(url);
    const product = await response.json();
    if (response.ok) {
        return product;
    } else {
        throw product
    }
}