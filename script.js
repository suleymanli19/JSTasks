// 1. Verilmiw ededin kokunu konsola cixarin
let a = 5;
let b = a ** 2;
console.log(b)

//2. Verilmiw x ve y ededlerinin ededi ortalarini tapin
let x;
let y;
let z = (x + y) / 2
console.log(z)

//3. t ve r ededlerini ele paylayin ki, t onlarin boyuyu, r ise onlarin en kiciyi olsun. IN -3 8 OUT 8 -3
let t = 8;
let r = 3;
if(t > r) console.log(t, r)
else console.log(r, t)

//4. ikireqemli tam eded verilib. onun cut olub-olmadigini mueyyenlewdirin. IN 25 OUT No
let u = 25;
let k = u % 2;
if(k !== 0) console.log("NO")
else console.log("YES")

//5. ucreqemli musbet tam eded verilib. hemin ededin bawlangicina ve sonuna 3 reqemini yazmagla yeni eded alin. IN 123 OUT 31233   
let q = 123;
let s = "3"
let f = s + q + s
console.log(f) //bu bele bir duwuncedi
//digeri bele ola biler
let q1 = 123;
let s1 = q1 % 10;
let f1 = s1*10000 + q1*10 + s1;
console.log(f1) //bu sadece elave yoldu :)