//This JS file creates resume objects and then populates index.html with those objects

//>>>>CREATES OBJECTS<<<<//
//creates a biography object
var bio = {
    "name": "Khalid Sharara",
    "role": "Developer",
    "welcomeMessage": "Welcome to my page!",
    "biopic": "images/me.jpg", //220 × 183 pixels (Natural: 387 × 315 pixels)
    "contacts": {
        "mobile": "(703) 678-1814",
        "email": "khsharara@gmail.com",
        "github": "khsharara",
        "location": "DC Metro Area",
    },
    // "skills": ["HTML/CSS", "JavaScript", "Python", "mySQL"],
    "skills": [
        ["HTML/CSS", 2],
        ["JavaScript", 1],
        ["Python", 1],
        ["mySQL", 1]
    ],
};

//creates an education object
var education = {
    "schools": [{
        "name": "Virginia Tech",
        "location": "Blacksburg, VA",
        "degree": "Bachelor of Science",
        "majors": [
            "Business Information Technology - Decision Support Systems"
        ],
        "dates": "2011 - 2016",
        "url": "http://www.bit.vt.edu"
    }],
    "onlineCourses": [{
        "title": "Front-end Web Developer Nanodegree",
        "school": "Udacity",
        "dates": "2016 - present",
        "url": "https://www.udacity.com/degrees/nd001/summary"
    }]
};

//creates a work object
var work = {
    "jobs": [{
        "employer": "Appian",
        "title": "Solution Engineer",
        "location": "Reston, VA",
        "dates": "2016 - present",
        "description": "At Appian, I currently work as a hands-on full stack solution engineer in a role that requires exceptional analytical and communication skills. I initially joined Appian as a business process management consultant but was quickly drawn to the technical aspect of the business. I’m currently building familiarity with the intricacies of enterprise level software while providing expert level support to Appian customers across the globe."
    }, {
        "employer": "General Electric",
        "title": "ITLP (Intern)",
        "location": "Erie, PA",
        "dates": "2015",
        "description": "The Information Technology Leadership Program at GE is a premier technical leadership program that gave me the opportunity to grow my leadership skills, develop my business acumen, and increase my technical skills. I spent three months developing software solutions and implementing information technology systems for GE’s Central Technology Organization."
    }, {
        "employer": "IBM",
        "title": "Accounting Systems Analyst (Co-op)",
        "location": "Raleigh, NC",
        "dates": "2013",
        "description": "The first “real” job I ever had was with IBM. It was the perfect opportunity for me to gain exposure to the corporate world and really find myself before committing to pursuing a specific degree. During my 8 months at IBM, I oversaw the creation and maintenance of tens of thousands of ledger accounts that were used to support IBM accountants across the Americas. I was given the opportunity to write technical tutorials to help migrate ledger users to new systems."
    }]
};

//creates a projects object
var projects = {
    "projects": [{
        "title": "CleverRent",
        "dates": "2016",
        "description": "CleverRent was my undergraduate capstone project and it is best described as a property management software solution that focuses heavily on the tenant experience. The requirements included building a unique solution using modern technologies to tackle a problem in any industry. Frustrated with our own property management experiences, we decided to build a software solution that truly modernizes the renting experience. CleverRent consisted of two parts: 1) An Android app for tenants, and 2) A web-app for property management offices. The android app centralized the entire tenant experience into one portal. Tenants could pay rent, request maintenance, book facilities, access local deals, interact with their community, and chat directly with the property management office. The web-app gave the property management office the ability to manage tenant information, manage maintenance requests, post community deals, modify facility information, update local deals information, chat directly with tenants, and view a magnitude of different system generated charts/reports in real time. In order to build our software as quickly as possible, used FireBase as a server and database. During this project, I worked alongside two other students while I assumed the team lead and user experience positions.",
        "images": [
            "images/cleverRentMaintenance.png",
            "images/cleverRentLogo.png",
            "images/cleverRentMain.png",
            "images/cleverRentBilling.png",
            "images/cleverRentFacilities.png"
            // "https://placehold.it/175x108",
            // "https://placehold.it/175x108"
        ]
    }, {
        "title": "CleverLine",
        "dates": "2014",
        "description": "CleverLine was my first software project and it involved building a student-centric campus-food ordering system. The requirements included using VB.NET and Microsoft Access to build the application. Although the interface does not look that pretty (yikes!), I am proud to say our focus on features led our project to win first place in our classroom competition. My favorite feature, Location Express, allowed students to input their current and next classroom destinations and receive information on the dining hall that is most conveniently placed between the two classrooms. This was achieved by integrating a linear programming function that uses the coordinates of different campus buildings to map out different routes before returning a decision. During this project, I worked alongside two other students while I assumed the team lead and lead developer positions.",
        // "description": "CleverLine was my first s",
        "images": [
            "images/cleverLineLogo.png",
            "images/cleverLinePlaceOrder.png",
            "images/cleverLineLocationExpress.png",
            "images/cleverLineUserSpending.png"
        ]
    }]
};


