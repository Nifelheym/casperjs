// вводятся данные, не получается тыкнуть по плашкам валют

function createForm(url, summ, sendWallet, reciveWallet, email) {
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
        // this.wait('3000', function() {
        this.click('div.ps-select:nth-child(1)');
        // this.click('div#ps-to span[data-target="crypto"]');
        // });
    });

    casper.then(function(){
        this.wait('1000', function() {
        // casper.waitForSelector('div[class="topics"]', function() {
        this.click('div#ps-from div[data-seo="qiwi"]');
        })
        // });
    });
    casper.then(function(){
        // this.wait('3000', function() {
        // this.click('div#ps-from span[data-target="ps"]');
        this.click('div#ps-to span[data-target="crypto"]');
        // });
    });
    casper.then(function(){
        this.wait('1000', function() {
        // casper.waitForSelector('div[class="topics"]', function() {
        this.click('div#ps-to div[data-seo="ethereum"]');
        })
        // });
    });
    
    
    // заполнение полей
    
    casper.then(function() {
        // this.wait('3000', function() {
        casper.waitForSelector('div[class="result_block"]', function() {
            casper.fillSelectors('div[class="result_block"]', {
            'input[id="give_col"]': summ,
            'input[id="from_acc"]': sendWallet,
            //   'input[id="target-amount"]': reciveSumm,
            'input[name="to_acc"]': reciveWallet,
            'input[name="email"]': email,
            //   'input[id="user_phone"]': phone,
            }, true);
          });
        // });
    });
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
    
    createForm('https://baksman.org', '5000', '+79999999981', '0xDeF149d3718e5aa254c5D8a39751E6F2fE3E9A19', 'Mambares@yandex.ru');