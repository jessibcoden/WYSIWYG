console.log("WYSIWYG");

// Create an array of objects that represents famous people.
var celebrities = [
	{name: 'Ada Lovelace', 
	 birth: '1815', 
	 death: '1852', 
	 subTitle: 'The First Computer Programmer', 
	 image: 'http://bygeekgirl.com/wp-content/uploads/2016/09/By-Geekgirl-Ada-Lovelace-Wikipedia-800x550.jpg', 
	 bio: ['Introduced by her mentor to Charles Babbage, at age seventeen Ada Lovelace became interested in the "Analytical Engine", the invention the Mathematics professor was working on. Expanding on her interest of the machine, Ada Lovelace translated an article written by an Italian mathematician describing the computer-like machine. Impressed with her work, Charles Babbage asked Ada to expand on the article and this is where Ada made history.',
		'In her article, Ada expounded on the potential uses of the Analytical Engine and wrote several computer programs. She predicted the computer’s ability to make music and manipulate symbols. With these announcements, Ada can be called a visionary. While Babbage is known as the “father of the computer”, Ada Lovelace is honored as the “first computer programmer” with her lengthy address.']
	},
	{name: 'Ida Rhodes',
	 birth: '1900',
	 death: '1986',
	 subTitle: 'Analysis of Systems of Programming, C-10 Language',
	 image: 'http://bygeekgirl.com/wp-content/uploads/2016/09/By-Geekgirl-Ida-Rhodes-SIArchives-800x550.jpg',
	 bio: ['As part of the New Deal program created by President Roosevelt, the Mathematical Tables Project was created and Ida Rhodes was taken onboard. She was placed as a planner and supervisor of the Handbook of Mathematical Functions. Seven years later, Ida’s boss sent her to Washington to learn about the creation of an electronic computer which would come to change the course of Ida’s life.',
	'The people in Washington were so impressed with Ida Rhodes, they wanted to work with her more. She worked in the Machine Development Laboratory consulting with government agencies and in the development of the analysis of systems of programming. Ida designed the C-10 language for the U.S. Census Bureau and created the original programming for the Social Security Administrations. Ida was also a pioneer in the use of computers to support language translation.',
	' Ida Rhodes was awarded with an Exceptional Service Gold Medal and Certificate of Appreciation from the Department of Commerce and a UNIVAC I Pioneer Award from AFIPS National Computer Conference.']
	},
	{name: 'Grace Hopper',
	 birth: '1906',
	 death: '1992',
	 subTitle: 'Invented the Compiler and led to COBOL',
	 image: 'http://bygeekgirl.com/wp-content/uploads/2016/09/By-Geekgirl-Grace-Hopper-Wikipedia-800x550.jpg',
	 bio: ['Grace Hopper was born curious. With her father’s encouragement to be self-sufficient and gain an education, Grace studied math and physics at Vassar and later Yale. In 1934, Grace Hopper was one of the first women to earn a Ph.D. in Mathematics.',
	'An unprecedented all-female division of the Navy offered Grace a once in a lifetime opportunity. Grace was positioned as a programmer for the Mark I computer. Now an Admiral, Grace was only the third person to program the 10,000 lb. computer.',
	'After her work with the Navy, Grace was nowhere near done with programming. In the 1950s, she began work on UNIVAC, the second commercial computer and there invented the compiler transforming source code from one computer language to a simpler language. This invention eventually led to COBOL, an internationally used computer language.',
	'Grace said, “To me programming is more than an important practical art. It is also a gigantic undertaking in the foundations of knowledge.” In 1991, Grace Hopper was the first female recipient of the National Medal of Technology. The Association for Computing Machinery today offers an award for outstanding young computer professionals in her name.']
	},
	{name: 'Jean Jennings Bartik',
	 birth: '1924',
	 death: '2011',
	 subTitle: 'Original Programmer for ENIAC',
	 image: 'http://bygeekgirl.com/wp-content/uploads/2016/09/By-Geekgirl-Jean-Bartik-Wikipedia-800x550.jpg',
	 bio: ['It was an army advertisement for mathematics graduates that brought Jean to ENIAC. Jean Jennings Bartik became a lead programmer on a tiny team of women working on the first all-electronic digital computer for the army. Jean’s son said she was looking for an adventure and that’s just what she got.',
	'The women were responsible for converting math analysis into a process that ENIAC could work with. The team faced the challenge with determination and learned how to program without programming languages or tools. At the end of Jean’s service alongside five other women, ENIAC could run complicated calculus equations in just seconds. ENIAC was created to calculate firing trajectories for artillery shells, but became a milestone of computing.', 
	'While ENIAC and its builders made headlines in 1946, none of its female programmers were mentioned. Jean’s accomplishments were recognized decades after her service, but were acknowledged nonetheless. Later, Jean was honored with a Pioneer Award and inducted into the Hall of Fame of Women in Technology International. In 2013, a 20 minute documentary was created on the inspirational women of the ENIAC project.']
	},
	{name: 'Lois Haibt',
	 birth: '1934',
	 death: 'living',
	 subTitle: 'Developed Successful High Level Programming Language',
	 image: 'http://bygeekgirl.com/wp-content/uploads/2016/09/By-Geekgirl-Lois-Haibt-Wikispaces-800x550.jpg',
	 bio: ['Lois Haibt had only a vague idea of what computer programming was when she accepted a job offer from IBM right out of college. The company was working on a computer language that would change everything. As a young problem solver and outstanding collegiate work in math and science, Lois fit the bill of what IBM was looking for.',
	'Reflecting on the project, Lois commented, “They took anyone who seemed to have an aptitude for problem-solving skills-bridge players, chess players, even women.” As the only woman on the ten person team, Lois was one of the few female programmers in the entire field of programming. Before IBM, Lois had never touched a computer. At that time, it was projected that there was a need for only ten computers in the entire world.',
	'The project became known as FORTRAN and Lois Haibt became an important part of the team. After six months she was put on the compiler project and never left. Lois built the flow analysis at the core of the FORTRAN compiler. Before the completion of FORTRAN, organizations like the National Weather Service were asking to use the code from FORTRAN, desperately seeking a high-level language. The language was quickly renowned as a breakthrough in computer coding.']
	},
	{name: 'Margaret Hamilton',
	 birth: '1936',
	 death: 'living',
	 subTitle: 'Invented Software Engineering',
	 image: 'http://bygeekgirl.com/wp-content/uploads/2016/09/By-Geekgirl-Margaret-Hamilton-Wikipedia-800x550.jpg',
	 bio: ['In 1960, Margaret Hamilton was working as a programmer at MIT in order to support her husband through his law degree. Margaret told Futurism, “The very first languages I programmed in were hexadecimal and binary. There was no school to attend or field to learn what today is known as ‘software engineering’ or ‘systems engineering.’ When answers could not be found, we had to invent them.” Margaret’s work at MIT turned into so much more when the Apollo space program hit the scene.',
	'When NASA turned to MIT to engineer the Apollo, Margaret took on the job of onboard flight software, although software was nowhere in the Apollo’s original plans. In order to program, Margaret would punch holes in stacks of punch cards and have them processed by a large Honeywell computer that simulated the Apollo.',
	'Margaret helped save the Apollo 8 flight after a human error and showed the world the possibilities of software. Margaret Hamilton was honored with NASA’s Exceptional Space Act Award and is credited with naming the term “software engineering”.']
	},
	{name: 'Barbara Liskov',
	 birth: '1939',
	 death: 'living',
	 subTitle: 'Invented 2 Programming Languages',
	 image: 'http://bygeekgirl.com/wp-content/uploads/2016/09/By-Geekgirl-Barbara-Liskov-MEMIM-800x550.jpg',
	 bio: ['It was only because she couldn’t find an interesting job in mathematics that Barbara Liskov became a programmer, Barbara told EngineerGirl. With her first two years of experience in programming, Barbara was hungry to learn more. She attended Stanford University before there was even a computer science program.',
	'At Stanford, Barbara Liskov worked with John McCarthy on artificial intelligence projects and became the first woman to earn a doctorate in computer science at the program’s beginnings. Through her academic and corporate work, Barbara made significant contributions to the advance of coding. She led the design and implementation of CLU, the creation of the first high-level language Argus to support data abstraction, and the Liskov substitution principle for object oriented programming.',
	'In 2008, Barbara Liskov won the A.M. Turing Award, one of the greatest honors in computer science. Barbara is a professor at MIT. Her innovations can be seen in every modern programming language including Java, C#, and C++. “Be prepared to change your goals if that turns out to be the right thing for you.” Barbara counseled upcoming women interested in technology.']
	}
]

