export function capitalizeFirst(str: string) {
  let temp = str.toLowerCase();
  temp = (temp.charAt(0).toUpperCase() + temp.slice(1))
  return temp;
}