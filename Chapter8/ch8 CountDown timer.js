const endDate = new Date('2024-12-31T23:59:59');

function countdown() {
    const difference = Date.parse(endDate) - Date.now();
    
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return {
        days,
        hours,
        minutes,
        seconds
    };
}

function update() {
    const countdownValues = countdown();

    let output = '';

    for (const [unit, value] of Object.entries(countdownValues)) {
        output += `${value} ${unit} `;
    }

    console.log(output.trim());
    
    setTimeout(update, 1000);
}

update();
