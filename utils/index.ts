export function delay(time: number): Promise<any> {
    return new Promise((resolve) => {
        setTimeout(resolve, time)
    });
}