// projects.display();

//not used currently: calls function that internationalizes Name
//inName();

//>>>>MANIPULATES HTML<<<<//
//populate HTML with header and contact info
bio.display = function() {
    if (bio.name) {
        // ROLE
        var formattedHeaderRole = HTMLheaderRole.replace("%data%", bio.role);
        $("#header").prepend(formattedHeaderRole);

        // NAME
        var formattedHeaderName = HTMLheaderName.replace("%data%", bio.name);
        $("#header").prepend(formattedHeaderName);

        // BIOPIC
        var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
        $("#header").append(formattedBioPic);

        // WELCOME MESSAGE
        // var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        // $("#header").append(formattedWelcomeMsg);

        // MOBILE
        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        $("#topContacts").append(formattedMobile);

        // EMAIL
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        $("#topContacts").append(formattedEmail);

        // GITHUB
        var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
        $("#topContacts").append(formattedGitHub);

        // LOCATION
        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        $("#topContacts").append(formattedLocation);
    }

    //populate HTML with skills from bio object
    if (bio.skills) {
        // $("#tech-skills").append(HTMLskillsStart);
        $("#header").append(HTMLskillsStart);
        //acts as a for loop
        bio.skills.forEach(function(skill) {

            var formattedSkill = HTMLskills.replace("%data%", skill[0]);
            // $("#skills").append(formattedSkill);
            //TODO: print new skill-rate-* divs using a loop of some sort
            var formattedSkillData = formattedSkill.replace("%skillData%", '<div class="skill-rate-off"></div><div class="skill-rate-off"></div><div class="skill-rate-off"></div> <div class="skill-rate-off"></div>');
            // console.log(formattedSkillData);

            //loop through the formattedSkillData and fill in the skill bar to match the skill level supplied
            for (i = 0; i < skill[1]; i++) {
                formattedSkillData = formattedSkillData.replace('skill-rate-off', 'skill-rate-on');
                console.log(skill[1], skill[0]);
            }
            $("#skills").append(formattedSkillData);

        });
    }
};

//populates HTML with work object
work.display = function() {
    if (work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        work.jobs.forEach(function(job) {
            // TITLE
            var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", job.employer);
            var formattedWorkTitle = HTMLworkTitle.replace("%data%", job.title);
            var formattedEmployerTitle = formattedWorkEmployer + formattedWorkTitle;
            $(".work-entry:last").append(formattedEmployerTitle);

            // LOCATION
            var formattedWorkLocation = HTMLworkLocation.replace("%data%", job.location);
            $(".work-entry:last").append(formattedWorkLocation);

            // DATES
            var formattedWorkDates = HTMLworkDates.replace("%data%", job.dates);
            $(".work-entry:last").append(formattedWorkDates);

            // DESCRIPTION
            var formattedWorkDescription = HTMLworkDescription.replace("%data%", job.description);
            $(".work-entry:last").append(formattedWorkDescription);
        });
    }
};


