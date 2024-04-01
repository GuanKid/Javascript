const date = new Date();

console.log("Date object:", date);

const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

const day = date.getDate();
const year = date.getFullYear();
const monthIndex = date.getMonth();

const fullMonthName = months[monthIndex];

console.log("Full date:", `${fullMonthName} ${day}, ${year}`);
