
import Chatbot from "https://cdn.jsdelivr.net/npm/flowise-embed/dist/web.js"
Chatbot.init({
    chatflowid: "c6d02d1b-6972-445d-9f1b-d508259bbf6d",
    apiHost: "https://flowiseai-railway-production-6dc5.up.railway.app",
    chatflowConfig: {
        //topK: 2
    },
    theme: {
        button: {
            backgroundColor: "#10AB6A",
            right: 20,
            bottom: 20,
            size: 'large',
            iconColor: "white",
            customIconSrc: "https://i.pinimg.com/originals/0c/67/5a/0c675a8e1061478d2b7b21b330093444.gif",
        },
        chatWindow: {
            welcomeMessage: "Hola, soy tu asistente emocional, ¿cómo te sientes el día de hoy?",
            backgroundColor: "#ffffff",
            height: 600,
            width: 380,
            fontSize: 16,
            poweredByTextColor: "#303235",
            botMessage: {
                backgroundColor: "#f7f8ff",
                textColor: "#303235",
                showAvatar: true,
                avatarSrc: "https://i.pinimg.com/originals/0c/67/5a/0c675a8e1061478d2b7b21b330093444.gif",
            },
            userMessage: {
                backgroundColor: "#3B81F6",
                textColor: "#ffffff",
                showAvatar: true,
                avatarSrc: "https://cdn.dribbble.com/users/398490/screenshots/1716348/users.gif",
            },
            textInput: {
                placeholder: "Háblame de lo que quieras 😊",
                backgroundColor: "#ffffff",
                textColor: "#303235",
                sendButtonColor: "#76D602",
                maxCharsWarningMessage: 'You exceeded the characters limit. Please input less than 50 characters.',
            },
            feedback: {
                color: '#303235',
            },
            footer: {
                textColor: '#303235',
                text: 'Desarollado por ',
                company: 'Bootcamp IA',
                companyLink: 'https://bot-consejero-ia.netlify.app/',
            },
        }
    }
})