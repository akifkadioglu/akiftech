export function createBackgroundString(angle, from, via, to) {
    return `linear-gradient(${angle}deg, ${from}, ${via}, ${to})`;
}
export function isMobile() {
    return "ontouchstart" in window
}