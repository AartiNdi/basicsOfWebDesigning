#include<iostream>
using namespace std;

int sievePrime(int b,int a){
	bool *num=new bool[a+1];
	int i,j,k;
	for(i=0;i<a+1;i++)
		num[i]=true;
	for(i=2;i<a+1;){
		for(j=2;j*i<a+1;j++)
			num[i*j]=false;
		for(k=i;k<a+1;k++)
			if(num[k]){
				i=k;
				break;
			}
		}
	for(i=b;i<a+1;i++)
		if(num[i])
			cout<<i<<endl;
}		

int main(){
	int T=0,j=0,i=0;
    cin>>T;
    int *ar=new int[T];
    int *res=new int[T];
    for(i=0;i<T;i++)
		cin>>ar[i]>>res[i];
	for(i=0;i<T;i++)
		sievePrime(ar[i],res[i]);
	return 0;
}
