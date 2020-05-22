export function clearWeatherData(array) {
  let clearedWeatherData = [];
  array.forEach((item, index) => {
    if (index % 8 === 0) {
      clearedWeatherData.push(item);
    }
  });
  return clearedWeatherData;
}
