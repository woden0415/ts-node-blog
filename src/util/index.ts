
export const getCookieExpires = () => {
  const d: Date = new Date();
  d.setTime(d.getTime() + (10 * 1000))
  return d.toUTCString();
}