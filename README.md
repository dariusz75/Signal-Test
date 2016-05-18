# Signal-Test
The task is to write a program that given any number between 0 and 1,000 inclusive, shows the grammatically-correct English phrase for this number.


Variables digits declared for numbers 1-9.
Variable numbers declared for 10-19.
Variables tens declared for 20, 30 ..... 90.
Variables hundred declared for 100.
Var stringed declared and a function assigned to convert given number into the string.
Var reversed declared and a function assigned to revers the characters in the string, so
the last number will always hav index 0, the second one will always have index 1, 
third one - index 2, and so on.

indexZero function is looping thru the reversed string, checking if conditions for index 0 and returning right value from digits array. 

indexOne function is looping thru the reversed string, checking if conditions for index 1 and returning right value from tens array. 

indexTwo function is looping thru the reversed string, checking if conditions for index 2 and returning right value from digits array. 

giveValue function is returning final strings combinations depending on conditions chcked in previous functions.

###UI to check - https://dariusz75.github.io/Signal-Test/index.html