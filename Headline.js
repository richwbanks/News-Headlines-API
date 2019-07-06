//Accordion Code

var coll = document.getElementsByClassName("collapsible_trend");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

var coll = document.getElementsByClassName("collapsible_tech");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

var coll = document.getElementsByClassName("collapsible_business");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

//API Code - Trending

$.getJSON("https://newsapi.org/v2/top-headlines?country=us&apiKey=e59105256c624c8fbaa1dfb314358367", function(data) {

console.log(data);

var trending_title_one = data.articles[0].title;
var trending_des_one = data.articles[0].description;
var trending_source_one = data.articles[0].source.name;
var trending_author_one = data.articles[0].author;
var trending_url_one = data.articles[0].url;

var trending_title_two = data.articles[1].title;
var trending_des_two = data.articles[1].description;
var trending_source_two = data.articles[1].source.name;
var trending_author_two = data.articles[1].author;
var trending_url_two = data.articles[1].url;

var trending_title_three = data.articles[2].title;
var trending_des_three = data.articles[2].description;
var trending_source_three = data.articles[2].source.name;
var trending_author_three = data.articles[2].author;
var trending_url_three = data.articles[2].url;

var trending_title_four = data.articles[3].title;
var trending_des_four = data.articles[3].description;
var trending_source_four = data.articles[3].source.name;
var trending_author_four = data.articles[3].author;
var trending_url_four = data.articles[3].url;

var trending_title_five = data.articles[4].title;
var trending_des_five = data.articles[4].description;
var trending_source_five = data.articles[4].source.name;
var trending_author_five = data.articles[4].author;
var trending_url_five = data.articles[4].url;

$(".trending_title_one").append(trending_title_one );
$(".trending_des_one").append(trending_des_one );
$(".trending_source_one").append(trending_source_one );
$(".trending_author_one").append(trending_author_one );
$(".trending_url_one").append(trending_url_one );

$(".trending_title_two").append(trending_title_two );
$(".trending_des_two").append(trending_des_two );
$(".trending_source_two").append(trending_source_two );
$(".trending_author_two").append(trending_author_two );
$(".trending_url_two").append(trending_url_two );

$(".trending_title_three").append(trending_title_three );
$(".trending_des_three").append(trending_des_three );
$(".trending_source_three").append(trending_source_three );
$(".trending_author_three").append(trending_author_three );
$(".trending_url_three").append(trending_url_three );

$(".trending_title_four").append(trending_title_four );
$(".trending_des_four").append(trending_des_four );
$(".trending_source_four").append(trending_source_four );
$(".trending_author_four").append(trending_author_four );
$(".trending_url_four").append(trending_url_four );

$(".trending_title_five").append(trending_title_five );
$(".trending_des_five").append(trending_des_five );
$(".trending_source_five").append(trending_source_five );
$(".trending_author_five").append(trending_author_five );
$(".trending_url_five").append(trending_url_five );

});

//API Code - Technology

