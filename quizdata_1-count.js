//หลักการนับ
//ตัวแปรส่วนโครงสร้างข้อสอบ
//ยังไม่ได้ปรับแก้
var ex = []
var  a = []
var  b = []
var  c = []
var  d = []

//ตัวแปรในข้อสอบแต่ละข้อ
var n = []
var x = []
var y = []
var z = []
var nx = []
var ny = []
var nz = []

//1 `
  for(let i =1; i<=4; i++){
    x[i] = random(2, 9)
    y[i] = random(2, 9)
    z[i] = random(2, 9)
    ex[i]= "ร้านอาหารแห่งหนึ่งมีอาหารไทย "+x[i]+" อย่าง อาหารจีน "+y[i]+" อย่าง และอาหารเกาหลี "+z[i]+" ถ้าเลือกอาหารได้เพียงอย่างเดียวจะมีวิธีเลือกได้กี่วิธี"
     a[i]= ""+(x[i]+y[i]+z[i])+" วิธี"
     b[i]= ""+(x[i]*y[i]*z[i])+" วิธี"
     c[i]= ""+(x[i]+y[i]+z[i])+"! วิธี"
     d[i]= ""+x[i]+"!+"+y[i]+"!+"+z[i]+"! วิธี"
  }
 //2 `
 for(let i =5; i<=8; i++){
  x[i] = random(2, 9)
  y[i] = random(2, 9)
  ex[i]= "การเดินทางจากตำบล A ไปตำบล B สามารถไปทางถนนได้ "+x[i]+" เส้นทาง ไปทางลำคลองได้ "+y[i]+" เส้นทาง หากเดินทางได้เพียงถนน หรือลำคลอง เพียงอย่างเดียว จะมีวิธีเดินทางได้กี่วิธี"
   a[i]= ""+(x[i]+y[i])+" วิธี"
   b[i]= ""+(x[i]*y[i])+" วิธี"
   c[i]= ""+(x[i]+y[i])+"! วิธี"
   d[i]= ""+(x[i]*y[i])+"! วิธี"
 }
 //3 `
 for(let i =9; i<=12; i++){
  x[i] = random(2, 9)
  y[i] = random(2, 9)
  
  ex[i]= "ร้านอาหารแห่งหนึ่งมีอาหารคาว "+x[i]+" อย่าง และขนม "+y[i]+" อย่าง ถ้าต้องการอาหารคาว 1 อย่าง ขนม 1 อย่าง จะมีวิธีเลือกได้กี่วิธี"
   a[i]= ""+(x[i]*y[i])+" วิธี"
   b[i]= ""+(x[i]+y[i])+" วิธี"
   c[i]= ""+(x[i]*y[i])+"! วิธี"
   d[i]= ""+(x[i]+y[i])+"! วิธี"
 }
 //4 `
 for(let i =13; i<=16; i++){
  x[i] = random(2, 9)
  y[i] = random(2, 9)
  
  ex[i]= "ต้องการเดินทางจากกรุงเทพฯ ไปเชียงใหม่ โดยแวะที่นครสวรรค์ ถ้าจากกรุงเทพฯ ไปนครสวรรค์มี "+x[i]+" เส้นทาง และจากนครสวรรค์ไปเชียงใหม่มี "+y[i]+" เส้นทาง จะมีวิธีเดินทางกี่วิธี"
  a[i]= ""+(x[i]*y[i])+" วิธี"
  b[i]= ""+(x[i]+y[i])+" วิธี"
  c[i]= ""+(x[i]*y[i])+"! วิธี"
  d[i]= ""+(x[i]+y[i])+"! วิธี"
 }
 //5 `
 for(let i =17; i<=20; i++){
  n[i] = random(4, 10)
  ex[i]= "เรียงเลขโดด 2 ตัว จาก 1 ถึง "+n[i]+" จะได้กี่จำนวน"
  a[i]= "`"+(n[i]**2)+"\\ `จำนวน"
  b[i]= "`"+(n[i]*(n[i]-1))+"\\ `จำนวน"
  c[i]= "`"+(n[i]*2)+"\\ `จำนวน"
  d[i]= "`"+(n[i]+(n[i]-1))+"\\ `จำนวน"
  }
  //6 `
  for(let i =21; i<=24; i++){
    n[i] = random(4, 10)
    ex[i]= "เรียงเลขโดด 2 ตัว จาก 1 ถึง "+n[i]+" โดยไม่ใช้ตัวเลขซ้ำ จะได้กี่จำนวน"
    a[i]= "`"+(n[i]*(n[i]-1))+"\\ `จำนวน"
    b[i]= "`"+(n[i]**2)+"\\ `จำนวน"
    c[i]= "`"+(n[i]*2)+"\\ `จำนวน"
    d[i]= "`"+(n[i]+(n[i]-1))+"\\ `จำนวน"
  }
  
  //7 `
  for(let i =25; i<=28; i++){
    n[i] = random(4, 10)
    ex[i]= "เรียงเลขโดด 2 ตัว จาก 0 ถึง "+n[i]+" จะได้กี่จำนวน"
    a[i]= "`"+(n[i]*(n[i]+1))+"\\ `จำนวน"
    b[i]= "`"+(n[i]**2)+"\\ `จำนวน"
    c[i]= "`"+(n[i]*2)+"\\ `จำนวน"
    d[i]= "`"+(n[i]+(n[i]-1))+"\\ `จำนวน"
  }
  
  //8 `
  for(let i =29; i<=32; i++){
    n[i] = random(4, 10)
    ex[i]= "เรียงเลขโดด 2 ตัว จาก 0 ถึง "+n[i]+" โดยไม่ใช้ตัวเลขซ้ำ จะได้กี่จำนวน"
    a[i]= "`"+(n[i]**2)+"\\ `จำนวน"
    b[i]= "`"+(n[i]*(n[i]-1))+"\\ `จำนวน"
    c[i]= "`"+(n[i]*2)+"\\ `จำนวน"
    d[i]= "`"+(n[i]*(n[i]+1))+"\\ `จำนวน"
  }
  
  //9 `
  for(let i =33; i<=36; i++){
    n[i] = random(4, 10)
    let r = divide(n[i],2)
    let nr = r.quotient + r.remainder 
    ex[i]= "เขียนจำนวนคี่ 2 หลัก จาก 0 ถึง "+n[i]+" จะได้กี่จำนวน"
    a[i]= "`"+(n[i]*nr)+"\\ `จำนวน"
    b[i]= "`"+(n[i]*(n[i]-1))+"\\ `จำนวน"
    c[i]= "`"+(n[i]*2)+"\\ `จำนวน"
    d[i]= "`"+(n[i]*(n[i]+1))+"\\ `จำนวน"
  }
  
  //10 `
  for(let i =37; i<=40; i++){
    n[i] = random(4, 15)
    let r = divide(n[i],2)
    let nr = r.quotient + 1 
    ex[i]= "เขียนจำนวนคู่ 2 หลัก จาก 0 ถึง "+n[i]+" จะได้กี่จำนวน"
    a[i]= "`"+(n[i]*nr)+"\\ `จำนวน"
    b[i]= "`"+(n[i]*(n[i]-1))+"\\ `จำนวน"
    c[i]= "`"+(n[i]*2)+"\\ `จำนวน"
    d[i]= "`"+(n[i]*(n[i]+1))+"\\ `จำนวน"
  }
  
  //11 `
  for(let i =41; i<=44; i++){
    n[i] = random(4, 15)
    ex[i]= "ข้อสอบแบบกาถูกผิด จำนวน "+n[i]+" ข้อ จะมีวิธีทำข้อสอบทั้งหมดกี่วิธี"
    a[i]= "`"+(2**n[i]).toLocaleString()+"\\ `วิธี"
    b[i]= "`"+(n[i]*(n[i]-1))+"\\ `วิธี"
    c[i]= "`"+(n[i]**2).toLocaleString()+"\\ `วิธี"
    d[i]= "`"+(n[i]*(n[i]+1))+"\\ `วิธี"
  }
  
  //12 `
  for(let i =45; i<=48; i++){
    x[i] = random(2, 9)
    y[i] = random(2, 9)
    ex[i]= "นักเรียนคนหนึ่งจะได้ของขวัญปีใหม่ 1 ชิ้น โดยให้เลือกเป็นแก้วน้ำจำนวน "+x[i]+" แบบ หรือเป็นถุงผ้า "+y[i]+" แบบ นักเรียนคนนี้จะเลือกของขวัญได้กี่วิธี"
    a[i]= "`"+(x[i]+y[i]).toLocaleString()+"\\ `วิธี"
    b[i]= "`"+(x[i]*(y[i])).toLocaleString()+"\\ `วิธี"
    c[i]= "`"+((x[i]+1)*(y[i])).toLocaleString()+"\\ `วิธี"
    d[i]= "`"+(x[i]*(y[i]+1)).toLocaleString()+"\\ `วิธี"
  }

  //13 `
  for(let i =49; i<=52; i++){
    x[i] = random(2, 9)
    y[i] = random(2, 9)
    z[i] = random(2, 9)
    ex[i]= "ถ้าต้องการเดินทางจากกรุงเทพฯไปเชียงใหม่ โดยสามารถเดินทางโดยเครื่องบินได้ "+x[i]+" สายการบิน หรือโดยรถทัวร์ "+y[i]+" บริษัท และรถไฟ "+z[i]+" เที่ยว จะมีวิธีเดินทางได้กี่วิธี"
    a[i]= "`"+(x[i]+y[i]+z[i]).toLocaleString()+"\\ `วิธี"
    b[i]= "`"+(x[i]*y[i]*z[i]).toLocaleString()+"\\ `วิธี"
    c[i]= "`"+(x[i]*y[i]+z[i]).toLocaleString()+"\\ `วิธี"
    d[i]= "`"+(x[i]+y[i]*z[i]+1).toLocaleString()+"\\ `วิธี"
  }
  
  //14 `
  for(let i =53; i<=56; i++){
    x[i] = random(3, 10)
    ex[i]= "โยนเหรียญหนึ่งเหรียญ จำนวน "+x[i]+" ครั้ง จะได้ผลลัพธ์ต่าง ๆ กันทั้งหมดกี่วิธี"
    a[i]= "`"+(2**x[i]).toLocaleString()+"\\ `วิธี"
    b[i]= "`"+(x[i]**2).toLocaleString()+"\\ `วิธี"
    c[i]= "`"+(x[i]*2).toLocaleString()+"\\ `วิธี"
    d[i]= "`"+(x[i]+2).toLocaleString()+"\\ `วิธี"
  }
  
  //15 `
  for(let i =57; i<=60; i++){
    x[i] = random(2, 9)
    y[i] = random(2, 9)
    z[i] = random(2, 9)
    ex[i]= "สมชายมีกางเกงที่แตกต่างกัน "+x[i]+" ตัว เสื้อที่แตกต่างกัน "+y[i]+" ตัว และเนคไทแตกต่างกัน "+z[i]+" เส้น สมชายจะมีวิธแต่งตัวกี่วิธี"
    a[i]= "`"+(x[i]*y[i]*z[i]).toLocaleString()+"\\ `วิธี"
    b[i]= "`"+(x[i]+y[i]+z[i]).toLocaleString()+"\\ `วิธี"
    c[i]= "`"+(x[i]*y[i]+z[i]).toLocaleString()+"\\ `วิธี"
    d[i]= "`"+(x[i]+y[i]*z[i]+1).toLocaleString()+"\\ `วิธี"
  }
  
  //16 `
  for(let i =61; i<=64; i++){
    x[i] = random(3, 6)
    ex[i]= "จำนวนเต็มบวกที่มี "+x[i]+" หลัก มีทั้งหมดกี่จำนวน"
    a[i]= "`"+(9*(10**(x[i]-1))).toLocaleString()+"\\ `จำนวน"
    b[i]= "`"+(10**x[i]).toLocaleString()+"\\ `จำนวน"
    c[i]= "`"+(10**x[i]-1).toLocaleString()+"\\ `จำนวน"
    d[i]= "`"+(x[i]*10**x[i]).toLocaleString()+"\\ `จำนวน"
  }
  
  //17 `
  for(let i =65; i<=68; i++){
    x[i] = random(3, 6)
    ex[i]= "จำนวนเต็มบวกที่มี "+x[i]+" หลัก ที่เลขโดดในหลักแรกและหลักสุดท้ายไม่ซ้ำกัน มีทั้งหมดกี่จำนวน"
    a[i]= "`"+((9**2)*(10**(x[i]-2))).toLocaleString()+"\\ `จำนวน"
    b[i]= "`"+(10**x[i]).toLocaleString()+"\\ `จำนวน"
    c[i]= "`"+(10**x[i]-1).toLocaleString()+"\\ `จำนวน"
    d[i]= "`"+(9*(10**(x[i]-1))).toLocaleString()+"\\ `จำนวน"
  }
  
  //18 `
  for(let i =69; i<=72; i++){
    x[i] = random(3, 6)
    ex[i]= "จำนวนเต็มบวกที่มี "+x[i]+" หลัก ที่เลขโดดในหลักแรกและหลักสุดท้ายรวมกันได้ 10 มีทั้งหมดกี่จำนวน"
    a[i]= "`"+(9*(10**(x[i]-2))).toLocaleString()+"\\ `จำนวน"
    b[i]= "`"+(10**x[i]).toLocaleString()+"\\ `จำนวน"
    c[i]= "`"+(10**x[i]-1).toLocaleString()+"\\ `จำนวน"
    d[i]= "`"+(9*(10**(x[i]-1))).toLocaleString()+"\\ `จำนวน"
  }
  
  //19 `
  for(let i =73; i<=76; i++){
    x[i] = random(2, 6)
    let p = x[i]*2
    ex[i]= "จงหาว่าพาลินโดรม (palindrome) ที่ประกอบด้วยตัวอักษรภาษาอังกฤษ "+p+" ตัว โดยที่จะมีความหมายหรือไม่ก็ได้ มีทั้งหมดกี่คำ"
    a[i]= "`26^"+(x[i]).toLocaleString()+"\\ `คำ"
    b[i]= "`26^"+(p).toLocaleString()+"\\ `คำ"
    c[i]= "`26xx"+(x[i]).toLocaleString()+"\\ `คำ"
    d[i]= "`26xx"+(p).toLocaleString()+"\\ `คำ"
  }

  //20 `
  for(let i =77; i<=80; i++){
    x[i] = random(2, 10)
    ex[i]= "ถ้าทอดลูกเต๋าหนึ่งลูก "+x[i]+" ครั้ง จงหาจำนวนวิธีที่แต้มที่ได้จากการทอดลูกเต๋าทั้ง "+x[i]+" ครั้งเท่ากัน"
    a[i]= "`6 \\ ` วิธี"
    b[i]= "`6^"+(x[i]).toLocaleString()+"\\ `วิธี"
    c[i]= "`6xx"+(x[i]).toLocaleString()+"\\ `วิธี"
    d[i]= "`9 \\ `วิธี"
  }
  
  //21 `
  for(let i =81; i<=84; i++){
    x[i] = random(6, 15)
    ex[i]= "ถ้าทอดลูกเต๋าหนึ่งลูก "+x[i]+" ครั้ง จงหาจำนวนวิธีที่แต้มที่ได้จากการทอดลูกเต๋าทั้ง "+x[i]+" ครั้งต่างกัน"
    a[i]= "`"+Pnr(6,x[i])+"\\ ` วิธี"
    b[i]= "`6^"+(x[i]).toLocaleString()+"\\ `วิธี"
    c[i]= "`"+(6*x[i]).toLocaleString()+"\\ `วิธี"
    d[i]= "`"+x[i]+" \\ `วิธี"
  }
  
  //22 `
  for(let i =85; i<=88; i++){
    x[i] = random(6, 12)
    ex[i]= "ห้างสรรพสินค้าแห่งหนึ่งมีประตูเข้าออก "+x[i]+" ประตู ถ้าน้อยหน่าต้องการเข้าและออกห้างสรรพสินค้าแห่งนี้ โดยไม่ใช้ประตูซ้ำกัน น้อยหน่าจะสามารถเลือกประตูเข้าออกได้กี่วิธี"
    a[i]= "`"+Pnr(x[i],2)+"\\ ` วิธี"
    b[i]= "`"+(x[i]*2).toLocaleString()+"\\ `วิธี"
    c[i]= "`"+x[i].toLocaleString()+"\\ `วิธี"
    d[i]= "`"+nFact(x[i])+" \\ `วิธี"
  }
  
  //23 `
  for(let i =89; i<=92; i++){
    x[i] = random(3, 9)
    ex[i]= "มีจดหมายที่แตกต่างกัน "+x[i]+" ฉบับ และมีตู้จดหมายที่แตกต่างกัน "+(x[i]+1)+" ตู้ จะมีวิธีนำจดหมายไปใส่ในตู้ได้ทั้งหมดกี่วิธี"
    a[i]= "`"+(x[i]+1)+"^"+x[i]+"\\ ` วิธี"
    b[i]= "`"+(x[i]+1)+"xx"+x[i]+"\\ `วิธี"
    c[i]= "`"+(x[i])+"^"+(x[i]+1)+"\\ ` วิธี"
    d[i]= "`"+(x[i])+"! \\ `วิธี"
  }
  
  //24 `
  for(let i =93; i<=96; i++){
    x[i] = random(3, 9)
    ex[i]= "มีจดหมายที่แตกต่างกัน "+x[i]+" ฉบับ และมีตู้จดหมายที่แตกต่างกัน "+(x[i]+1)+" ตู้ จะมีวิธีนำจดหมายไปใส่ในตู้ได้ทั้งหมดกี่วิธี โดยไม่ให้ใส่จดหมายซ้ำตู้กัน"
    a[i]= "`"+(x[i])+"! \\ `วิธี"
    b[i]= "`"+(x[i]+1)+"xx"+x[i]+"\\ `วิธี"
    c[i]= "`"+(x[i])+"^"+(x[i]+1)+"\\ ` วิธี"
    d[i]= "`"+(x[i]+1)+"^"+x[i]+"\\ ` วิธี"
  }

function random(min,max){
	return Math.floor(Math.random()*(max-min+1)+min);
}