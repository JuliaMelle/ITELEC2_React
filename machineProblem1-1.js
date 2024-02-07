const data = [
  {
    id: 1,
    brand: "Honda",
    model: "CBR1000RR",
    year: 2022,
    color: "Red",
    engineSize: 1000,
    topSpeed: 186,
    features: [
      "ABS",
      "Quick Shifter",
      "LED Headlights",
      "Adjustable Suspension",
      "Riding Modes",
    ],
    price: 15000,
  },
  {
    id: 2,
    brand: "Harley-Davidson",
    model: "Sportster Iron 883",
    year: 2021,
    color: "Black",
    engineSize: 883,
    topSpeed: 110,
    features: [
      "Cruiser Style",
      "Belt Drive",
      "Forward Controls",
      "Custom Exhaust",
    ],
    price: 9999,
  },
  {
    id: 3,
    brand: "Kawasaki",
    model: "Ninja ZX-6R",
    year: 2023,
    color: "Green",
    engineSize: 636,
    topSpeed: 156,
    features: [
      "Quick Shifter",
      "Traction Control",
      "Slipper Clutch",
      "Adjustable Windscreen",
    ],
    price: 12000,
  },
  {
    id: 4,
    brand: "Yamaha",
    model: "MT-09",
    year: 2022,
    color: "Blue",
    engineSize: 847,
    topSpeed: 135,
    features: [
      "Naked Bike Design",
      "TFT Display",
      "Quick Shifter",
      "Adjustable Suspension",
    ],
    price: 11000,
  },
  {
    id: 5,
    brand: "Ducati",
    model: "Panigale V4",
    year: 2024,
    color: "Yellow",
    engineSize: 1103,
    topSpeed: 211,
    features: [
      "Ohlins Suspension",
      "Brembo Brakes",
      "Power Modes",
      "Quick Shifter",
    ],
    price: 25000,
  },
  {
    id: 6,
    brand: "BMW",
    model: "S1000RR",
    year: 2023,
    color: "White",
    engineSize: 999,
    topSpeed: 186,
    features: [
      "Dynamic Traction Control",
      "Launch Control",
      "Up/Down Quick Shifter",
      "Adjustable Riding Modes",
    ],
    price: 18000,
  },
  {
    id: 7,
    brand: "Suzuki",
    model: "GSX-R750",
    year: 2022,
    color: "Black/Blue",
    engineSize: 750,
    topSpeed: 165,
    features: [
      "Race-Ready Design",
      "Brembo Monobloc Calipers",
      "Quick Shifter",
      "Traction Control",
    ],
    price: 13000,
  },
  {
    id: 8,
    brand: "Indian",
    model: "Chieftain",
    year: 2023,
    color: "Brown",
    engineSize: 1811,
    topSpeed: 115,
    features: [
      "Touring Bike",
      "Touchscreen Infotainment",
      "Cruise Control",
      "Keyless Ignition",
    ],
    price: 22000,
  },
  {
    id: 9,
    brand: "Triumph",
    model: "Street Triple RS",
    year: 2022,
    color: "Silver",
    engineSize: 765,
    topSpeed: 166,
    features: [
      "Brembo Brakes",
      "Quick Shifter",
      "Adjustable Suspension",
      "Triumph Shift Assist",
    ],
    price: 14000,
  },
  {
    id: 10,
    brand: "Aprilia",
    model: "Tuono V4 1100",
    year: 2024,
    color: "Red",
    engineSize: 1077,
    topSpeed: 175,
    features: [
      "Semi-Active Suspension",
      "Cornering ABS",
      "Quick Shifter",
      "Ride-By-Wire Throttle",
    ],
    price: 19000,
  },
];
function getMotorcycles() {
  return data;
}
function getMotorcycle(id) {
  return data.find((d) => d.id === id);
}
// 1. Extract the brand, model, and year properties from the first motorcycle.
const { brand, model, year } = data[0];
console.log(brand, model, year);

// 2. Extract the brand, color, and topSpeed properties from the third motorcycle.
const { brand: brand1, color: color1, topSpeed: topSpeed1 } = data[2];
console.log(brand1, color1, topSpeed1);

//3. Extract the model, engineSize, and price properties from the fifth motorcycle.
const { brand: brand2, color: color2, topSpeed: topSpeed2 } = data[4];
console.log(brand2, color2, topSpeed2);

// 4. Extract the first and second features from the last motorcycle.
const {
  features: [firstFeature, secondFeature],
} = data[data.length - 1];
console.log(firstFeature, secondFeature);

// 5. Using the rest operator, extract the remaining features of the last motorcycle.
const {
  features: [, , ...remainingFeatures],
} = data[data.length - 1];
console.log(remainingFeatures);

// 6. Using the spread operator, add a new feature, "GPS Navigation" to the first motorcycle.
const updatedFirstMotorcycle = {
  ...data[0],
  features: [...data[0].features, "GPS Navigation"],
};
console.log(updatedFirstMotorcycle);

// 7. Using the spread operator, add new property type "Sports Bike" to the fifth motorcycle.
const updatedFifthMotorcycle = { ...data[4], type: "Sports Bike" };
console.log(updatedFifthMotorcycle);

//8. Using the spread operator, increase the top speed by 10 mph and set the color to black of the third motorcycle.
const updatedThirdMotorcycle = {
  ...data[2],
  topSpeed: data[2].topSpeed + 10,
  color: "Black",
};
console.log(updatedThirdMotorcycle);

//9.  Modify the price property for each motorcycle in the array. If the year is 2022, increase the price by 5%; otherwise, decrease it by 3%.
const updatedPrices = data.map((motorcycle) => ({
  ...motorcycle,
  price:
    motorcycle.year === 2022
      ? motorcycle.price * 1.05
      : motorcycle.price * 0.97,
}));
console.log(updatedPrices);

//10. Update a motorcycle where a discounted property is added. If the price exceeds $15,000, set discounted to true; otherwise, set it to false.
const updatedDiscounts = data.map((motorcycle) => ({
  ...motorcycle,
  discounted: motorcycle.price > 15000,
}));
console.log(updatedDiscounts);
// 11.

// function add(a, b) {
//   return a + b;
// }
const add = (a, b) => a + b;

// 12.
// function greet(name) {
//   return "Hello, " + name + "!";
// }
const result = add(5, 3);
console.log(result);

const greet = (name) => `Hello, ${name}!`;

const greeting = greet("Julia");
console.log(greeting);

// 13.
// function square(x) {
//   return x * x;
// }
const square = (x) => x * x;
const area = square(7);
console.log(area);

// 14-15. Hello

// function multiplyAndAdd(a, b, c) {
//   let result = a * b;
//   result += c;
//   return result;
// }

const multiplyAndAdd = (a, b, c) => {
  let result = a * b;
  result += c;
  return result;
};

const finalResult = multiplyAndAdd(7, 8, 4);
console.log(finalResult);
