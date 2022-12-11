

export const getCompanyInfo = async () => {
    const url = 'http://127.0.0.1:8000/api/services/company-info/2/'

    const response = await fetch(url)
    const companyInfo = await response.json()
    if (response.ok) {
        return companyInfo
    } else {
        throw companyInfo
    }
}