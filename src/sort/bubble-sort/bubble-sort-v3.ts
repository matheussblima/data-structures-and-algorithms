export class BubbleSortV3 {
    sort(data: number[]): number[] {
        const size: number = data.length;
        let aux: number = 0;
        let swap: boolean = true;
        let n = 1;

        while (n <= size && swap) {
            swap = false
            for (let index = 0; index < size - 1; index++) {
                if(data[index] > data[index + 1]) {
                    swap = true;
                    aux = data[index];
                    data[index] = data[index + 1];
                    data[index + 1] = aux;
                }
            }
            n++
        }

        return data;
    }
}