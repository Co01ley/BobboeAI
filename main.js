const chatBox = document.querySelector('.chat-box');
const inputField = chatBox.querySelector('input[type="text"]');
const button = chatBox.querySelector('button');
const chatBoxBody = chatBox.querySelector('.chat-box-body');

// Create sendMessade Function
button.addEventListener('click', sendMessage);