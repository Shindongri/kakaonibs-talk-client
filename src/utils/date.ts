import { format, isValid } from 'date-fns'

export const dateConverter = (date: Date, formatToConvert: string) =>
  isValid(new Date(date)) ? format(new Date(date), formatToConvert) : date
