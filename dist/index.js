"use strict";var S=function(v,r){return function(){try{return r||v((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var y=S(function(Y,b){
var D=require('@stdlib/math-base-special-sincos/dist').assign,E=require('@stdlib/constants-float64-two-pi/dist'),G=require('@stdlib/math-base-special-floor/dist'),H=require('@stdlib/fft-base-fftpack-decompose/dist'),J=[3,4,2,5];function K(v,r,a,u,f,n,_){var q,h,j,x,C,L,g,m,i,p,P,c,A,I,M,O,R,o;for(L=H(v,4,J,1,0,f,n,_),j=E/v,o=0,i=1,x=_+2*n,P=2*a,O=0;O<L;O++){for(q=f[x],m=q*i,I=G(v/m),p=0,C=2*I+2,R=1;R<q;R++){for(A=o,c=u+o*a,r[c]=1,r[c+a]=0,p+=i,h=p*j,g=1,c+=3*a,M=3;M<C;M+=2)D(g*h,r,-a,c),g+=1,c+=P;o+=2*I,q>5&&(r[u+A*a]=r[u+o*a],r[u+(A+1)*a]=r[u+(o+1)*a])}i=m,x+=n}}b.exports=K
});var B=S(function(Z,z){
var Q=y();function U(v,r,a,u){var f,n;if(v!==1)return f=u+2*v*a,n=f+2*v*a,Q(v,r,a,f,r,a,n),r}z.exports=U
});var V=B();module.exports=V;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
