// A C++ program to find if
// there is a zero sum subarray
#include <bits/stdc++.h>
using namespace std;

bool subArrayExists(int arr[], int n)
{
	unordered_set<int> sumSet;

	// Traverse through array
	// and store prefix sums
	int sum = 0;
	for (int i = 0; i < n; i++)
	{
		sum += arr[i];

		// If prefix sum is 0 or
		// it is already present
		if (sum == 0
			|| sumSet.find(sum)
			!= sumSet.end())
			return true;

		sumSet.insert(sum);
	}
	return false;
}

// Driver code
int main()
{
	//int arr[] = { -3, 2, 3, 1, 6 };
  int arr[] = { 5, 1, 2, 3, -4 };
	int n = sizeof(arr) / sizeof(arr[0]);
	if (subArrayExists(arr, n))
		cout << "1";
	else
		cout << "0";
	return 0;
}
