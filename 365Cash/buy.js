function createForm() {
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
        this.click('ul.ex-list.ex-sell li[data-code="QWRUB"]');
        // })
    });
    casper.then(function(){
        this.wait('1000', function() {
           // var stroka = 'div[num_recive="recive_1"] div.' + casper.cli.get('valuta') + '_obmen_btn span';
           // this.click(stroka);
           var stroka = 'ul.ex-list.ex-buy li[data-code="' + casper.cli.get('valuta') + '"]'
            this.click(stroka);
        //this.click('div[num_recive="recive_1"] div.ethereum_obmen_btn span');
        })
    });
    
    
    // заполнение полей
    
    casper.then(function() {
         this.wait('1000', function() {
        casper.waitForSelector('form#order-form[method="post"]', function() {
            casper.fillSelectors('form#order-form[method="post"]', {
                'input#sellform-sell_amount': casper.cli.get('summ'),
                'input#sellform-sell_source': casper.cli.get('sendWallet'),
                'input#buyform-buy_amount': casper.cli.get('reciveSumm'),
                'input#buyform-buy_target': casper.cli.get('reciveWallet'),
                //'input[name="user_email"]': casper.cli.get('email'),
                //'input[name="user_phone"]': casper.cli.get('phone'),
            }, true);
        });
         });
    });
    
    // подтверждение операции
    
    casper.then(function(){
        this.wait('2000', function(){
        this.click('button.btn.btn-success.btn-block');
        });
    });
    casper.then(function(){
        this.wait('2000', function(){
        this.click('button.btn.btn-success.btn-block');
        });
    });
    casper.then(function(){
        this.wait('2000', function(){
        this.click('input#preorderform-rules_agreements');
        });
    });
    casper.then(function() {
        this.click('button.btn.btn-success.btn-block');
    });
    
    casper.then(function(){
        this.wait('3000', function(){
            this.capture('AfterLogin.png'); 
        });
        console.log("Make a screenshot and save it as AfterLogin.png");
    });
    
    casper.run();
    
    return word;
    }
    
    
    createForm();