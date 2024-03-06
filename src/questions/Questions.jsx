import useTriviaQuestions from './useTriviaQuestions'

import { TYPES, DIFFICULTIES } from './constants'

import './questions.css'

function Questions() {
  const { data, isFetching, isError } = useTriviaQuestions()

  console.log(data)

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
            {data.map((question, index) => (
              <tr key={`question-${index}`}>
                <td>{index}</td>
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
    </section>
  )
}

export default Questions
