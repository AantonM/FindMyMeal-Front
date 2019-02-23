var myApp = new Framework7();

var $$ = Dom7;

// var apiURL = 'http://api.myapp.com';
// var username = "username";
// var passwork = "password";

// DOM events for About popup
$$('.popup-about').on('popup:open', function (e, popup) {
    console.log('About popup open');
});

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});

// Callbacks to run specific code for specific pages, for example for About page:
myApp.onPageInit('about', function (page) {
    // run createContentPage func after link was clicked
    $$('.create-page').on('click', function () {
        createContentPage();
    });

});

// Generate dynamic page
var dynamicPageIndex = 0;
function createContentPage() {
    mainView.router.loadContent(
        '<!-- Top Navbar-->' +
        '<div class="navbar">' +
        '  <div class="navbar-inner">' +
        '    <div class="left"><a href="#" class="back link"><i class="icon icon-back"></i><span>Back</span></a></div>' +
        '    <div class="center sliding">Dynamic Page ' + (++dynamicPageIndex) + '</div>' +
        '  </div>' +
        '</div>' +
        '<div class="pages">' +
        '  <!-- Page, data-page contains page name-->' +
        '  <div data-page="dynamic-pages" class="page">' +
        '    <!-- Scrollable page content-->' +
        '    <div class="page-content">' +
        '      <div class="content-block">' +
        '        <div class="content-block-inner">' +
        '          <p>Here is a dynamic page created on ' + new Date() + ' !</p>' +
        '          <p>Go <a href="#" class="back">back</a> or go to <a href="services.html">Services</a>.</p>' +
        '        </div>' +
        '      </div>' +
        '    </div>' +
        '  </div>' +
        '</div>'
    );
    return;
}

var test = function () {
    //    var formData = myApp.form.convertToData('#my-form');
    var formJSON = myApp.formToJSON("#my-form");
    //   alert(JSON.stringify(formData));  

    requestData(formJSON);
}

var requestData = function (prodJson) {
   var app = new Framework7({ /*...*/ });

    myApp.request.get('https://soundcloud.com/oembed?url=http%3A//soundcloud.com/forss/flickermood&format=js&callback=?', function (data) {
    console.log(data);
    });

}




