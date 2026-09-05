// 01. House Robber
// You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

// Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.
// Example 1:

// Example 1:

// Input: nums = [1,2,3,1]
// Output: 4
// Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3). Total amount you can rob = 1 + 3 = 4.
// Example 2:

// Example 2:

// Input: nums = [2,7,9,3,1]
// Output: 12
// Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1). Total amount you can rob = 2 + 9 + 1 = 12.
// Constraints:

// •
// 1 <= nums.length <= 100
// •
// 0 <= nums[i] <= 400


// 02. Division Error
// Create a program that performs a division operation and checks if it executes successfully without encountering any zero division errors.

// If an ZeroDivisionError exception occurs during the division, the program should return false; otherwise, it should return true.
// Example 1:

// Input: a=7, b=0
// Output: false
// Constraints:
// •
// 0 <= a, b <= 10



// 03. Find Prime Numbers in a Range with Digit Constraints
// Write a program that finds all prime numbers between two given integers L and R (inclusive). However, only include those primes that do not contain the digit '3' in their decimal representation.
// Example 1:

// Input: L = 10, R = 30
// Output: 11 17 19 29
// (Note: 13 and 23 are prime but contain the digit '3', so they are excluded.)
// Example 2:

// Input: L = 30, R = 35
// Output: No valid primes found.
// Constraints:
// •
// 1 ≤ L ≤ R ≤ 10,000




// 04. Search in Rotated Sorted Array
// There is an integer array nums sorted in ascending order (with distinct values).

// Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

// Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

// You must write an algorithm with O(log n) runtime complexity.
// Example 1:

// Input 1: nums = [4,5,6,7,0,1,2], target = 0
// Output 1: 4
// Explanation 1: 0 is present at 4th index.
// Example 2:

// Input 2: nums = [4,5,6,7,0,1,2], target = 3
// Output 2: -1
// Constraints:
// •
// n == nums.length
// •
// 1 <= n <= 5000
// •
// All values of nums are unique.
// •
// -10
// 4
// <= nums[i] <= 10
// 4
// •
// -10
// 4
// <= target <= 10




// 05. Smallest Good Base
// Given an integer n represented as a string, return the smallest good base of n.

// We call k >= 2 a good base of n, if all digits of n base k are 1's.

// Example 1:

// Input1: n = "13"
// Output1: "3"
// Explanation1: 13 base 3 is 111.
// Example 2:

// Input1: n = "4681"
// Output1: "8"
// Explanation1: 4681 base 8 is 11111.
// Constraints:
// •
// n is an integer in the range [3, 1018].
// •
// n does not contain any leading zeros.


// 06. Ways to Express an Integer as Sum of Powers
// Given two integers x and n, we need to find number of ways to express x as sum of n-th powers of unique natural numbers.
// Example 1:

// Input: x = 100 n = 2
// Output: 2
// Explanation: There are three ways to express 100 as sum of natural numbers raised to power 2. 100 = 10^2 = 8^2+6^2 = 1^2+3^2+4^2+5^2+7^2
// Example 2:

// Input: x = 100 n = 3
// Output: 1
// Constraints:
// •
// 1 ≤ N ≤ 20
// •
// 1 ≤ X ≤ 10000



// 07. 24 Game
// You are given an integer array cards of length 4. You have four cards, each containing a number in the range [1, 9]. You should arrange the numbers on these cards in a mathematical expression using the operators ['+', '-', '*', '/'] and the parentheses '(' and ')' to get the value 24.

// You are restricted with the following rules:
// The division operator '/' represents real division, not integer division. For example, 4 / (1 - 2 / 3) = 4 / (1 / 3) = 12.
// Every operation done is between two numbers. In particular, we cannot use '-' as a unary operator. For example, if cards = [1, 1, 1, 1], the expression "-1 - 1 - 1 - 1" is not allowed.
// You cannot concatenate numbers together For example, if cards = [1, 2, 1, 2], the expression "12 + 12" is not valid.

// Return true if you can get such expression that evaluates to 24, and false otherwise.
// Example 1:

// Example 1:
// Input: cards = [4,1,8,7]
// Output: true
// Explanation: (8-4) * (7-1) = 24
// Example 2:

// Example 2:
// Input: cards = [1,2,1,2]
// Output: false
// Constraints:
// •
// cards.length == 4
// •
// 1 <= cards[i] <= 9


// 08. Left Rotation
// A left rotation operation on an array of size shifts each of the array's elements unit to the left.

// Given an integer, , rotate the array that many steps left and return the result.
// Example 1:

// Input 1: arr = [1, 2, 3, 4, 5], d = 2
// Output 1: [3, 4, 5, 1, 2]
// Constraints:
// •
// 1<=arr.length<=10000