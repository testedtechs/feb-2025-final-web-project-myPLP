
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function loadPosts() {
  const querySnapshot = await getDocs(collection(db, "posts"));
  const container = document.querySelector('.container');
  container.innerHTML = '';
  querySnapshot.forEach((doc) => {
    const data = doc.data();
    container.innerHTML += `
      <article class="blog-post">
        <h2>\${data.title}</h2>
        <img src="\${data.image}" alt="\${data.title}">
        <p><small>Posted on \${data.date}</small></p>
        <p>\${data.content}</p>
        <button onclick="likePost(this)">Like 👍 (<span>0</span>)</button>
      </article>`;
  });
}

function likePost(btn) {
  const span = btn.querySelector("span");
  let count = parseInt(span.innerText);
  span.innerText = count + 1;
}

document.addEventListener('DOMContentLoaded', loadPosts);
