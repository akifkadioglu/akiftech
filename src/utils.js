export default function createBackgroundString(angle, from, via, to) {
    return `linear-gradient(${angle}deg, ${from}, ${via}, ${to})`;
}