// liturgical-calendar.js

const liturgicalColors = {
    advent: '#5D3F8A',
    christmas: '#D4AF37',
    epiphany: '#F0F0F0',
    lent: '#5D3F8A',
    holyWeek: '#8B0000',
    easter: '#F0F0F0',
    pentecost: '#8B0000',
    ordinaryTime: '#006633'
};

function updateLiturgicalColor() {
    const date = new Date();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    let color, season;

    // This is a simplified example. You'd need to adjust for exact dates each year.
    if ((month === 12 && day > 3) || (month === 1 && day < 6)) {
        color = liturgicalColors.christmas;
        season = 'Christmas';
    } else if (month === 1 || (month === 2 && day < 14)) {
        color = liturgicalColors.epiphany;
        season = 'Epiphany';
    } else if (month === 2 || month === 3) {
        color = liturgicalColors.lent;
        season = 'Lent';
    } else if (month === 4) {
        color = liturgicalColors.holyWeek;
        season = 'Holy Week / Easter';
    } else if (month === 5 && day <= 31) {
        color = liturgicalColors.pentecost;
        season = 'Pentecost';
    } else if (month === 11 && day >= 27) {
        color = liturgicalColors.advent;
        season = 'Advent';
    } else {
        color = liturgicalColors.ordinaryTime;
        season = 'Ordinary Time';
    }

    document.documentElement.style.setProperty('--liturgical-color', color);
    document.getElementById('seasonIndicator').textContent = `Current Season: ${season}`;
}

// Call the function when the script loads
document.addEventListener('DOMContentLoaded', updateLiturgicalColor);