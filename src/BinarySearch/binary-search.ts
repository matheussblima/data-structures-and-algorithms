export class BinarySearch {
    search(data: number[], element: number): number {
        let low = 0
        let top = data.length - 1

        while (low <= top) {
            const middle = Math.trunc((low + top) / 2)

            if(data[middle] == element) return middle

            if(data[middle] < element) {
                low = middle + 1 
                continue
            }

            top = middle - 1
        }

        return  -1
    }
}