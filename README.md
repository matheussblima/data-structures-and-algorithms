
# Algorithms and Data Structures

This repository contains examples developed in JavaScript of algorithms and data structures.

## Menu

[TOC]

## Subjects

+ [Sort](https://github.com/matheussblima/data-structures-and-algorithms/tree/main/src/sort)
+ [Bubble Sort](https://github.com/matheussblima/data-structures-and-algorithms/tree/main/src/sort/bubble-sort)
    + [Bubble Sort V1](https://github.com/matheussblima/data-structures-and-algorithms/blob/main/src/sort/bubble-sort/bubble-sort-v1.ts)
    + Bubble Sort V2
    + Bubble Sort V3


## Algorithms

An algorithm is a computational procedure (a set of rules that precisely define a sequence of operations) that, given an input value or a set of values, produces an output value or a set of values.

## Data structure

Data structure is a way to store and organize data for easy access and modification.

## Algorithm analysis

When we develop an algorithm, we must always think about its performance, aiming at the execution time and space occupied.

### Asymptotic Analysis

The asymptotic analysis takes into account large inputs to make the order of growth of the running time  functions relevant.
In practice, we ignore constants and exponents of lesser magnitude. Asymptotic analysis is used to simplify the comparison between functions

### Big-O Notation

The notation Ο(n) is the formal way to express the upper bound of an algorithm's running time. It measures the worst case time complexity or the longest amount of time an algorithm can possibly take to complete.

![Big-O Notation](./assets/big_o_notation.jpg)

```
Ο(f(n)) = { g(n) : there exists c > 0 and n0 such that f(n) ≤ c.g(n) for all n > n0. }
```

#### Referências

- [Asymptotic Analysis](https://www.javatpoint.com/data-structure-asymptotic-analysis)
- [Big-O](https://www.bigocheatsheet.com/)


## How to use this repository

**Install all dependencies**
```
yarn install
```

**Run tests**
```
yarn test
```
