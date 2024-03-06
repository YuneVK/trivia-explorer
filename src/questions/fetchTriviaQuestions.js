const API_URL = 'https://opentdb.com/api.php'
const API_AMOUNT = 25

const fetchTriviaQuestions = async () => {
  const response = await fetch(`${API_URL}?amount=${API_AMOUNT}`)

  if (!response.ok) {
    const error = new Error('Failed to fetch data')
    error.status = response.status
    throw error
  }

  const data = await response.json()
  return data.results
}

export default fetchTriviaQuestions
