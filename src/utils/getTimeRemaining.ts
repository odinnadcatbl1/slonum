export const getTimeRemaining = (endtime: string) => {
    const nowDate = new Date();

    const remainingTime = Date.parse(endtime) - Date.parse(nowDate.toString()),
        days = Math.floor(remainingTime / (1000 * 60 * 60 * 24)),
        hours = Math.floor((remainingTime / (1000 * 60 * 60)) % 24),
        minutes = Math.floor((remainingTime / 1000 / 60) % 60);

    function getZero(num: number) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return `${num}`;
        }
    }

    const daysWithZero = getZero(days);
    const hoursWithZero = getZero(hours);
    const minutesWithZero = getZero(minutes);

    return { remainingTime, daysWithZero, hoursWithZero, minutesWithZero };
};
