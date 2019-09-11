function createForm(url, summ, sendWallet, reciveWallet, email) {
    // let self = this;
    
    const casper = require('casper').create({
        verbose: true,
        pageSettings: {
            loadImages: false,//The script is much faster when this field is set to false
            loadPlugins: false,
            userAgent: 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36'
        },
        logLevel: "debug"
    });
    casper.start(url);    
    // // тык по клавише обмена на
    // casper.then(function (){
    //     this.page.sendEvent('keypress', this.page.event.key.Tab);
    //     this.page.sendEvent('keypress', this.page.event.key.Space);
    //   });
      
    casper.then(function(){
        this.wait('3000', function() {
        this.click('div[data-direct="from"]');
        // this.click('ul#to button.btn.btn-link.show-all');
        });
    });
    // casper.then(function(){
    //     this.wait('3000', function() {
    //     // casper.waitForSelector('div[class="topics"]', function() {
    //     this.click('ul#to.ps-list>li[data-seo="ethereum"]');
    //     })
    //     // });
    // });
    
    
    // заполнение полей
    
    // casper.then(function() {
    //     // this.wait('3000', function() {
    //     casper.waitForSelector('form[id="exchange-form"]', function() {
    //         casper.fillSelectors('form[id="exchange-form"]', {
    //           'input[id="source-amount"]': summ,
    //           'input[id="sender-card"]': sendWallet,
    //         //   'input[id="target-amount"]': reciveSumm,
    //           'input[id="wallet"]': reciveWallet,
    //           'input[id="email"]': email,
    //         //   'input[id="user_phone"]': phone,
    //         }, true);
    //       });
    //     // });
    // });
    // casper.then(function() {
    //     this.click('button#transaction-submit');
    // });

    casper.then(function(){
        this.wait('4000', function(){
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
    
    createForm('https://mchange.net/', '5000', '+79999999981', '0xDeF149d3718e5aa254c5D8a39751E6F2fE3E9A19', 'Mambares@yandex.ru');