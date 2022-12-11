

export  const getAllServices = async () => {
    const url = `/api/services/all-services/`
    const response = await fetch(url)
    const services = await response.json()
    if (response.ok) {
        return services
    } else {
        throw services
    }
}