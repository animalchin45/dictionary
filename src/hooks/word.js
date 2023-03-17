import dictionary from '../apis/dictionary'

export const word = async (term) => {
  const response = await dictionary.get(`/${term}`)

  return response.data
}
