var ready = function (cb) {
  // Check if the `document` is loaded completely
  document.readyState === "loading"
    ? document.addEventListener("DOMContentLoaded", function (e) {
        cb();
      })
    : cb();
};

// Usage
ready(function() {
    // Do something when the document is ready
    var elSiteHeaderToggler = document.querySelector('.site-header__toggler');
    var elSitenav = document.querySelector('.site-header__toggler');
    
    elSiteHeaderToggler.addEventListener('click', function (){
      elSitenav.classList.toggle('sitenav--open')
    });
});