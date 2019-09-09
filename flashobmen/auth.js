
function authToShop (url, email, password) {

const casper = require('casper').create({
    pageSettings: {
        loadImages: false,//The script is much faster when this field is set to false
        loadPlugins: false,
        userAgent: 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36'
    }
});

casper.start(url);

// вход
casper.then(function() {
    casper.waitForSelector('form[class="top_head_login_form"]', function() {
        casper.fillSelectors('form[method="post"]', {
          'input[name="login"]': email,
          'input[name="pass"]': password
        }, true);
      });
});

casper.run();

}

authToShop('https://fastexchange.center','Mambares@yandex.ru','JNDJASKDNhb123ads');
