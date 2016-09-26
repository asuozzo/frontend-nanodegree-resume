
var bio = {
  "name" : "Harry Potter",
  "role" : "Wizard",
  "contacts" : {
    "email":"harry@harrypotterwizard.com",
    "github":"harrypotterwizard",
    "twitter":"@harrypotterwizard",
    "mobile":"62442",
    "location":"London"
  },
  "skills" : [
    "Patronus Charm",
    "Gryffindor bravery",
    "Taking full credit for things that I had a lot of help with",
    "Being a fucking wizard"
  ],
  "welcomemessage" : "Welcome to my resume site!",
  "bioPic" : "images/harry.jpg",
}

var work = {
	"jobs": [ {
		"position": "Auror",
		"employer": "Ministry of Magic",
		"location": "London",
		"dates": "2000 to present",
		"description": "Who even knows, my calling was CLEARLY teaching Defense Against the Dark Arts because goodness knows Hogwarts needs a good DADA teacher, but I went for the cop-out career instead. Thanks, J.K. Rowling."
	},
	 {
		"position": "TA",
		"employer": "Hogwarts",
		"location": "Hogsmeade",
		"dates": "1999",
		"description": "Now I'm just making things up."
	}
]};

work.display = function(){
  work.jobs.forEach(function(job){
    $("#workExperience").append(HTMLworkStart);
    var formattedTitle = HTMLworkTitle.replace("%data%",job.position)
    var formattedEmployer = HTMLworkEmployer.replace("%data%",job.employer);
    $(".work-entry:last").append(formattedEmployer + formattedTitle)
    var formattedWorkDates = HTMLworkDates.replace("%data%",job.dates)
    $(".work-entry:last").append(formattedWorkDates);
    var formattedWorkDescription = HTMLworkDescription.replace("%data%",job.description);
    $(".work-entry:last").append(formattedWorkDescription);
  })
}

work.display()

var projects = [
    {  "name":"Defeated Voldemort",
    "description":"Faced the most evil wizard of all time six times and lived to tell the tale.",
    "skills":["horcrux destruction","logic","mom's eternal love and sacrifice","having smart friends"]
  },
  {
    "name":"Won the Triwizard cup",
    "description":"Competed in three challenges against three other wizards for the triwizard cup",
    "skills":["broomstick flying","accio charm","having smart friends","Oh, also Barty Crouch was cheating"]
  },
  {
    "name":"Won three Hogwarts Quidditch Cups",
    "description":"Led my Quidditch team to victory three times during my time at Hogwarts.",
    "skills":["broomstick flying","eagle eyes"]
  }
]

projects.display = function(){
  projects.forEach(function(project){
    $("#projects").append(HTMLprojectStart);
    var formattedProjectName = HTMLprojectTitle.replace("%data%", project.name)
    $(".project-entry:last").append(formattedProjectName);

    var formattedProjectDescription = HTMLprojectDescription.replace("%data%", project.description);
    $(".project-entry:last").append(formattedProjectDescription);
  })
}

projects.display();

var education = {
  "schools": [
    {
      "school": "Hogwarts",
      "years": "2001-2008",
      "location": "Hogsmeade"
    },
    {
      "school":"Ministry of Magic Training Academy",
      "years":"2009-2010",
      "location":"London"
    }
  ]
};

var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
$("#header").prepend(formattedRole);
var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").prepend(formattedName);

var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic)
$("#header").append(formattedPic);

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile)
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email)
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github)
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter)
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location)
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedTwitter);
$("#topContacts").append(formattedLocation);

if (bio.skills.length>0){
  $("#header").append(HTMLskillsStart);
  var formattedSkill
  for (i in bio.skills) {
    formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
    $("#skills").append(formattedSkill);
  }
}




$("#mapDiv").append(googleMap);

// $("#main").append(internationalizeButton)
//
// function inName(fullname){
//   fullname = fullname.trim().split(" ");
//   fullname[0] = fullname[0].slice(0,1).toUpperCase() + fullname[0].slice(1).toLowerCase();
//   fullname[1] = fullname[1].toUpperCase()
//   fullname = fullname.join(" ")
//   return fullname;
// }
