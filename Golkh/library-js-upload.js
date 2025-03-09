// Initialize Firebase
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT.firebaseapp.com",
    storageBucket: "YOUR_BUCKET.appspot.com"
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();

// Drag & Drop Upload
const dropZone = document.getElementById('drop-zone');

dropZone.addEventListener('drop', e => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    handleFiles(files);
});

// URL Upload
document.getElementById('url-upload').addEventListener('submit', e => {
    e.preventDefault();
    const url = document.getElementById('pdf-url').value;
    if (url.endsWith('.pdf')) {
        storage.refFromURL(url).putString(url, 'data_url');
    }
});