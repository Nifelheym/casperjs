
function authToShop () {

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

    casper.then(function() {
        this.click('li.user a.modal-open-button');
    })
    // вход
    casper.then(function() {
        casper.waitForSelector('form[id="login-form"]', function() {
            casper.fillSelectors('form#login-form[method="post"]', {
              'input[name="LoginForm[identity]"]': casper.cli.get('email'),
              'input[name="LoginForm[password]"]': casper.cli.get('pass')
            }, true);
          });
    });
    
    casper.then(function(){
      this.wait('3000', function(){
          this.capture('AfterLogin.png'); 
      });
      console.log("Make a screenshot and save it as AfterLogin.png");
    });
    
    casper.run();
      //response.statusCode = 200;
    }
    
    authToShop();
    