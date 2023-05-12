const { createApp } = Vue

createApp({
    data() {
        return {
            // Search Bar Input
            newSearch: "",
            // New Message Input
            newMessage: { 
                date: '', 
                message: '', 
                status: 'sent'
            },
            inputErrorClass: "",
            // Auto Reply Message
            autoReply: {
                date: '', 
                message: 'Top! 👍', 
                status: 'received'
            },
            // Current Chat Index
            currentChat: 0,
            // User Profile Object
            userProfile: {
                name: 'Sofia',
                avatar: './assets/img/avatar_io.jpg'
            },
            // Objects Array
            contacts: [
                {   name: 'Michele',         
                    avatar: './assets/img/avatar_1.jpg',                  
                    visible: true,              
                    messages: [
                        {   date: '10/01/2020 15:30:55',            message: 'Hai portato a spasso il cane?',                      status: 'sent'     },
                        {   date: '10/01/2020 15:50:00',            message: 'Ricordati di stendere i panni',                      status: 'sent'     },
                        {   date: '10/01/2020 16:15:22',            message: 'Tutto fatto!',                                       status: 'received' }
                    ],
                },
                {   name: 'Papi',            
                    avatar: './assets/img/avatar_2.jpg',                   
                    visible: true,
                    messages: [
                        {   date: '20/03/2020 16:30:00',            message: 'Ciao come stai?',                                    status: 'sent'     },
                        {   date: '20/03/2020 16:30:55',            message: 'Bene grazie! Stasera ci vediamo?',                   status: 'received' },
                        {   date: '20/03/2020 16:35:00',            message: 'Mi piacerebbe ma devo andare a fare la spesa.',      status: 'sent'     }
                    ],
                },
                {   name: 'Samuele',
                    avatar: './assets/img/avatar_3.jpg',
                    visible: true,
                    messages: [
                        {   date: '28/03/2020 10:10:40',            message: 'La Marianna va in campagna',                         status: 'received' },
                        {   date: '28/03/2020 10:20:10',            message: 'Sicuro di non aver sbagliato chat?',                 status: 'sent'     },
                        {   date: '28/03/2020 16:15:22',            message: 'Ah scusa!',                                          status: 'received' }
                    ],
                },
                {   name: 'Alessandro',
                    avatar: './assets/img/avatar_4.jpg',
                    visible: true,
                    messages: [
                        {   date: '10/01/2020 15:30:55',            message: 'Lo sai che ha aperto una nuova pizzeria?',           status: 'sent'     },
                        {   date: '10/01/2020 15:50:00',            message: 'Si, ma preferirei andare al cinema',                 status: 'received' }
                    ],
                },
                {   name: 'Luca',
                    avatar: './assets/img/avatar_5.jpg',
                    visible: true,
                    messages: [
                        {   date: '10/01/2020 15:30:55',            message: 'Ricordati di chiamare la nonna',                     status: 'sent'     },
                        {   date: '10/01/2020 15:50:00',            message: 'Va bene, stasera la sento',                          status: 'received' }
                    ],
                },
                {   name: 'Claudia',
                    avatar: './assets/img/avatar_6.jpg',
                    visible: true,
                    messages: [
                        {   date: '10/01/2020 15:30:55',            message: 'Ciao Claudia, hai novità?',                          status: 'sent'     },
                        {   date: '10/01/2020 15:50:00',            message: 'Non ancora',                                         status: 'received' },
                        {   date: '10/01/2020 15:51:00',            message: 'Nessuna nuova, buona nuova',                         status: 'sent'     }
                    ],
                },
                {   name: 'Federico',
                    avatar: './assets/img/avatar_7.jpg',
                    visible: true,
                    messages: [
                        {   date: '10/01/2020 15:30:55',            message: 'Fai gli auguri a Martina che è il suo compleanno!',  status: 'sent'     },
                        {   date: '10/01/2020 15:50:00',            message: 'Grazie per avermelo ricordato, le scrivo subito!',   status: 'received' }
                    ],
                },
                {   name: 'Betta',
                    avatar: './assets/img/avatar_6.jpg',
                    visible: true,
                    messages: [
                        {   date: '10/01/2020 15:30:55',            message: 'Ciao, andiamo a mangiare il sushi stasera?',         status: 'received' },
                        {   date: '10/01/2020 15:50:00',            message: 'No, l\'ho già mangiato ieri, ordiniamo pizza!',      status: 'sent'     },
                        {   date: '10/01/2020 15:51:00',            message: 'Ok Baby!!',                                          status: 'received' }
                    ],
                },
                {   name: 'Mamma',
                    avatar: './assets/img/avatar_6.jpg',
                    visible: true,
                    messages: [
                        {   date: '10/01/2020 15:30:55',            message: 'Ciao, andiamo a mangiare il sushi stasera?',         status: 'received' },
                        {   date: '10/01/2020 15:50:00',            message: 'No, l\'ho già mangiato ieri, ordiniamo pizza!',      status: 'sent'     },
                        {   date: '10/01/2020 15:51:00',            message: 'Ok Baby!!',                                          status: 'received' }
                    ],
                },
                {   name: 'Davide',
                    avatar: './assets/img/avatar_8.jpg',
                    visible: true,
                    messages: [
                        {   date: '10/01/2020 15:30:55',            message: 'Ciao, andiamo a mangiare la pizza stasera?',         status: 'received' },
                        {   date: '10/01/2020 15:50:00',            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',      status: 'sent'     },
                        {   date: '10/01/2020 15:51:00',            message: 'OK!!',                                               status: 'received' }
                    ],
                }
            ]
        }
    },
    methods: {
        //Compare the search bar input with the Contacts list and returns only matches.
        chatSearch() {
            this.contacts.forEach((element) => {
                element.visible = true
                if (!element.name.toLowerCase().includes(this.newSearch.toLowerCase())) {
                    element.visible = false
                }
            })
        },
        // Add new message inside active chat
        addMessage() {
            if (this.newMessage.message.length > 0) {
                // Send New Message
                this.contacts[this.currentChat].messages.push({...this.newMessage})
                this.newMessage.message = ""
                // Get automatic reply
                setTimeout(() => this.contacts[this.currentChat].messages.push({...this.autoReply}), 1000);
            } else {
                // Error input for new message
                this.inputErrorClass = "inputError",
                setTimeout(() => this.inputErrorClass = "", 600);
            }
        }
    },
    mounted() {
        console.log("Hello from VueJS 👋")
    }
}).mount('#app')