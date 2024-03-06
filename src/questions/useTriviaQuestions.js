import { useQuery } from 'react-query'

import fetchTriviaQuestions from './fetchTriviaQuestions'
import { ORDERS } from './constants'

const useTriviaQuestions = (page = 1, order = ORDERS.asc) => {
  return useQuery(
    ['triviaQuestions', page, order],
    () => fetchTriviaQuestions(page, order),
    {
      keepPreviousData: true,
      staleTime: Infinity,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      retryDelay: 5000,

      retry: (failureCount, error) => error?.status === 429,
    },
  )
}

export default useTriviaQuestions
