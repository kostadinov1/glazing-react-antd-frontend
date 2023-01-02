
export const getProduct = async (productId) => {
    console.log(productId);
    const url = `/api/products/product/${productId}/`;
    const response = await fetch(url);
    const product = await response.json();
    if (response.ok) {
        return product;
    } else {
        throw product
    }
}