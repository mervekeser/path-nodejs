const pi = 3.14;

const circleArea = (radius) => {
  let area = pi * radius ** 2;
  console.log(`Circle area ${area}`);
};

const circleCircumference = (radius) => {
  let circumference = 2 * pi * radius;
  console.log(`Circle circumference ${circumference}`);
};

module.exports = {
  circleArea,
  circleCircumference,
};
