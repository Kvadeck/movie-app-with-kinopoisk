export function setDateNowForPremierUrl() {
  const now = new Date()
  const currentMonth = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(now).toUpperCase()
  const currentYear = now.getFullYear()
  return `https://kinopoiskapiunofficial.tech/apвааi/v2.2/films/premieres?year=${currentYear}&month=${currentMonth}`
}
