export class SelectionSort {

    private findMinor(data: number[]): number {
        var minorIndex = 0
        var minor = data[minorIndex]

        data.forEach((value, index) => {
            if (value <= minor) {
                minorIndex = index
                minor = data[index]
            }
        })

        return minorIndex
    }

    sort(data: number[]): number[] {
        const auxData = data.slice(0)
        const arraySorted: number[] = []
        const length = data.length

        for (let index = 0; index < length; index++) {
            const minor = this.findMinor(auxData)
            arraySorted.push(auxData[minor])
            auxData.splice(minor, 1)
        }

        return arraySorted
    }
}