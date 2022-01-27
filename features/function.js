const add = (a, b) => {
    return a + b;
};
const subtract = (a, b) => {
    return a - b;
};
const divide = (a, b) => {
    return a / b;
};
const multiply = (a, b) => {
    return a * b;
};
const logger = (message) => {
    console.log(message);
};
const throwError = (message) => {
    if (!message) {
        throw new Error(message);
    }
};
const todaysWeather = {
    date: new Date(),
    weather: "sunny",
};
const logWeather = ({ date, weather }), { date: Date, weather: string };
{
    console.log(date);
    console.log(weather);
}
logWeather(todaysWeather);
