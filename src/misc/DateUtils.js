function dateObjToStringFormat(date) {
  return date.toISOString().split('T')[0]
}

function getStartOfTheWeekDate(date) {
  const day = date.getDay()
  const diff = date.getDate() - (day === 0 ? 6 : day - 1) // adjust for Monday as start of the week
  return new Date(date.setDate(diff))
}

export { dateObjToStringFormat, getStartOfTheWeekDate }