//populates HTML with education.school and education.onlineCourses object
education.display = function() {
    if (education.schools) {
        $("#education").append(HTMLschoolStart);
        education.schools.forEach(function(school) {
            // NAME + DEGREE
            var formattedSchoolName = HTMLschoolName.replace("%data%", school.name);
            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
            var formattedSchoolNameAndDegree = formattedSchoolName + formattedSchoolDegree;
            $(".education-entry:last").append(formattedSchoolNameAndDegree);

            // DATES
            var formattedSchoolDates = HTMLschoolDates.replace("%data%", school.dates);
            $(".education-entry:last").append(formattedSchoolDates);

            // LOCATION
            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
            $(".education-entry:last").append(formattedSchoolLocation);


            // MAJORS
            for (i = 0; i < school.majors.length; i++) {
                var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", school.majors[i]);
                $(".education-entry:last").append(formattedSchoolMajor);
            }

        });
    }
    if (education.onlineCourses) {
        $(".education-entry:last").append(HTMLonlineClasses);
        education.onlineCourses.forEach(function(onlineCourse) {
            // TITLE + SCHOOL
            var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", onlineCourse.title);
            var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", onlineCourse.school);
            var formattedOnlineTitleAndSchool = formattedOnlineTitle + formattedOnlineSchool;
            $(".education-entry:last").append(formattedOnlineTitleAndSchool);

            // DATES
            var formattedOnlineDates = HTMLonlineDates.replace("%data%", onlineCourse.dates);
            $(".education-entry:last").append(formattedOnlineDates);

            // URL
            var formattedOnlineURL = HTMLonlineURL.replace("%data%", onlineCourse.url);
            $(".education-entry:last").append(formattedOnlineURL);

        });
    }
};

//populate HTML with projects from projects object
projects.display = function() {
    //projects.display == function() {
    if (projects.projects) {
        projects.projects.forEach(function(project) {
            $("#projects").append(HTMLprojectStart);
            // TITLE
            var formattedProjectTitle = HTMLprojectTitle.replace("%data%", project.title);
            $(".project-entry:last").append(formattedProjectTitle);

            // DATES
            var formattedProjectDates = HTMLprojectDates.replace("%data%", project.dates);
            $(".project-entry:last").append(formattedProjectDates);

            // DESCRIPTION
            var formattedProjectDescription = HTMLprojectDescription.replace("%data%", project.description);
            $(".project-entry:last").append(formattedProjectDescription);

            // IMAGES
            for (i = 0; i < project.images.length; i++) {
                var formattedProjectImage = HTMLprojectImage.replace("%data%", project.images[i]);
                $(".project-entry:last").append(formattedProjectImage);
            }
        });
    }
};

//populate HTML with header and contact info
bio.displayFooter = function() {
    if (bio.name) {
        // MOBILE
        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        $("#footerContacts").append(formattedMobile);

        // EMAIL
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        $("#footerContacts").append(formattedEmail);

        // GITHUB
        var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
        $("#footerContacts").append(formattedGitHub);

        // LOCATION
        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        $("#footerContacts").append(formattedLocation);
    }
};

//populates HTML with googleMap
$("#mapDiv").append(googleMap);

//>>>>CALLS FUNCTIONS<<<<//
bio.display();
work.display();
education.display();
projects.display();
bio.displayFooter();

//not used currently: adds internationalizeButton to the main div
//$('#main').append(internationalizeButton);

//not used currently: converts normal US name to internatinalized version
// function inName() {
//  var fullName = "khalid sharara";

//  //seperates the fullName into firstName and lastName
//  var firstName = fullName.split(" ")[0];
//  var lastName = fullName.split(" ")[1];

//  //converts names to internationalized version
//  var intFirstName = firstName[0].toUpperCase() + firstName.slice(1);
//  var intLastName = lastName.toUpperCase();
//  var intFullName = intFirstName + " " + intLastName;

//  return(intFullName);
// }

//>>>>EXTRAS<<<<//
//logs location of screen click
// $(document).click(function(loc) {
//  //console.log(loc);
//  logClicks(loc.pageX, loc.pageY);
// });

