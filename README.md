# casperjs
folder flashobmen for 6 shops

casperjs --proxy=93.170.130.193:50147 --proxy-auth=hahlesei:Ov5WvYmc  --cookies-file=cookies.txt  auth.js

casperjs --proxy=93.170.130.193:50147 --proxy-auth=hahlesei:Ov5WvYmc  --cookies-file=cookies.txt  buy.js


# получит параметр тест из командной строки который является сайтом и будет работать с ним (для связи бэкенда и скриптов взаимодействия с магазинами)
casper.start(casper.cli.get('test'));

casperjs --proxy=93.170.130.193:50147 --proxy-auth=hahlesei:Ov5WvYmc  --cookies-file=cookies.txt --test='https://fastexchange.center'  auth.js 

# запрос командной строки для Flashobmen & etc authorization
 
casperjs --proxy=93.170.130.193:50147 --proxy-auth=hahlesei:Ov5WvYmc  --cookies-file=cookies.txt --url='https://fastexchange.center' --email='Mambares@yandex.ru' --pass='JNDJASKDNhb123ads'  auth.js 

# валтюты 

ethereum
dogecoin
bitcoin

# запрос командной строки для Flashobmen & etc buy

casperjs --proxy=93.170.130.193:50147 --proxy-auth=hahlesei:Ov5WvYmc  --cookies-file=cookies.txt --url='https://fastexchange.center' --email='Mambares@yandex.ru'  --summ='5000' --sendWallet='+79999999981' --reciveSumm='1.4' --reciveWallet='0xDeF149d3718e5aa254c5D8a39751E6F2fE3E9A19' --phone='+79999999911' --valuta='ethereum' buy.js 

# for 365 cash
 casperjs --proxy=93.170.130.193:50147 --proxy-auth=hahlesei:Ov5WvYmc  --cookies-file=cookies.txt --url='https://365cash.co' --email='Mambares@yandex.ru'  --summ='5000' --sendWallet='+79999999981' --reciveSumm='1.4' --reciveWallet='0xDeF149d3718e5aa254c5D8a39751E6F2fE3E9A19' --phone='+79999999911' --valuta='DASH' buy.js 

 где --valuta = DASH || ZEC || ETH || BTC || BCH 

