// логика такая же как у платов но почему-то при нажатии на нужные валюты форма не выскакивает

function createForm(url, summ, sendWallet, reciveSumm, reciveWallet, email, phone) {
    // let self = this;
    
    const casper = require('casper').create({
        pageSettings: {
            loadImages: true,//The script is much faster when this field is set to false
            loadPlugins: true,
            userAgent: 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36'
        }
    });
    casper.start(url);    
    // // тык по клавише обмена на
    
    casper.then(function(){
        this.wait('3000', function() {
        this.click('div.col-md-12.single-price.source-currency[export-code="QWRUB"]');
        });
    });
    casper.then(function(){
        this.wait('3000', function() {
        // casper.waitForSelector('div[class="card-body"]', function() {
        this.click('div.col-md-12.single-price.target-currency[export-code="ETH"]');
        // })
    });
    });
    
    
    // заполнение полей
    
    // casper.then(function() {
    //     // this.wait('3000', function() {
    //     casper.waitForSelector('form[method="post"][class="user_obmen_form"]', function() {
    //         casper.fillSelectors('form[method="post"]', {
    //           'input[name="send_summ"]': summ,
    //           'input[name="send_wallet"]': sendWallet,
    //           'input[name="recive_summ"]': reciveSumm,
    //           'input[name="recive_wallet"]': reciveWallet,
    //           'input[name="user_email"]': email,
    //           'input[name="user_phone"]': phone,
    //         }, true);
    //       });
    //     // });
    // });
    
    // подтверждение операции
    
    // casper.then(function(){
    //     this.wait('2000', function(){
    //     this.click('input[name="order_confirm_btn"]');
    //     });
    // });
    
    // casper.then(function(){
    //     casper.waitForSelector('div[id="exchange-form"]', function() {
    //         this.capture('AfterLogin.png');
    //         console.log("Make a screenshot and save it as AfterLogin.png");
    //     // this.click('div.col-md-12.single-price.target-currency[export-code="LTC"]');
    //     })
    // });
    casper.then(function(){
        this.wait('3000', function(){
            this.capture('AfterLogin.png'); 
        });
        console.log("Make a screenshot and save it as AfterLogin.png");
    });
    casper.run();
    
    }
    
    // let url = 'https://fastexchange.center';
    // let summ = '5000';
    // let sendWallet = '+79999999981';
    // let reciveSumm = '1.4';
    // let reciveWallet = '0xDeF149d3718e5aa254c5D8a39751E6F2fE3E9A19';
    // let email = 'Mambares@yandex.ru';
    // let phone = '+79999999911';
    
    createForm('https://ramon.cash', '5000', '+79999999981', '1.4', '0xDeF149d3718e5aa254c5D8a39751E6F2fE3E9A19', 'Mambares@yandex.ru', '+79999999911');