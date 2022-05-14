def binary_search(arr, num_to_find):
    lower_bound = 0
    upper_bound = len(arr) - 1
    
    while lower_bound <= upper_bound:
        index_avg = (lower_bound + upper_bound) // 2
        middle_element = arr[index_avg]
        if middle_element == num_to_find:
            return index_avg
        elif middle_element < num_to_find:
            lower_bound = index_avg + 1
        else:
            upper_bound = index_avg - 1
    return None


print(binary_search([1, 5, 8, 11, 14], 7))