$.getJSON("https://newsapi.org/v2/everything?q=Technology Computers&sortBy=popularity&apiKey=e59105256c624c8fbaa1dfb314358367", function(data) {

console.log(data);

var tech_title_one = data.articles[0].title;
var tech_des_one = data.articles[0].description;
var tech_source_one = data.articles[0].source.name;
var tech_author_one = data.articles[0].author;
var tech_url_one = data.articles[0].url;

var tech_title_two = data.articles[1].title;
var tech_des_two = data.articles[1].description;
var tech_source_two = data.articles[1].source.name;
var tech_author_two = data.articles[1].author;
var tech_url_two = data.articles[1].url;

var tech_title_three = data.articles[2].title;
var tech_des_three = data.articles[2].description;
var tech_source_three = data.articles[2].source.name;
var tech_author_three = data.articles[2].author;
var tech_url_three = data.articles[2].url;

var tech_title_four = data.articles[3].title;
var tech_des_four = data.articles[3].description;
var tech_source_four = data.articles[3].source.name;
var tech_author_four = data.articles[3].author;
var tech_url_four = data.articles[3].url;

var tech_title_five = data.articles[4].title;
var tech_des_five = data.articles[4].description;
var tech_source_five = data.articles[4].source.name;
var tech_author_five = data.articles[4].author;
var tech_url_five = data.articles[4].url;

$(".tech_title_one").append(tech_title_one );
$(".tech_des_one").append(tech_des_one );
$(".tech_source_one").append(tech_source_one );
$(".tech_author_one").append(tech_author_one );
$(".tech_url_one").append(tech_url_one );

$(".tech_title_two").append(tech_title_two );
$(".tech_des_two").append(tech_des_two );
$(".tech_source_two").append(tech_source_two );
$(".tech_author_two").append(tech_author_two );
$(".tech_url_two").append(tech_url_two );

$(".tech_title_three").append(tech_title_three );
$(".tech_des_three").append(tech_des_three );
$(".tech_source_three").append(tech_source_three );
$(".tech_author_three").append(tech_author_three );
$(".tech_url_three").append(tech_url_three );

$(".tech_title_four").append(tech_title_four );
$(".tech_des_four").append(tech_des_four );
$(".tech_source_four").append(tech_source_four );
$(".tech_author_four").append(tech_author_four );
$(".tech_url_four").append(tech_url_four );

$(".tech_title_five").append(tech_title_five );
$(".tech_des_five").append(tech_des_five );
$(".tech_source_five").append(tech_source_five );
$(".tech_author_five").append(tech_author_five );
$(".tech_url_five").append(tech_url_five );

});

//API Code - Business

$.getJSON("https://newsapi.org/v2/everything?q=Business Management Finance Economy&sortBy=popularity&apiKey=e59105256c624c8fbaa1dfb314358367", function(data) {

console.log(data);

var business_title_one = data.articles[0].title;
var business_des_one = data.articles[0].description;
var business_source_one = data.articles[0].source.name;
var business_author_one = data.articles[0].author;
var business_url_one = data.articles[0].url;

var business_title_two = data.articles[1].title;
var business_des_two = data.articles[1].description;
var business_source_two = data.articles[1].source.name;
var business_author_two = data.articles[1].author;
var business_url_two = data.articles[1].url;

var business_title_three = data.articles[2].title;
var business_des_three = data.articles[2].description;
var business_source_three = data.articles[2].source.name;
var business_author_three = data.articles[2].author;
var business_url_three = data.articles[2].url;

var business_title_four = data.articles[3].title;
var business_des_four = data.articles[3].description;
var business_source_four = data.articles[3].source.name;
var business_author_four = data.articles[3].author;
var business_url_four = data.articles[3].url;

var business_title_five = data.articles[4].title;
var business_des_five = data.articles[4].description;
var business_source_five = data.articles[4].source.name;
var business_author_five = data.articles[4].author;
var business_url_five = data.articles[4].url;

$(".business_title_one").append(business_title_one );
$(".business_des_one").append(business_des_one );
$(".business_source_one").append(business_source_one );
$(".business_author_one").append(business_author_one );
$(".business_url_one").append(business_url_one );

$(".business_title_two").append(business_title_two );
$(".business_des_two").append(business_des_two );
$(".business_source_two").append(business_source_two );
$(".business_author_two").append(business_author_two );
$(".business_url_two").append(business_url_two );

$(".business_title_three").append(business_title_three );
$(".business_des_three").append(business_des_three );
$(".business_source_three").append(business_source_three );
$(".business_author_three").append(business_author_three );
$(".business_url_three").append(business_url_three );

$(".business_title_four").append(business_title_four );
$(".business_des_four").append(business_des_four );
$(".business_source_four").append(business_source_four );
$(".business_author_four").append(business_author_four );
$(".business_url_four").append(business_url_four );

$(".business_title_five").append(business_title_five );
$(".business_des_five").append(business_des_five );
$(".business_source_five").append(business_source_five );
$(".business_author_five").append(business_author_five );
$(".business_url_five").append(business_url_five );

});