  const toggleBtn = document.getElementById('toggle-dark');

  // Load theme from localStorage
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    toggleBtn.textContent = '☀️';
  } else {
    toggleBtn.textContent = '🌙';
  }

  // Toggle theme and save to localStorage
  toggleBtn.addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    if (isDark) {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
      toggleBtn.textContent = '🌙';
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
      toggleBtn.textContent = '☀️';
    }
  });

// Firebase config (from your project)
const firebaseConfig = {
  apiKey: "AIzaSyBvbpCK8RRYfONv9zDqZIp7-5yRKSukjtw",
  authDomain: "notes-app-0077.firebaseapp.com",
  projectId: "notes-app-0077",
  storageBucket: "notes-app-0077.firebasestorage.app",
  messagingSenderId: "594137491291",
  appId: "1:594137491291:web:1350fe9b037366ac135c7e"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

// Login function
// Make this function global
window.signInWithGoogle = function () {
  auth.signInWithPopup(provider)
    .then((result) => {
      const user = result.user;
      alert(`✅ Logged in as: ${user.displayName}`);
    })
    .catch((error) => {
      console.error("Login error:", error.message);
      alert("❌ Login failed");
    });
};

// Detect auth state (optional)
auth.onAuthStateChanged((user) => {
  if (user) {
    console.log("✅ Already logged in:", user.displayName);
    // Optionally redirect to dashboard.html
  }
});
