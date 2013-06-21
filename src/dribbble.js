var Dribbble = {
    init: function(config) {
        this.url = 'http://api.dribbble.com/players/'+config.username+'/shots?per_page='+config.count+'&callback=?';
        this.template = config.template;
        this.container = config.container;
        this.fetch();   
    },
    attachTemplate: function() {
        var template = Handlebars.compile(this.template);

        this.container.empty().append(template(this.shots));
    },
    fetch: function() {
        var self = this;
        
        $.getJSON(this.url, function(data) {
            var feed = data.shots;
            
            self.shots = $.map(feed, function(shot) {
                return {
                    image: shot.image_teaser_url,
                    title: shot.title,
                    link: shot.url
                };
            });
            
            self.attachTemplate();
        }); 
    }
}

Dribbble.init({
    template: $('#shots-template').html(),
    container: $('#container'),
    username: 'rogie',
    count: 32
});