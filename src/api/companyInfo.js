

export const getCompanyInfo = async () => {
    const url = '/api/services/company-info/3/'

    const response = await fetch(url)
    const companyInfo = await response.json()
    if (response.ok) {
        return companyInfo
    } else {
        throw companyInfo
    }
}