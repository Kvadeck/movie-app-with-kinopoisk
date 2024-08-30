import type {Ref} from "vue";

export function setDateNowForPremierUrl() {
  const now = new Date()
  const currentMonth = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(now).toUpperCase()
  const currentYear = now.getFullYear()
  return `https://kinopoiskapiunofficial.tech/api/v2.2/films/premieres?year=${currentYear}&month=${currentMonth}`
}

export function getDivWidth(el:Ref) {
  const style = getComputedStyle(el.value);
  const marginLeft = parseInt(style.marginLeft, 10);
  const marginRight = parseInt(style.marginRight, 10);
  return el.value.offsetWidth + marginLeft + marginRight
}
