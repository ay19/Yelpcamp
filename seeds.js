var mongoose=require("mongoose");
var Campground=require("./models/campground");
var Comment=require("./models/comment");

var data=[
	{
		name:"Cloud's rest",
		image:"https://images.unsplash.com/photo-1506535995048-638aa1b62b77?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f3e3ff1cce6d43ff22a50a83269f07ac&auto=format&fit=crop&w=500&q=60",
		description:"blah blah blah"
	},
	{
		name:"Desert Meso",
		image:"https://images.unsplash.com/photo-1455496231601-e6195da1f841?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4d1156d3e4dfafbc71a9f293939f3243&auto=format&fit=crop&w=500&q=60",
		description:"blah blah blah"
	},
	{
		name:"Canyon Floor",
		image:"https://images.unsplash.com/photo-1475483768296-6163e08872a1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=14704e761ba133f2fb71ec6a8e6e8e07&auto=format&fit=crop&w=500&q=60",
		description:"blah blah blah"
	},
	
]


function seedDB(){
	//remove all campgrounds
	
	Campground.remove({},function(err){
		if(err)
			console.log(err);
		console.log("removed campgrounds");
		//add a few campgrounds
		data.forEach(function(seed){
			Campground.create(seed,function(err,campground){
				if(err)
					console.log(err);
				else{
					console.log("added a campground");
					//create a comment
					Comment.create(
					{
						text:"This place is great",
						author:"Homer"
					},function(err,comment){
						if(err){
							console.log(err);
						}
						else{
							campground.comments.push(comment);
							campground.save();
							console.log("created new comment");
						}
						
					
					});
				}
			});
		});
		
	});
}

module.exports=seedDB;


