export class BubbleSortV2 {
    sort(data: number[]): number[] {
        const size: number = data.length;
        let aux: number = 0;
        for (let n = 0; n < size - 1; n++) {
            for (let i = size - 1; i > n; i--) {
                if (data[i] < data[i - 1]) {
                    aux = data[i];
                    data[i] = data[i - 1];
                    data[i - 1] = aux;
                }
            }
        }

        return data;
    }
}