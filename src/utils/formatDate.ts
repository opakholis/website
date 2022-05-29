export function formatDate(date: string, isLong = false) {
  const shortDate: Intl.DateTimeFormatOptions = {
    month: 'short',
    year: 'numeric'
  };

  const longDate: Intl.DateTimeFormatOptions = {
    month: 'long',
    year: 'numeric'
  };

  return new Date(date).toLocaleDateString('id', isLong ? longDate : shortDate);
}
