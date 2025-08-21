// Chatbot functionality
function toggleChat() {
    const chatBody = document.getElementById('chatBody');
    
    if (chatBody.style.display === 'none' || chatBody.style.display === '') {
        chatBody.style.display = 'block';
    } else {
        chatBody.style.display = 'none';
    }
}

function sendMessage() {
    const input = document.getElementById('chatInput');
    const messages = document.getElementById('chatMessages');
    const message = input.value.trim();
    
    if (message) {
        // Add user message
        const userMsg = document.createElement('div');
        userMsg.className = 'user-message';
        userMsg.innerHTML = `<strong>You:</strong> ${message}`;
        messages.appendChild(userMsg);
        
        // Add bot response
        setTimeout(() => {
            const botMsg = document.createElement('div');
            botMsg.className = 'bot-message';
            botMsg.innerHTML = `<strong>JDL Chat:</strong> Thank you for your message! For immediate assistance, please call us at +233 25 611 9554 or email info@jdltechsolutions.com`;
            messages.appendChild(botMsg);
            messages.scrollTop = messages.scrollHeight;
        }, 1000);
        
        input.value = '';
        messages.scrollTop = messages.scrollHeight;
    }
}

function handleEnter(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

// Close chatbot when clicking outside
document.addEventListener('click', function(event) {
    const chatWidget = document.getElementById('chatWidget');
    const chatBody = document.getElementById('chatBody');
    
    if (chatWidget && !chatWidget.contains(event.target)) {
        if (chatBody.style.display === 'block') {
            chatBody.style.display = 'none';
        }
    }
});