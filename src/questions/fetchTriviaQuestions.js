import { ORDERS, API_URL, API_AMOUNT, TOTAL_QUESTIONS } from './constants'

// Helper function to calculate a fake ID for each question.
// This function generates a unique ID based on the page number, the order
// (ascending or descending), and the item index.
// It's designed to ensure that each question has a distinct identifier
// for better handling in the UI.
const calculateFakeId = (index, page, order) => {
  const startIndex = (page - 1) * API_AMOUNT

  return order === ORDERS.asc
    ? startIndex + index + 1
    : TOTAL_QUESTIONS - startIndex - index
}

const fetchTriviaQuestions = async (page, order) => {
  const response = await fetch(`${API_URL}?amount=${API_AMOUNT}`)

  if (!response.ok) {
    const error = new Error('Failed to fetch data')
    error.status = response.status
    throw error
  }

  const data = await response.json()

  const modifiedData = data.results.map((item, index) => ({
    ...item,
    id: calculateFakeId(index, page, order),
  }))

  return modifiedData
}

export default fetchTriviaQuestions
