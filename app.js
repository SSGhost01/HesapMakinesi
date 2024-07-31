//buradan tüm butonları çağırıp btn ue atadık
const btn = document.getElementsByTagName("button")
//burada ekranı çağırdık
const ekran = document.getElementById("ekran")
//buraya eşittir işareti çağırdık
const calc = document.getElementById("calculate")
//for döngüsü ile 0dan başlayarak 16ya kadar artırarak dön
const clear = document.getElementById("clear")
for(let i=0; i< 16; i++){   
    //eğer 12 ve 14 eşit değilse çalışsın yani c ve =i ekrana yazdırmak istemiyorum
    if(i !=12 && i!=14){
        //i sıfırdan  15e kadar olabilir 
        //burada  butona tıklandığında yaz fonkisyonu çalışacak 
        btn[i].addEventListener("click",yaz)
    }
  
  }
  //burada c ye tıklanınca clear fonksiyonu çalışacak

//bu fonksiyon çalışınca ekrana seçili buton değeri yazdırır

function yaz (){
   ekran.value = ekran.value + this.value
}
//burada eşittirse tıklanınca hesapla fonksiyon çalışacak
calc.addEventListener("click",hesapla)
//bu fonksiyon çalışınca yazılan değerleri eva1 ile hesaplayacak
function hesapla (){
    ekran.value = eval(ekran.value)
}
clear.addEventListener("click",sil)
function sil (){
    ekran.value=""
}