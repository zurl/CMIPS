/**
 *  @file
 *  @author zcy <zurl@live.com>
 *  Created at 2/2/2017
 */
export default`
   void main(int e, int d){
        int a; int *b; int c;
        a = 1 + d;
        e = a + 1;
        *b = 1;
        *b = a + 2;
        a = *b;
        b = &a;
        c = e;
        c = ( 6 * e + 6 ) + 4;
   }
   int func(int d, int e){
        int a;
        a = 1;
   }
`
const a =
`
        *b = 2 + a;
        b = &c;`;
/*
 a = 5         a = 5
 t1 = a + 1    e = 6
 e = t1
 t2 = 6 * e
 t3 = t2 + 6
 t4 = t3 + 4
 c = t4
 */