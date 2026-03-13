export function getTripDuration(startDate: string | Date, endDate: string | Date) {
  const start = new Date(startDate);
  const end = new Date(endDate);

  // Difference in milliseconds
  const diffMs = end.getTime() - start.getTime();

  // Convert milliseconds to days
  const days = Math.ceil(diffMs / (1000 * 60 * 60 * 24));

  // Usually nights = days
  const nights = days;

  return { days, nights };
}
