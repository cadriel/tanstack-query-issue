const baseUrl = 'https://api.publicapis.org/'

export interface IEntry {
  API: string
  Description: string
  Auth: string
  HTTPS: boolean
  Cors: string
  Link: string
  Category: string
}

export const testApi = {
  getEntries: () => {
    return fetch(baseUrl + 'entries')
      .then((res) => res.json())
      .then((data) => data.entries)
      .catch((err) => console.log(err))
  }
}
