import useTriviaQuestions from './useTriviaQuestions'

import './table.css'

function Table() {
  const { data, isFetching, isError } = useTriviaQuestions()

  return (
    <section className="table">
      {isError && (
        <div className="table__error">
          <p>There was an error fetching the data</p>
        </div>
      )}

      {isFetching && (
        <div className="table__loader">
          <p>Loading...</p>
        </div>
      )}

      <div className="table__list">
        <code>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </code>
      </div>
    </section>
  )
}

export default Table
