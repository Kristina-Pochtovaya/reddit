export type formatDateOptionsType = {
  year?: 'numeric' | '2-digit'
  month?: 'numeric' | '2-digit' | 'long' | 'short' | 'narrow'
  day?: 'numeric' | '2-digit'
  hour?: 'numeric' | '2-digit'
  minute?: 'numeric' | '2-digit'
}

export function formatDate(
  isoString: string,
  customOptions?: formatDateOptionsType,
) {
  const date = new Date(isoString)

  const options = customOptions ?? {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }
  return new Intl.DateTimeFormat('en-US', options).format(date)
}
