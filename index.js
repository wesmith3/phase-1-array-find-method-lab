// code your solution here
function superbowlWin(record) {
    const lastWin = record.find(obj => obj.result === "W")
    if (lastWin) {
        return lastWin.year;
    } else {
        return undefined;
    }
}