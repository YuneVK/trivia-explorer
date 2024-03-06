export const API_URL = 'https://opentdb.com/api.php'

export const API_AMOUNT = 25

export const TOTAL_QUESTIONS = 4146

export const TOTAL_PAGES = Math.ceil(TOTAL_QUESTIONS / API_AMOUNT)

export const TYPES = {
  multiple: 'Multiple Choice',
  boolean: 'True / False',
}

export const DIFFICULTIES = {
  easy: 'Easy',
  medium: 'Medium',
  hard: 'Hard',
}

export const ORDERS = {
  asc: 'asc',
  desc: 'desc',
}
