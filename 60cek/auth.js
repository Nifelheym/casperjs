// не вводятся данные(не нажимается кнопка)
function authToShop (url, email, password) {

    const casper = require('casper').create({
        pageSettings: {
            loadImages: false,//The script is much faster when this field is set to false
            loadPlugins: false,
            userAgent: 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36'
        }
    });
    
    casper.start(url);
    
    casper.then(function() {
        this.click('button.navbar-toggle.show_link');
    });

    casper.then(function() {
        this.wait('1000', function(){
        this.click('a[data-target="#userModal"]');
        });
    });
    // вход

    casper.then(function() {
        casper.waitForSelector('div[class="popup-auth-form"]', function() {
            casper.fillSelectors('div[id="auth-form"]', {
              'input[name="email"]': email,
              'input[name="password"]': password
            }, true);
          });
    });

    casper.then(function(){
        this.wait('1000', function(){
        this.click('input[value="Войти"]');
        })
    });

    casper.then(function(){
        this.wait('4000', function(){
            this.capture('AfterLogin.png'); 
        });
        console.log("Make a screenshot and save it as AfterLogin.png");
    });

    casper.run();
    
    }
    
    authToShop('https://60cek.org','Mambares@yandex.ru','JNDJASKDNhb123ads');