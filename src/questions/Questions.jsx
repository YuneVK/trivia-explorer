import { useState } from 'react'

import useTriviaQuestions from './useTriviaQuestions'
import Pagination from './pagination'

import { TYPES, DIFFICULTIES } from './constants'

import './questions.css'

function Questions() {
  const [currentPage, setCurrentPage] = useState(1)
  const { data, isFetching, isError } = useTriviaQuestions(currentPage)

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage)
  }

  return (
    <section className="questions">
      {isError && (
        <div className="questions__error">
          <p>There was an error fetching the data</p>
        </div>
      )}

      {isFetching && (
        <div className="questions__loader">
          <p>Loading...</p>
        </div>
      )}

      {data ? (
        <table className="questions__list">
          <thead>
            <tr>
              <th>ID</th>
              <th>Category</th>
              <th>Type</th>
              <th>Difficulty</th>
              <th>Question</th>
            </tr>
          </thead>
          <tbody>
            {data.map((question) => (
              <tr key={`question-${question.id}`}>
                <td>{question.id}</td>
                <td>{question.category}</td>
                <td>{TYPES[question.type]}</td>
                <td>{DIFFICULTIES[question.difficulty]}</td>
                <td
                  dangerouslySetInnerHTML={{ __html: question.question }}
                ></td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : null}

      <Pagination currentPage={currentPage} onPageChange={handlePageChange} />
    </section>
  )
}

export default Questions
