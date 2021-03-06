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
    casper.start(casper.cli.get('url'));    
    // // тык по клавише обмена на
    
    casper.then(function(){
        // this.wait('3000', function() {
        this.click('div.source-currency.faq-q[export-code="QWRUB"]');
        // });
    });
    casper.then(function(){
        this.wait('1000', function() {
        // casper.waitForSelector('div[class="topics"]', function() {
        // this.click('div.target-currency.faq-q[export-code="ETH"]');
        var stroka = 'div.target-currency.faq-q[export-code="' + casper.cli.get('valuta') + '"]'
        this.click(stroka);
        })
        // });
    });
    
    
    // заполнение полей
    
    casper.then(function() {
        // this.wait('3000', function() {
        casper.waitForSelector('form[id="exchange-form"]', function() {
            casper.fillSelectors('form[id="exchange-form"]', {
              'input[id="source-amount"]': casper.cli.get('summ'),
              'input[id="sender-card"]': casper.cli.get('sendWallet'),
            //   'input[id="target-amount"]': reciveSumm,
              'input[id="wallet"]': casper.cli.get('reciveSumm'),
              'input[id="email"]': casper.cli.get('reciveWallet'),
            //   'input[id="user_phone"]': phone,
            }, true);
          });
        // });
    });
    casper.then(function() {
        this.click('button#transaction-submit');
    });

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
    
    createForm('https://platov.cc', '5000', '+79999999981', '0xDeF149d3718e5aa254c5D8a39751E6F2fE3E9A19', 'Mambares@yandex.ru');