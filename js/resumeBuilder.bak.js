//THIS .BAK FILE IS A COPY OF ALL WORK UP UNTIL LESSON: https://classroom.udacity.com/nanodegrees/nd001/parts/0011345406/modules/296281861575460/lessons/1930528550/concepts/19350585610923

/*
This is empty on purpose! Your code to build the resume will go here.
 */

//creates a biography object
var bio = {
	"name" : "Khalid Sharara",
	"role" : "Developer",
	"contact" : {
		"mobile" : "(703) 678-1814",
		"email" : "khsharara@gmail.com",
		"gitHub" : "khsharara",
		"location" : "DC Metro Area",
	},
	"welcomeMsg" : "Welcome to my page!",
	"skills" : ["Web-development", " other things too"],
	"pic" : "images/fry.jpg"
}

var work = {
// 	"title" : "Solution Engineer",
// 	"employer" : "Appian",
// 	"years" : "2016-present",
// 	"city" : "Reston, VA"
}
var education = {
// 	"name" : "Virginia Tech",
// 	"years" : "2011-2016",
// 	"city" : "Blacksburg, VA"
}
//example different ways of setting and getting properties in objects
work.title = "Solution Engineer";
work.employer = "Appian";
work.years = "2016-present";
work.city = "Reston, VA";
education["name"] = "Virginia Tech";
education["years"] = "2011-2016";
education["city"] = "Blacksburg, VA";

console.log(work.title);

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

var formattedMobile = HTMLmobile.replace("%data%", bio.contact.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contact.email);
var formattedGitHub = HTMLgithub.replace("%data%", bio.contact.gitHub);
var formattedLocation = HTMLlocation.replace("%data%", bio.contact.location);

var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);
var formattedSkills = HTMLskills.replace("%data%", bio.skills);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.pic);

var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work["employer"]);
var formattedWorkTitle = HTMLworkTitle.replace("%data%", work["title"]);
var formattedSchoolName = HTMLschoolName.replace("%data%", education.name);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedGitHub);
$("#topContacts").append(formattedLocation);

$("#topContacts").append(formattedWelcomeMsg);
$("#topContacts").append(formattedBioPic);
$("#topContacts").append(formattedSkills);

$("#topContacts").append(work["title"]);
//$("#workExperience").append(formattedWorkTitle);
$("#education").append(education.name);

//JSON Practice
var education = {
	"schools" : [
		{
			"name" : "Virginia Tech",
			"major" : ["Business Information Technology"],
			"city" : "Blacksburg, VA",
			"years" : "2011-present"
		}
	],
	"onlineCourses" : [
		{
			"name" : "Udacity",
			"major" : ["Front-end Web Developer"],
			"city" : "Online",
			"years" : "2016-present"
		}
	]
}