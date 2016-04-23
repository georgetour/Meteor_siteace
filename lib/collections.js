Websites = new Mongo.Collection("websites");


WebsitesIndex = new EasySearch.Index({
    collection: Websites,
    fields: ['url', 'title', 'description'],
    engine: new EasySearch.Minimongo({
        sort: function() {
            return {upVotes: -1, downVotes: 1};
        }
    })
});

Websites.allow({
	insert: function(userId, doc) {
		if (Meteor.user()) {
			return true;
		} else {
			return false;
		}
	},
	update: function(userId, doc) {
		return true;
	}
});


