

export  const getAllServices = async () => {
    const url = `http://127.0.0.1:8000/api/services/all-services/`
    const response = await fetch(url)
    const services = await response.json()
    if (response.ok) {
        return services
    } else {
        throw services
    }
}