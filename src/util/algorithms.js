
// ideal algotrithm design
// input array of numbers
// if input array is not numbers, throw an error
// create an interface to ensure the input is of the correct type

export function quickSort(arr, low, high) {

    if (low < high) {
        // assign a partitioning index at the last element
        let partitionIndex = partition(arr, low, high)

        // split the input array of elements 
        quickSort(arr, low, partitionIndex - 1);
        quickSort(arr, partitionIndex + 1, high);
    }

    return arr;
}

export function partition(arr, low, high) {
    // set pivot at last element in array
    let pivot = arr[high];

    // track index of smaller element and indicate right
    // position of index found so far
    let smallIndex = low - 1;

    for (let j=low; j <= high-1; j++) {
        // if current element is smaller than the pivot
        if (arr[j] < pivot) {
            smallIndex++;    // incerment index of smaller element
            swap(arr, smallIndex, j);
        }
    }

    swap(arr, smallIndex+1, high);
    return (smallIndex+1);
}

// swap number arr[a] with arr[b]
export function swap(arr, indexOne, indexTwo) {
    let temp = arr[indexOne];
    arr[indexOne] = arr[indexTwo];
    arr[indexTwo] = temp;
}
