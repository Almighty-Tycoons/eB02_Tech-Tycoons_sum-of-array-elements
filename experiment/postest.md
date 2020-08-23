## Post test
<br>
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

Q 5. Predict the output of below program.<br>#include <stdio.h><br> int main()<br> { <br>int arr[5];<br>arr[0]=2;  <br>printf('%d', arr[0]+5);  <br>return 0; <br>}"<br>
a. 20<br>
b. 2<br>
<b>c. 7<br></b>
d. None<br></b>
