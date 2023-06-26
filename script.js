function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
}

//Show more in about section
function toggleText() {
  const moreText = document.getElementById('read-more-text');
  if (moreText.style.display === 'none') {
    moreText.style.display = 'block';
  } else {
    moreText.style.display = 'none';
  }
}

//Send confirmation mail
(function(){
  emailjs.init("kpwPvyzExPOJErfn-");
  })();

window.onload = function() {
  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    emailjs.sendForm('service_chiko', 'template_chiko', this)
    .then(function(){
      alert('Email sent successfully');
    }, function(error) {
      alert('Error sending email:' + error);
    });
  });
};