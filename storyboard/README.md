## Storyboard (Round 2)

Experiment 3:  Write a program that simply takes elements of array from the user and finds the sum of these elements.

### 1. Story Outline:

An array is a collection of similar types of data. It is a container that holds data (values) of one single type. we will detail in on all the ways to add elements and find the sum of all array elements in C programming.

### 2. Story:

This experiment is based on takes elements of array from user and sum of all those elements. The experiment will start by the input of size of array, student will have to give elements of array as a input. And the program will add those elements to array and after that user will find the sum of all those array elements at the execution of program. And this is how the program will give the sum of all array elements.

#### 2.1 Set the Visual Stage Description:

Simulator starts with the experiment name on the top and show the code in code block. Simulator consist of three blocks, at the left click on NEXT, the simulator asks for size of array. User will have to give size of array and then click on ENTER button after that simulator asks for array elements input from the user. User will have to give array elements and then click on <b>ENTER</b>. After that array elements will show in the memory block of the simulator. And then the user will have to press next until the program finishes. At the execution of the program user will get the sum of array elements and will show in the memory block of the simulator. 


#### 2.2 Set User Objectives & Goals:


1. The main objective of the user is to get sum of array elements.
2. To get to know about the algorithm of sum of array elements.
3. To understand how to assign the elements to array.
4. User need to answer some question based on the experiment. 


#### 2.3 Set the Pathway Activities:

1. User start the simulator.
2. User click on NEXT.
3. Code runs. 
4. User click on NEXT.
5. Simulator asks for size of array.
6. User inputs the value and click on <b>ENTETR</b>.
7. Simulator asks for the value of array elements.
8. User inputs the value of array elements and click on <b>SUBMIT</b>.
9. The value of num2 will assign to the value of num1.
10. Array elements will show in the memory block of simulator.
11. Click on NEXT.
12. Array Elements will be added till user click on NEXT.
13. User will get sum of array elements at the execution of the program.
14. Program finished.

##### 2.4 Set Challenges and Questions/Complexity/Variations in Questions:


Difficuty level: Evaluate<br>
Q1- Predict output of following program.<br>
             int main()<br>
                {<br>
             int i;<br>
             int arr[5] = {1};<br>
             for (i = 0; i < 5; i++)<br>
             printf("%d ", arr[i]);<br>
             return 0;<br>
             }<br>

(a) 1 followed by four garbage values <br>
(b) 1 1 1 1 1 <br>
<b>(c) 1 0 0 0 0 </b> <br>
(d) 0 0 0 0 0 <br>

Difficuty level: Evaluate<br>
Q2- Does C perform array out of bound checking? What is the output of the following program? <br>
                              int main()<br>
                                {<br>
                               int i;<br>
                               int arr[5] = {0};<br>
                               for (i = 0; i <= 5; i++)<br>
                               printf("%d ", arr[i]);<br>
                               return 0;<br>
                               } <br>
                                  
(a) Compiler Error: Array index out of bound. <br>
<b>(b) The program may print 0 five times followed by garbage value, or may crash if address (arr+5) is invalid.</b> <br>
(c) The program always crashes.<br>
(d) None of them<br>

Difficulty level: Apply<br>
Q3- What does the following declaration mean?<br><br>
        int (*ptr)[10];<br> 

<b>(a)ptr is a pointer to an array of 10 integers</b><br>
(b) ptr is an array of 10 integers<br>
(c) ptr is an pointer to array<br>
(d) ptr is array of pointers to 10 integers<br>


Difficulty level: Evaluate<br>
Q4- In C, if you pass an array as an argument to a function, what actually gets passed ?<br>
<b>(a) First element of the array</b><br>
(b) Base address of the array<br>
(c) Value of elements in array<br>
(d) Address of the last element of array<br>

Difficulty level: Apply<br>
Q5-  Predict the output of below program.<br>
            #include <stdio.h><br> 
            int main()<br>
               { <br>
            int arr[5];<br>
            // Assume that base address of arr is 2000 and size of integer <br>
            // is 32 bit  <br>
            arr++;  <br>
            printf("%u", arr);  <br>
            return 0; <br>
            }  <br>
(a) 2020<br>
<b>(b) lvalue required</b><br>
(c) 2004<br>
(d) None of above<br>


##### 2.5 Allow pitfalls:

There are pitfalls in the simulator, mentioned below:
1. program will not perform if user will give more than 10 number in size of array.
2. User will get an "please provide inputs" message if user presses enter without giving input.
3. User will get an error message if user enter string(alphabets or symbols) input.
4. User should not enter less than size of array.

##### 2.6 Conclusion:

In this whole experiment, User will be able to learn deep concepts after implementing things by doing hands-on tasks. This contains tasks separately to each learning objective mentioned by us. Generally, it will take almost half an hour to perform the experiment and to grasp the concept fully. Based on the successful completion of the experiment, user will be able to uderstand the algorithm of sum of array. And simulator expalains easliy how this whole process is done and how the logic behind this process works. Hence with this, all the mentioned learning outcomes can be taken with the user.

##### 2.7 Equations/formulas: NA
int i, n;<br>
printf("Input the number of elements to be stored in the array :");<br>
       scanf("%d",&n);<br> 
printf("Input %d elements in the array :\n",n);<br>
      { <br>
      printf("element - %d : ",i); <br>
       scanf("%d",&a[i]); <br>
       } <br>
for(i=0; i<n; i++)<br>
   { <br>
      sum += a[i]; <br>
   }<br>

### 3. Flowchart 4
<img src="flowchart/flowchart.png"/><br>

<br>

### 4. Mindmap:
<img src="mindmap/mindmap.png"/>
<br>
 
### 5. Storyboard :
Storyboard: <a href="Storyboard/carwiper.gif"> [here]</a>
