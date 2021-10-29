export default function (event: KeyboardEvent, current: number, length: number): number {
    if (event.key === "ArrowRight") {
        current + 1 === length ? current = 0 : current += 1;
    } else if (event.key === "ArrowLeft") {
        current === 0 ? current = length - 1 : current -= 1
    }

    return current;
}