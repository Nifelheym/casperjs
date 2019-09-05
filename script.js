
const casper = require('casper').create({
    pageSettings: {
        loadImages: false,//The script is much faster when this field is set to false
        loadPlugins: false,
        userAgent: 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36'
    }
});
const mouse = require("mouse").create(casper);
// casper.start('https://flashobmen.com/');    
casper.start().thenOpen("https://flashobmen.com", function() {
    console.log("website opened");
});
// вход
casper.then(function() {
    casper.waitForSelector('form[method="post"]', function() {
        casper.fillSelectors('form[method="post"]', {
          'input[name="login"]': 'Mambares@yandex.ru',
          'input[name="pass"]': 'JNDJASKDNhb123ads'
        }, true);
      });
});
// переход на начальную страницу после авторизации

casper.thenOpen("https://flashobmen.com", function() {
    console.log("website opened");
    this.wait('3000', function() {
        console.log('timer')
    });
});
// тык по клавише обмена на

casper.then(function(){
    // this.wait('3000', function() {
    this.click('div.otdaete_wrap div.qiwi_rub_obmen_btn span');
    // })
});
casper.then(function(){
    this.wait('2000', function() {
    this.click('div[num_recive="recive_1"] div.ethereum_obmen_btn span');
    })
});


// заполнение полей

casper.then(function() {
    // this.wait('3000', function() {
    casper.waitForSelector('form[method="post"]', function() {
        casper.fillSelectors('form[method="post"]', {
          'input[name="send_summ"]': '5000',
          'input[name="send_wallet"]': '+79999999999',
          'input[name="recive_summ"]': '1.42262738',
          'input[name="recive_wallet"]': '0xDeF149d3718e5aa254c5D8a39751E6F2fE3E9A19',
          'input[name="user_email"]': 'Mambares@yandex.ru',
          'input[name="user_phone"]': '89999999999',
        }, true);
      });
    // });
});

// подтверждение операции

casper.then(function(){
    this.wait('1500', function(){
    this.click('input[name="order_confirm_btn"]');
    });
});

casper.then(function(){
    this.wait('3000', function(){
        this.capture('AfterLogin.png'); 
    });
    console.log("Make a screenshot and save it as AfterLogin.png");
});
casper.run();