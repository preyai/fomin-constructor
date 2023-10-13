const API = 'http://c.sandbox.fomin-clinic.ru'

export async function get(url: string) {
    const response = await fetch(`${API}/${url}`)
    const data = await response.json()
    return data
}