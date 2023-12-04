export function convertTime(dateObject) {
    const year = dateObject.getFullYear()
    const month = dateObject.toLocaleDateString('ru-Ru', { month: 'long'}); //Получения названия месяца
    const day = dateObject.getDate();
    const hour = dateObject.getHours();
    const minutes = dateObject.getMinutes();
    return `${day} ${month}, ${year} ${hour}:${minutes}`;
}