 # Bubble Sort

In this Sorting Algorithm, comparisons between the array elements of size n will be performed. Each element of position **i** will be compared with the element of position **i + 1**, When the desired ordering (ascending or descending) is found, an exchange of position of elements is performed.

![Bubble Sort Example](../../../assets/bubble-sort-example.png)

##Complexity analysis

In a sorting algorithm, the determining factor for its performance is the number of comparisons that are performed. Considering an algorithm that was implemented for an array of 5 positions, it turns out that the number of iterations for the first loop is 5. The second loop has 4 iterations, but as it is internal to the first one, it will be executed (5x4) 20 times.

Applying the same idea to an array of size n it will perform n(n -1) = n² - n comparisons. Using Big-O notation we have an O(n²)

[Bubble Sort Version 1](https://github.com/matheussblima/data-structures-and-algorithms/blob/main/src/sort/bubble-sort/bubble-sort-v1.ts)