In this program, we will learn how to initialize array and elements of array, indexing of array starts from zero(0).<br>
Finding the sum of array elements is easy when you know how to iterate through array elements.
The main purpose of this experiment is to demonstrate how to access array elements.
User will have to enter the size of the array and input the array elements, for entering values of array indexes students will use <b>lop (anyone form: for, while, do-while)<b>
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

Now the values of array elements are added.
