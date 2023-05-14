var DateTime = luxon.DateTime;
const { createApp } = Vue

createApp({
    data() {
        return {
            // Search Bar Input
            newSearch: "",
            // User Status and Last Access Time
            userLastLogClass: "",
            userStatusClass: "dNone",
            userStatusTxt: "Online",
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
            // Message Dropdown Menu Indexes
            currentMouseover: "null",
            menuVisibility: null,
            // Current Chat Index
            currentChat: 0,
            // User Profile Object
            userProfile: {
                name: 'Sonia',
                avatar: './assets/img/ioo.gif'
                // avatar: './assets/img/avatar_io.jpg'
            },
            // Objects Array
            contacts: [
                {   name: 'Michele',         
                    avatar: './assets/img/avatar_1.jpg',                  
                    visible: true,              
                    messages: [
                        {   date: '10/01/2020 15:30:55',            message: 'Hai portato a spasso il cane?',                      status: 'sent',           star: false },
                        {   date: '10/01/2020 15:50:00',            message: 'Ricordati di stendere i panni',                      status: 'sent',           star: false },
                        {   date: '10/01/2020 16:15:22',            message: 'Tutto fatto!',                                       status: 'received',       star: false }
                    ],
                },
                {   name: 'Papi',            
                    avatar: './assets/img/avatar_2.jpg',                   
                    visible: true,
                    messages: [
                        {   date: '20/03/2020 16:30:00',            message: 'Ciao come stai?',                                    status: 'sent',           star: false },
                        {   date: '20/03/2020 16:30:55',            message: 'Bene grazie! Stasera ci vediamo?',                   status: 'received',       star: false },
                        {   date: '20/03/2020 16:35:00',            message: 'Mi piacerebbe ma devo andare a fare la spesa.',      status: 'sent',           star: false }
                    ],
                },
                {   name: 'Samuele',
                    avatar: './assets/img/avatar_3.jpg',
                    visible: true,
                    messages: [
                        {   date: '28/03/2020 10:10:40',            message: 'La Marianna va in campagna',                         status: 'received',       star: false },
                        {   date: '28/03/2020 10:20:10',            message: 'Sicuro di non aver sbagliato chat?',                 status: 'sent',           star: false },
                        {   date: '28/03/2020 16:15:22',            message: 'Ah scusa!',                                          status: 'received',       star: false }
                    ],
                },
                {   name: 'Alessandro',
                    avatar: './assets/img/avatar_4.jpg',
                    visible: true,
                    messages: [
                        {   date: '10/01/2020 15:30:55',            message: 'Lo sai che ha aperto una nuova pizzeria?',           status: 'sent',           star: false },
                        {   date: '10/01/2020 15:50:00',            message: 'Si, ma preferirei andare al cinema',                 status: 'received',       star: false }
                    ],
                },
                {   name: 'Luca',
                    avatar: './assets/img/avatar_5.jpg',
                    visible: true,
                    messages: [
                        {   date: '10/01/2020 15:30:55',            message: 'Ricordati di chiamare la nonna',                     status: 'sent',           star: false },
                        {   date: '10/01/2020 15:50:00',            message: 'Va bene, stasera la sento',                          status: 'received',       star: false }
                    ],
                },
                {   name: 'Claudia',
                    avatar: './assets/img/avatar_6.jpg',
                    visible: true,
                    messages: [
                        {   date: '10/01/2020 15:30:55',            message: 'Ciao Claudia, hai novità?',                          status: 'sent',           star: false },
                        {   date: '10/01/2020 15:50:00',            message: 'Non ancora',                                         status: 'received',       star: false },
                        {   date: '10/01/2020 15:51:00',            message: 'Nessuna nuova, buona nuova',                         status: 'sent',           star: false }
                    ],
                },
                {   name: 'Federico',
                    avatar: './assets/img/avatar_7.jpg',
                    visible: true,
                    messages: [
                        {   date: '10/01/2020 15:30:55',            message: 'Fai gli auguri a Martina che è il suo compleanno!',  status: 'sent',           star: false },
                        {   date: '10/01/2020 15:50:00',            message: 'Grazie per avermelo ricordato, le scrivo subito!',   status: 'received',       star: false }
                    ],
                },
                {   name: 'Betta',
                    avatar: './assets/img/avatar_io.jpg',
                    visible: true,
                    messages: [
                        {   date: '10/01/2020 15:30:55',            message: 'Ciao, andiamo a mangiare il sushi stasera?',         status: 'received',       star: false },
                        {   date: '10/01/2020 15:50:00',            message: 'No, l\'ho già mangiato ieri, ordiniamo pizza!',      status: 'sent',           star: false },
                        {   date: '10/01/2020 15:51:00',            message: 'Ok Baby!!',                                          status: 'received',       star: false }
                    ],
                },
                {   name: 'Mamma',
                    avatar: './assets/img/avatar_6.jpg',
                    visible: true,
                    messages: [
                        {   date: '10/01/2020 15:30:55',            message: 'Ciao, andiamo a mangiare il sushi stasera?',         status: 'received',       star: false },
                        {   date: '10/01/2020 15:50:00',            message: 'No, l\'ho già mangiato ieri, ordiniamo pizza!',      status: 'sent',           star: false },
                        {   date: '10/01/2020 15:51:00',            message: 'Ok Baby!!',                                          status: 'received',       star: false }
                    ],
                },
                {   name: 'Davide',
                    avatar: './assets/img/avatar_8.jpg',
                    visible: true,
                    messages: [
                        {   date: '10/01/2020 15:30:55',            message: 'Ciao, andiamo a mangiare la pizza stasera?',         status: 'received',       star: false },
                        {   date: '10/01/2020 15:50:00',            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',      status: 'sent',           star: false },
                        {   date: '10/01/2020 15:51:00',            message: 'OK!!',                                               status: 'received',       star: false }
                    ],
                }
            ]
        }
    },
    methods: {
        // Compare the search bar input with the Contacts list and returns only matches
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
            if (this.newMessage.message.length > 0 && this.newMessage.message.trim()) {
                // Send New Message and start automatic reply
                this.newMessage.date = this.currentTime()
                this.contacts[this.currentChat].messages.push({...this.newMessage})
                this.newMessage.message = ""
                this.getAutoReply()
            } else {
                // Error input for new message
                this.inputErrorClass = "inputError",
                setTimeout(() => this.inputErrorClass = "", 600);
            }
        },
        // Change user status and send automatic reply to the active chat
        getAutoReply() {
            this.userLastLogClass = "dNone",
            this.userStatusTxt = "Online",
            this.userStatusClass = "",
            setTimeout(() => {
                this.userStatusTxt = "Sta scrivendo..."
            }, 1 * 5000);
            setTimeout(() => {
                this.autoReply.date = this.currentTime(),
                this.contacts[this.currentChat].messages.push({...this.autoReply}),
                this.userStatusTxt = "Online"
            }, 1 * 10000);
            setTimeout(() => {
                this.userLastLogClass = "",
                this.userStatusClass = "dNone"
            }, 1 * 13000)
        },
        // Delete a message inside active chat
        removeMessage(position) {
            this.contacts[this.currentChat].messages.splice(position, 1),
            this.menuVisibility = null
        },
        // Show Message Dropdown Menu button
        showBtnMenu(i) {
            this.currentMouseover = i
        },
        // Hide Message Dropdown Menu button
        hideBtnMenu() {
            this.currentMouseover = null
        },
        // Show/hide Message Dropdown Menu
        showMenu(i) {
            this.menuVisibility != null ? this.menuVisibility = null : this.menuVisibility = i,
            setTimeout(() => this.menuVisibility = null, 1 * 9000);
        },
        // Return a string with current date and time
        currentTime() {
            return DateTime.now().toString()
        },
        // Return a string with last access/message time
        lastAccess(element) {
            if (element != undefined) {
                // Last Message
                return element.messages[element.messages.length-1].date.slice(11,16)
            } else {
                // Last Access
                return this.contacts[this.currentChat].messages[this.contacts[this.currentChat].messages.length-1].date.slice(11,16)
            }
        },
        // Return a string with message time
        messTime(element) {
            return element.date.slice(11,16)
        } 
    },
    mounted() {
        console.log("Hello from VueJS 👋 Current Time: " + DateTime.now().toString().slice(11,16))
    }
}).mount('#app')