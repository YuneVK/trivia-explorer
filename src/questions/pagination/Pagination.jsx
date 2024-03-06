import PropTypes from 'prop-types'

import { TOTAL_PAGES, MAX_PAGE_BUTTONS } from '../constants'
import getPageRange from './getPageRange'

import CaretDoubleLeft from '../../icons/CaretDoubleLeft'
import CaretLeft from '../../icons/CaretLeft'
import CaretRight from '../../icons/CaretRight'
import CaretDoubleRight from '../../icons/CaretDoubleRight'

import './pagination.css'

const Pagination = ({ currentPage, onPageChange }) => {
  const pageNumbers = getPageRange(currentPage, MAX_PAGE_BUTTONS, TOTAL_PAGES)

  return (
    <div className="pagination">
      <button
        className="pagination__button"
        onClick={() => onPageChange(1)}
        disabled={currentPage === 1}
        aria-label="Go to first page"
      >
        <CaretDoubleLeft className="pagination__icon" />
      </button>
      <button
        className="pagination__button"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Go to previous page"
      >
        <CaretLeft className="pagination__icon" />
      </button>

      {pageNumbers.map((page) => (
        <button
          className="pagination__button"
          key={`pagination-button-${page}`}
          disabled={page === currentPage}
          onClick={() => onPageChange(page)}
          aria-current={currentPage === page ? 'page' : undefined}
          aria-label={`Go to page ${page}`}
        >
          {page}
        </button>
      ))}

      <button
        className="pagination__button"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === TOTAL_PAGES}
        aria-label="Go to next page"
      >
        <CaretRight className="pagination__icon" />
      </button>
      <button
        className="pagination__button"
        onClick={() => onPageChange(TOTAL_PAGES)}
        disabled={currentPage === TOTAL_PAGES}
        aria-label="Go to last page"
      >
        <CaretDoubleRight className="pagination__icon" />
      </button>
    </div>
  )
}

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
}

export default Pagination
