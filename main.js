var frases = [{
	"Id": 0,
	"Frase": "I have nothing to say. And I am saying it. And that is poetry. ",
	"Author": "John Cage"
},

{
	"Id": 1,
	"Frase": "To make people free is the aim of art, therefore art for me is the science of freedom. ",
	"Author": "Joseph Beuys"

},

{
	"Id": 2,
	"Frase": "Fluxus is the creation of a relationship between life and art. ",
	"Author": "George Brecht"
},

{
	"Id": 3,
	"Frase": "Purge the world of bourgeois sickness, ‘intellectual’, professional & commercialized culture. ",
	"Author": "George Maciunas"
},

{
	"Id": 4,
	"Frase": "Art is just fraud. You just have to do something nobody else has done before. ",
	"Author": "Nam June Paik"
},

{
	"Id": 5,
	"Frase": "I try to go further on over the threshold where modern art ends and anthropological art has to start. ",
	"Author": "Joseph Beuys"
},

{
	"Id": 6,
	"Frase": "Art is an effort to make you walk a half an inch above ground. ",
	"Author": "Yoko Ono"
},

{
	"Id": 7,
	"Frase": "The destruction of art ir art too. ",
	"Author": "Ben Vautier"

}, {
	"Id": 8,
	"Frase": "Imagine the clouds dripping. Dig a hole in your garden to put them in. ",
	"Author": "Yoko Ono"
}, {
	"Id": 9,
	"Frase": "This is a mirror. You are a written sentence. ",
	"Author": "Luis Camnitzer"
}
];

function randomQuoteId(ourMin, ourMax) {
	return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}

$(document).ready(function () {

	$("#tweet").hide();
	$("#getMessage").on("click", function () {
		$("#tweet").show();
		var max = Math.max.apply(Math, frases.map(function (o) {
			return o.Id;
		}));

		var min = Math.min.apply(Math, frases.map(function (o) {
			return o.Id;
		}));

		var randomId = randomQuoteId(min, max);
		console.log(randomId);
		var html = "";

		frases.forEach(function (objet) {
			if (objet.Id === randomId) {

				var keys = Object.keys(objet);
				keys.forEach(function (key) {
					if (key === "Frase") {

						html += objet[key] + "<br>";
					} else if (key === "Author") {
						html += "<strong>" + objet[key] + "</strong>" + "<br>";
					}
				});
				html += "</div><br>";
			}
		});
		$(".message").slideUp(200);
		$(".message").html(html);
		$(".message").slideDown(700);


	});

	var showIt = true;

	$(".anim").hide();
	$("#learn").click(function () {
		if (showIt) {
			$(".anim").show(700);
			$("#learn").html("Hide");
		} else {
			$(".anim").hide(700);
			$("#learn").html("Tell me");
		}

		showIt = !showIt;

	});

	var twt = document.getElementById('tweet');

	twt.addEventListener('click', function () {
		var tweetIt = "https://twitter.com/intent/tweet?text=" + $(".message").html().replace(/<\/?[^>]+(>|$)/g, "");
		window.open(tweetIt);
	});

	$(document).ready(function () {
		$('.js-scrollTo').on('click', function () {
			var page = $(this).attr('href');
			var speed = 750; // 
			$('html, body').animate({
				scrollTop: $(page).offset().top
			}, speed);
			return false;
		});
	});
});