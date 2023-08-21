import { BinarySearch } from "./binary-search"

const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 30, 90, 100, 200];

describe("Binary Search", () => {
    const binarySearch = new BinarySearch()

    expect(binarySearch.search(sortedArray, 1)).toEqual(1)
    expect(binarySearch.search(sortedArray, 12)).toEqual(12)
    expect(binarySearch.search(sortedArray, 129)).toEqual(-1)
})