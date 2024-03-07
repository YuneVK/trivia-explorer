import { useState } from 'react'

import useTriviaQuestions from './useTriviaQuestions'
import Pagination from './pagination'

import { TYPES, DIFFICULTIES, ORDERS } from './constants'

import SortAscendingIcon from '../icons/SortAscending'
import SortDescendingIcon from '../icons/SortDescending'

import './questions.css'

function Questions() {
  const [currentPage, setCurrentPage] = useState(1)
  const [order, setOrder] = useState(ORDERS.asc)

  const { data, isFetching, isError } = useTriviaQuestions(currentPage, order)

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage)
  }

  const toggleOrder = () => {
    setOrder((prevOrder) =>
      prevOrder === ORDERS.asc ? ORDERS.desc : ORDERS.asc,
    )
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
              <button
                className="questions__order-button"
                onClick={toggleOrder}
                aria-label={`Sort by ID in ${order === ORDERS.asc ? 'descending' : 'ascending'} order`}
              >
                ID
                {order === ORDERS.asc ? (
                  <SortAscendingIcon />
                ) : (
                  <SortDescendingIcon />
                )}
              </button>
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
                <td
                  dangerouslySetInnerHTML={{ __html: question.category }}
                ></td>
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
