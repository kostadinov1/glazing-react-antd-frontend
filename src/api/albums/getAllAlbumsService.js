

export const getAllAlbums = async () => {
    const url = 'http://127.0.0.1:8000/api/gallery/albums/';
    const response = await fetch(url, {
        method: 'GET',
        headers: {'content-type': 'application/json',
                    }
    });
    const albums = await response.json();
    if (response.ok) {
        return albums;
    } else {
        throw albums
    }
}
