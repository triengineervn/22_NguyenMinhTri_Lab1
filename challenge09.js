//coding challenge 9
console.log("-----coding challenge 9-----");

let printForecast = (arr) => {
    let forecastString = "";
    for (let i = 0; i < arr.length; i++) {
      forecastString += `... ${arr[i]}°C in ${i + 1} day(s) `;
    }
    console.log(forecastString);
  };
  
  let data = [17, 21, 23];
//   let data = [12, 5, -5, 0, 4];
  
  console.log("Data Forecast:");
  printForecast(data);