// highlight the text field to signal to the user where to input new text for the biography
function focus(e){
	input.focus();
}

// loop through each article to determine whether it has a border. if so, connect its biography section to the text 
	// input field to allow the user to edit the biography field. reset the input field when the user presses the enter 
	// key (keyCode 13).
function editBio(event) {
	for (var l = 0; l < celebrities.length; l++) {
		if (celebCard[l].classList.contains('add-border')) {
			bioContainer[l].childNodes[1].innerHTML = document.getElementById('user-input').value;
		}
	}
	if (event.keyCode == 13) {
		input.value = '';
	}
}

var input = document.getElementById('user-input');

var bioContainer = document.getElementById('bio-container');

console.log(celebrities);

//For loop to create a div element for each celebrity. Create an empty counter then use it in the for loop to stop the loop from creating more celebrity divs than is needed.
var counter = 0;
var celebContainer = document.getElementById('celeb-container');
for (; counter < celebrities.length; counter++) {
  // Give each person element a unique identifier
  celebContainer.innerHTML += `<div class="celebrity"${counter}></div>`;
}

// Create a DOM element for each of the objects inside the container.
for (var i = 0; i < celebrities.length; i++){
	var currentName = celebrities[i].name;
	var currentBirth = celebrities[i].birth;
	var currentDeath = celebrities[i].death;
	var currentSubTitle = celebrities[i].subTitle;
	var currentImage = celebrities[i].image;
	var currentBio = celebrities[i].bio;

	var domString = '';
		domString +=`<article id="celebrity">`;
		domString +=	`<h2 class="name">${currentName}</h2>`;
		domString +=	`<h3 class="dates">(${currentBirth}-${currentDeath})</h3>`;
		domString +=	`<h3 class="subtitle">${currentSubTitle}</h3>`
		domString +=	`<img src="${currentImage}" alt="${currentName}">`;
		for (var j = 0; j < currentBio.length; j++) {
			domString +=`<section id="bio-container">`;
			domString +=	`<p>${currentBio}</p>`;
			domString +=`</section>`;
		}
		domString +=`</article>`;

	celebContainer.innerHTML += domString;
}

var celebCard = document.getElementsByClassName('celebrity');

console.log(celebCard);

// removing border classes from elements and reset the input text box before adding a border to the clicked card 
	// in order to make sure users can edit only one card at a time
function addBorder(event) {
	console.log(event);
	for (var k = 0; k < celebrities.length; k++) {
		celebCard.classList.remove('add-border');
	}
	input.value = '';
	event.target.closest('article').classList.add('add-border');
}

// adding two event listeners on the celebCard elements with a loop to account for grabbing elements by class
for (var j = 0; j < celebrities.length; j++) {
	console.log("looping");
	celebCard[j].addEventListener('click', addBorder);
	celebCard[j].addEventListener('click', focus);
}

// add an event listener to the text input field to capture what the user enters
input.addEventListener('keyup', editBio);








