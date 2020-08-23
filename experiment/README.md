This folder has 
### Aim<br>
To learn how to finds the sum of elements of array.<br>
### Theory<br>
In this program, we will learn how to initialize array and elements of array, <b>indexing of array starts from zero(0)</b>.<br>
Finding the sum of array elements is easy when you know how to iterate through array elements.
The main purpose of this experiment is to demonstrate how to access array elements.
User will have to enter the size of the array and input the array elements, for entering values of array indexes students will use <b>lop (anyone form: for, while, do-while)</b>

Step:1 initialize N(size of array),arr(ayyay),i(for iterate) and sum(store sum of elements)

int N;

int arr[100],i,sum=0;

Step:2 Read the array size and store it in the variable N.

printf("Input the number of elements to be stored in the array :");<br>
scanf("%d",&N);

Step:3 Input N elements of array.

for(i=0;i<N;i++)<br>
scanf("%d",&a[i]);

Step:4 Iterate array and add each element of the array to the variable <b>sum</b> using for loop with the structure and scanf().

for(i=0; i < N; i++)<br>
sum += a[i];

Step:5 Print the sum of added elements in array using printf().

printf("sum of array elements is : %d", sum);

Now the values of array elements are added.<br>
### Procedure<br>
1. Start the simulator.
2. Click on "Start" button.
3. Code will be visible in the code block and execution of code will be done line by line.
4. Click on "Next" button.
5. Input the value of N (size of array) and press on "Enter" button.
6. Enter all the elements of array (from 0 ti N-1 index) and click on "SUBMIT" button.
7. Memory block will show array and other variables.
8. Click on "Next" button until the sum of all elements calculated.
9. In result we will get sum of array elememts.<br>
### Pre Test<br>
1) What is an Array in C language?<br>
A) A group of elements of same data type.<br>
B) An array contains more than one element<br>
C) Array elements are stored in memory in continuous or contiguous locations.<br>
<b>D) All the above.</b><br>

2) Choose a correct statement about C language arrays.<br>
A) An array address is the address of first element of array itself.<br>
B) An array size must be declared if not initialized immediately.<br>
C) Array size is the sum of sizes of all elements of the array.<br>
<b>D) All the above</b><br>

3) What are the Types of Arrays?<br>
A) int, long, float, double<br>
B) struct, enum<br>
C) char<br>
<b>D) All the above</b><br>

4) An array Index starts with?<br>
A) -1<br>
<b>B) 0</b><br>
C) 1<br>
D) 2<br>

5) Choose a correct statement about C language arrays.<br>
A) An array size can not changed once it is created.<br>
B) Array element value can be changed any number of times<br>
C) To access Nth element of an array students, use students[n-1] as the starting index is 0.<br>
<b>D) All the above</b><br>
### Post Test<br>
Q 1. Choose the correct option to assing 1 or more elements in array at once in C?<br>
a. int[2];<br>
b. int['a','b'];<br>
<b>c. int[2] = {1,2};</b><br>
d. int{1,2};<br><br>

Q 2. What does the following declaration mean? <br>int (*ptr)[10];<br>
<b>a. ptr is a pointer to an array of 10 integers<br></b>
b. ptr is an array of 10 integers<br>
c. ptr is an pointer to array<br>
d. ptr is array of pointers to 10 integers<br>

Q 3. Does C perform array out of bound checking? What is the output of the following program? <br> int main()<br> {<br>int i;<br>int arr[5] = {0};<br>for (i = 0; i <= 5; i++)<br>printf('%d', arr[i]);<br>return 0;<br>}"<br>
a. Compiler Error: Array index out of bound.<br>
<b>b. The program may print 0 five times followed by garbage value, or may crash if address (arr+5) is invalid.<br></b>
c. The program always crashes.<br>
d. None of them<br>

Q 4. Predict output of following program.<br>int main()<br>   {<br>int i;<br>int arr[5] = {1};<br>for (i = 0; i < 5; i++)<br>printf('%d', arr[i]);<br>return 0;<br>}"<br>
a. 1 followed by four garbage values<br>
<b>b. 1 0 0 0 0<br></b>
c. 1 1 1 1 1<br>
d. 0 0 0 0 0<br>

Q 5. Predict the output of below program.<br>#include <stdio.h><br> int main()<br> { <br>int arr[5];<br>arr[0]=2;  <br>printf('%d', arr[0]+5);  <br>return 0; <br>}<br>
a. 20<br>
b. 2<br>
<b>c. 7<br></b>
d. None<br></b><br>
### References<br>

