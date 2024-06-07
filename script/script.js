document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.form1');

  form.addEventListener('submit', function(event) {
    const email = form.querySelector('input[name="email"]');
    const password = form.querySelector('input[name="pass"]');
    const emailError = form.querySelector('.email-error');
    const passwordError = form.querySelector('.password-error');
    
    // Email validation
    if (!email.value || !validateEmail(email.value)) {
      emailError.textContent = "Please enter a valid email address.";
      event.preventDefault(); // Prevent form submission
    } else {
      emailError.textContent = "";
    }
    
    // Password validation
    if (!password.value || password.value.length < 4) {
      passwordError.textContent = "Password must be at least 4 characters long.";
      event.preventDefault(); // Prevent form submission
    } else {
      passwordError.textContent = "";
    }
  });

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }
});



let header = document.getElementById("header");
let button = document.getElementById("dark-mode");

function goToDarkMode(e) {
	console.log(e.target);
	document.body.classList.toggle("dark");
	if (document.body.classList.contains("dark")) {
		e.target.textContent = "White mode";
	} else {
		e.target.textContent = "Dark mode";
	}
}

button.addEventListener("click", goToDarkMode);


// publish button activate
document.querySelector('.btn-publish').addEventListener('click', function() {
    const postContent = document.querySelector('.post-creation textarea').value;
    const newPost = document.createElement('div');
    newPost.className = 'post';
    newPost.innerHTML = `
    <head>
    <link rel="stylesheet" href="./tet.css">
      </head>
      <div class="post-creator">
        <div class="post-profile-pic"></div>
        <strong>Mahmoud Badawy</strong> @mahmoud.badawy
      </div>
      <div class="post-content">
        <p>${postContent}</p>
        <div class="likes">
          <button class="btn-send-tip">SEND TIP</button>
        </div>
      </div>
    `;
    document.querySelector('.posts-feed').prepend(newPost);
    document.querySelector('.post-creation textarea').value = ''; // Clear the textarea
  });
  
  document.addEventListener('DOMContentLoaded', () => {
    const emojiButton = document.querySelector('.btn-emoji');
    const postTextarea = document.querySelector('.post-creation textarea');
  
    emojiButton.addEventListener('click', () => {
      postTextarea.value += '😊'; // Add the emoji to the textarea
      postTextarea.focus(); // Bring focus back to the textarea
    });
  });
  

  document.addEventListener('DOMContentLoaded', () => {
    const sidebarNavigation = document.querySelector('.sidebar-navigation');
    const menuIcon = document.getElementById('menu-icon');
  
    // Toggle sidebar
    menuIcon.addEventListener('click', () => {
      sidebarNavigation.style.transform =
        sidebarNavigation.style.transform === 'translateX(0px)' ? 'translateX(-100%)' : 'translateX(0px)';
    });
  
    // Set active state for icons
    document.querySelectorAll('.bottom-nav a').forEach(link => {
      link.addEventListener('click', function() {
        document.querySelector('.bottom-nav a.active').classList.remove('active');
        this.classList.add('active');
      });
    });
  });

  document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menu-icon');
    const sidebarNavigation = document.querySelector('.sidebar-navigation');
  
    menuIcon.addEventListener('click', () => {
      sidebarNavigation.classList.toggle('active');
    });
  });
  