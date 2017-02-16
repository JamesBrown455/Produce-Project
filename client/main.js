import '../imports/ui/body.js';

Router.configure({
   layoutTemplate: 'body'  //can be any template name
 });


Router.map(function () {
  this.route('home', {
    path: '/',
  });

  this.route('about');
  this.route('account');
  this.route('products');
  this.route('partners');
});
