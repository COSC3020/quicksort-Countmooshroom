[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=11730516&assignment_repo_type=AssignmentRepo)
# Quicksort

Implement an iterative (no recursive calls) version of quicksort. Use the
template I've provided in `code.js`. Test your new function; I've provided some
basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

Hint: To make qicksort iterative, think about the part of the array each
recursive call considers.

## Runtime Analysis

Analyse the time complexity of your implementation and give a $\Theta$ bound for
its worst-case runtime. Add your answer, including your reasoning, to this
markdown file.

## Answer

In my implementation of quicksort, it picks the first item as the pivot, then creates three arrays: one with the elements left of the pivot, one with just the pivot, and one with the elements right of the pivot.  It then does the same operation on each array until I have a list of arrays with one element each, and then it is sorted.  The worst case, just like the recursive verion, is when a list always uses the lowest element as a pivot (such as a sorted list).  In this case, each run through would make n comparisons to sort items to the left or right, and it would run this n times to get through everything.  Therefore, the worst case time complexity is $\Theta(n^2)$.
