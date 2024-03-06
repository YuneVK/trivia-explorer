const getPageRange = (currentPage, maxPageButtons, totalPages) => {
  let startPage = Math.max(currentPage - Math.floor(maxPageButtons / 2), 1)
  let endPage = Math.min(startPage + maxPageButtons - 1, totalPages)

  // Adjust the range if close to the beginning or the end
  if (endPage - startPage < maxPageButtons - 1) {
    startPage = Math.max(endPage - maxPageButtons + 1, 1)
  }

  return Array.from(
    { length: endPage - startPage + 1 },
    (_, index) => startPage + index,
  )
}

export default getPageRange
