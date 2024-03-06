import { useQuery } from 'react-query'

import fetchTriviaQuestions from './fetchTriviaQuestions'

const useTriviaQuestions = (page = 1, order = 'asc') => {
  return useQuery(
    ['triviaQuestions', page, order],
    () => fetchTriviaQuestions(),
    {
      keepPreviousData: true,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      retryDelay: 5000,

      retry: (failureCount, error) => error?.status === 429,
    },
  )
}

export default useTriviaQuestions
