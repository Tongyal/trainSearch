

#include<bits/stdc++.h>
using namespace std; 

int main(){

string str="Ripon";

unsigned long hash = 5381;
int c;
int i=0;
while (c = str[i]++)
hash= ((hash << 5) +hash) +c; /* hash * 33+c */
cout<< hash;



return 0;
}