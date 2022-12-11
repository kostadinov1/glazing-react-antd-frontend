

export const getAlbum = async (albumId) => {
    console.log(albumId);
    const url = `http://127.0.0.1:8000/api/gallery/album/${albumId}/`;
    const response = await fetch(url);
    const album = await response.json();
    if (response.ok) {
        return album;
    } else {
        throw album
    }
}