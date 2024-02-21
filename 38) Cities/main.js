"use strict";
const describe_city = (city, country = 'Pakistan') => {
    console.log(`${city} is in ${country}`);
};
describe_city('Karachi');
describe_city('Hyderabad');
describe_city('dehli', 'India');
