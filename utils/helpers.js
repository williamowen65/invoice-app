export const modifyDate = (arg) => {
    const month = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];
    let date = new Date(Date.parse(arg));
    const mo = month[date.getMonth()];
    const day = date.getDay() + 1;
    const yr = date.getFullYear();

    return `${mo} ${day} ${yr}`;
};
