
Router.configure({
    layoutTemplate: 'ApplicationLayout'
});


Router.route('/', function() {
    this.render('home', {
        to: "main"
    });
});


Router.route('/site/:_id', function() {
    this.render('site_detail', {
        to: "main",
        data: function() {
            return Websites.findOne({_id: this.params._id});
        }
    });
});
