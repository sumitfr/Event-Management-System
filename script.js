// let verifynumber = 21;

// let usernumber = prompt("(Verify That You are Human)  Enter the number (hint- the number is only divisible by 3 and 7 and >30");

// while(verifynumber != usernumber){
//     usernumber = prompt("(Verify That You are Human) you entered wrong umber, enter again (hint - Enter the number (hint- the number is only divisible by 3 and 7 and >30)")
// }

// console.log("Congratulations you entered right number (You Are Verified)")


document.addEventListener("DOMContentLoaded", function() {
        const moreInfoButtons = document.querySelectorAll(".button");

        moreInfoButtons.forEach(button => {
            button.addEventListener("click", function() {
                const hotelName = button.parentElement.querySelector("h3").textContent.trim();
                let websiteUrl = "";

                // Set the website URL based on the hotel name
                switch (hotelName) {
                    case "Hotel Maurya":
                        websiteUrl = "https://www.maurya.com/";
                        break;
                    case "Hotel Chinmaye Inn":
                        websiteUrl = "https://chinmaye.in/";
                        break;
                    case "Mahabodhi Resort":
                        websiteUrl = "https://www.mahabodhihotel.com/";
                        break;
                    case "Bandhan Resort":
                        websiteUrl = "https://www.bandhanresort.in/";
                        break;
                    default:
                        console.log("No website found for this hotel");
                }

                // Open the website in a new tab
                if (websiteUrl !== "") {
                    window.open(websiteUrl, "_blank");
                }
            });
        });
});



// script.js

function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the selected service type and city
    const serviceType = document.getElementById('serviceType').value;
    const city = document.getElementById('city').value;

    // Redirect based on the selected service type and city
    if (serviceType === 'venues' && city === 'Patna') {
        window.location.href = 'venues_patna.html';
    } else if (serviceType === 'venues' && city === 'Bhagalpur') {
        window.location.href = 'venues_bhagalpur.html';
    } else if (serviceType === 'venues' && city === 'Gaya') {
        window.location.href = 'venues_gaya.html';
    } else if (serviceType === 'venues' && city === 'Muzaffarpur') {
        window.location.href = 'venues_muzaffarpur.html';
    } else if (serviceType === 'photographers' && city === 'Patna') {
        window.location.href = 'photography_patna.html';
    } else if (serviceType === 'beautyMakeup' && city === 'Patna') {
        window.location.href = 'makeup_patna.html';
    } else if (serviceType === 'planningDecor' && city === 'Patna') {
        window.location.href = 'decorators_patna.html';
    } else if (serviceType === 'musicDance' && city === 'Patna') {
        window.location.href = 'music_patna.html';
    } else if (serviceType === 'catering' && city === 'Patna') {
        window.location.href = 'catering_patna.html';
    } else {
        alert('There is No service avilable by Dreamfeast');
    }
}


document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });

        // Adjust the scroll position slightly to account for fixed navbar height
        setTimeout(() => {
          window.scrollBy(0, -yourNavbarHeight); // Adjust this value based on your navbar height
        }, 600); // Adjust timeout if necessary
      });
    });
  });


/*-----------------------------------chatbot system-------------------------------*/
const responses = {
    "hello": "Hi there! How can I assist you today?",
    "hi": "Hello! How can I help you?",
    "how are you": "I'm just a bot, but I'm here to help you!",
    "what is your name": "I'm your friendly chatbot!",
    "what is dreamfest": "dreamfest is an event planner system through which you can plan , your event.",
    "what is your services": "We provide following services : venues , photographers , beauty & makeup , planning & decor , music and catering." ,
    "default": "I'm sorry, I didn't understand that. Can you please rephrase?"
};

function toggleChatbot() {
    const chatbotContainer = document.getElementById('chatbotContainer');
    const openChatbotButton = document.getElementById('openChatbot');
    if (chatbotContainer.style.display === 'none' || chatbotContainer.style.display === '') {
        chatbotContainer.style.display = 'flex';
        openChatbotButton.style.display = 'none';
    } else {
        chatbotContainer.style.display = 'none';
        openChatbotButton.style.display = 'block';
    }
}

function sendMessage() {
    const chatbotInput = document.getElementById('chatbotInput');
    const message = chatbotInput.value.trim().toLowerCase();
    if (message !== '') {
        addMessageToChat('user-message', message);
        chatbotInput.value = '';
        // Simulate bot response
        setTimeout(() => {
            const response = getBotResponse(message);
            addMessageToChat('bot-message', response);
        }, 1000);
    }
}

function getBotResponse(message) {
    return responses[message] || responses["default"];
}

function addMessageToChat(className, message) {
    const chatbotBody = document.getElementById('chatbotBody');
    const messageElement = document.createElement('div');
    messageElement.className = `chatbot-message ${className}`;
    messageElement.textContent = message;
    chatbotBody.appendChild(messageElement);
    chatbotBody.scrollTop = chatbotBody.scrollHeight;
}

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

// Initialize chatbot
document.addEventListener('DOMContentLoaded', () => {
    toggleChatbot();
});

  
