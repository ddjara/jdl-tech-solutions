// Chatbot functionality
function toggleChat() {
    const chatWidget = document.getElementById('chatWidget');
    chatWidget.classList.toggle('expanded');
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
            botMsg.innerHTML = `<strong>JDL Chat:</strong> ${getBotResponse(message)}`;
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

// Bot responses
function getBotResponse(message) {
    const msg = message.toLowerCase();
    
    if (msg.includes('service') || msg.includes('what do you do')) {
        return 'We offer Web & Software Solutions, Creative Media & Branding, Digital Marketing, Cybersecurity & Data Solutions, and IT Management & Support. Which service interests you?';
    }
    if (msg.includes('price') || msg.includes('cost') || msg.includes('how much')) {
        return 'Our pricing varies based on your specific needs. We offer free consultations to discuss your requirements and provide accurate quotes. Would you like to schedule one?';
    }
    if (msg.includes('contact') || msg.includes('phone') || msg.includes('email')) {
        return 'You can reach us at +233 25 611 9554 or email info@jdltechsolutions.com. We\'re available Monday-Friday, 9AM-6PM.';
    }
    if (msg.includes('location') || msg.includes('address') || msg.includes('where')) {
        return 'We\'re located at #2 Kwatei Francis Street, Accra, Ghana. Feel free to visit us during business hours!';
    }
    if (msg.includes('web') || msg.includes('website') || msg.includes('software')) {
        return 'Our Web & Software Solutions include custom websites, web applications, mobile apps, and enterprise software. What type of project are you considering?';
    }
    if (msg.includes('brand') || msg.includes('design') || msg.includes('logo')) {
        return 'Our Creative Media & Branding services include logo design, brand identity, photography, videography, and marketing materials. Need help with your brand?';
    }
    if (msg.includes('marketing') || msg.includes('social media') || msg.includes('seo')) {
        return 'We provide comprehensive Digital Marketing services including SEO, social media management, content marketing, and online advertising. Want to boost your online presence?';
    }
    if (msg.includes('security') || msg.includes('cyber') || msg.includes('data')) {
        return 'Our Cybersecurity & Data Solutions protect your business with security audits, data backup, threat monitoring, and compliance services. Concerned about your data security?';
    }
    if (msg.includes('support') || msg.includes('it management') || msg.includes('help')) {
        return 'We offer 24/7 IT Management & Support including system maintenance, technical support, cloud services, and infrastructure management. Need ongoing IT support?';
    }
    if (msg.includes('hello') || msg.includes('hi') || msg.includes('hey')) {
        return 'Hello! Welcome to JDL TECH SOLUTIONS. I\'m here to help you learn about our services. What can I assist you with today?';
    }
    if (msg.includes('thank') || msg.includes('thanks')) {
        return 'You\'re welcome! Is there anything else I can help you with? Feel free to ask about our services or contact information.';
    }
    
    return 'Thank you for your message! For detailed information about our services, please call us at +233 25 611 9554 or email info@jdltechsolutions.com. How else can I help you?';
}

// Close chatbot when clicking outside
document.addEventListener('click', function(event) {
    const chatWidget = document.getElementById('chatWidget');
    
    if (chatWidget && !chatWidget.contains(event.target)) {
        chatWidget.classList.remove('expanded');
    }
});