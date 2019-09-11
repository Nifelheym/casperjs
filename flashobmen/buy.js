// логика работает работает для сайтов https://flashobmen.com   https://el-change.com   https://top-exchange.com/    https://papa-change.com/   https://f-change.biz/   https://fastexchange.center
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
    this.click('div.otdaete_wrap div.qiwi_rub_obmen_btn span');
    // })
});
casper.then(function(){
    this.wait('1000', function() {
        var stroka = 'div[num_recive="recive_1"] div.' + casper.cli.get('valuta') + '_obmen_btn span';
        this.click(stroka);
    //this.click('div[num_recive="recive_1"] div.ethereum_obmen_btn span');
    })
});


// заполнение полей

casper.then(function() {
    // this.wait('3000', function() {
    casper.waitForSelector('form[method="post"][class="user_obmen_form"]', function() {
        casper.fillSelectors('form[method="post"]', {
          'input[name="send_summ"]': casper.cli.get('summ'),
          'input[name="send_wallet"]': casper.cli.get('sendWallet'),
          'input[name="recive_summ"]': casper.cli.get('reciveSumm'),
          'input[name="recive_wallet"]': casper.cli.get('reciveWallet'),
          'input[name="user_email"]': casper.cli.get('email'),
          'input[name="user_phone"]': casper.cli.get('phone'),
        }, true);
      });
    // });
});

// подтверждение операции

casper.then(function(){
    this.wait('1000', function(){
    this.click('input[name="order_confirm_btn"]');
    });
});

casper.then(function() {
    this.wait('2000', function(){
    var text = this.evaluate(function(){
        return document.querySelector("div.link_operation_block a").textContent;
    });

    var word = require('utils').dump(text);
    console.log(word);
});
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

// let url = 'https://fastexchange.center';
// let summ = '5000';
// let sendWallet = '+79999999981';
// let reciveSumm = '1.4';
// let reciveWallet = '0xDeF149d3718e5aa254c5D8a39751E6F2fE3E9A19';
// let email = 'Mambares@yandex.ru';
// let phone = '+79999999911';

createForm();

