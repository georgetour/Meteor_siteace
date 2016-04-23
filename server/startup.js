Meteor.startup(function() {
    if (!Websites.findOne()) {
        console.log("No websites yet. Creating starter data.");
        Websites.insert({
            title: "Goldsmiths Computing Department",
            url: "http://www.gold.ac.uk/computing/",
            upVotes: 0,
            downVotes: 0,
            description: "This is where this course was developed.",
            createdOn: new Date()
        });
        Websites.insert({
            title: "University of London",
            url: "http://www.londoninternational.ac.uk/courses/undergraduate/goldsmiths/bsc-creative-computing-bsc-diploma-work-entry-route",
            upVotes: 0,
            downVotes: 0,
            description: "Univery of London International Programme.",
            createdOn: new Date()
        });
    }
});
