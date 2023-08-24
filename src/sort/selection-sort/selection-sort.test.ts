import { SelectionSort } from "./selection-sort";

const emptyArray: number[] = [];
const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const reverseArray = [20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const notSortedArray = [15, 8, 5, 12, 10, 1, 16, 9, 11, 7, 20, 3, 2, 6, 17, 18, 4, 13, 14, 19];
const equalArray = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
const negativeArray = [-1, 0, 5, -10, 20, 13, -7, 3, 2, -3];
const negativeArraySorted = [-10, -7, -3, -1, 0, 2, 3, 5, 13, 20];


describe('SelectionSort', () => {
    const selectionSort = new SelectionSort()

    it('should sort array', () => {
        expect(selectionSort.sort(emptyArray)).toEqual(emptyArray);
        expect(selectionSort.sort(sortedArray)).toEqual(sortedArray);
        expect(selectionSort.sort(reverseArray)).toEqual(sortedArray);
        expect(selectionSort.sort(notSortedArray)).toEqual(sortedArray);
        expect(selectionSort.sort(equalArray)).toEqual(equalArray);
        expect(selectionSort.sort(negativeArray)).toEqual(negativeArraySorted);
        expect(selectionSort.sort(negativeArraySorted)).toEqual(negativeArraySorted);
    });
});