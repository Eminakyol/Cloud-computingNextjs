export function truncateText(text, maxLength) {
  if (text.length <= maxLength) {
    return text;
  } else {
    return text.slice(0, maxLength) + "...";
  }
}
export const productCount = (id) => {
  var existingArray = JSON.parse(localStorage.getItem("basket")) || [];
  return existingArray.filter((item) => item.id === id).length;
};
