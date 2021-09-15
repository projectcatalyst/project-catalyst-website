import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter'

dayjs.extend(utc)
dayjs.extend(isSameOrAfter)

class DateHelper {
  constructor(date) {
    this.date = dayjs.utc(date || new Date())
  }

  format(format) {
    return this.date ? this.date.format(format) : null
  }

  isBefore(date) {
    return this.date.isBefore(dayjs(date))
  }

  isSame(date) {
    return this.date.isSame(dayjs(date))
  }

  isAfter(date) {
    return this.date.isAfter(dayjs(date))
  }

  isSameOrAfter(date) {
    return this.date.isSameOrAfter(dayjs(date))
  }
}

export default DateHelper
