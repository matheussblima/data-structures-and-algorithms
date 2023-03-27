export class BubbleSortV1 {
    sort(data: number[]): number[] {
        let aux: number = 0;
        for (let n = 0; n < data.length; n++) {
            for (let i = 0; i < data.length - 1; i++) {
                if (data[i] > data[i + 1]) {
                    aux = data[i];
                    data[i] = data[i + 1];
                    data[i + 1] = aux;
                }
            }
        }

        return data;
    }
}