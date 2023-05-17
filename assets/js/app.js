// var DateTime = luxon.DateTime; // Alternative Luxon installation method 
const { createApp } = Vue

createApp({
    data() {
        return {
            // Luxon Installation Data
            DateTime: luxon.DateTime,
            // Mobile Class
            hideActiveChatMob: "dNoneMobile",
            hideAllChatMob: "",
            // Chat Search Bar
            newSearch: "",
            searchFalseResult: 0,
            // User Status and Last Access Time
            userLastLogClass: "",
            userStatusClass: "dNone",
            userStatusTxt: "Online",
            // Chat & Message Dropdown Menu
            chatMenuVisibility: false,
            msgMenuVisibility: null,
            currentMouseover: null,
            // Current Chat Index
            currentChat: 0,
            // User Profile Object
            userProfile: {
                name: 'Sonia',
                avatar: './assets/img/ioo.gif'
                // avatar: './assets/img/avatar_io.jpg'
            },
            // New Message
            newMessage: { 
                date: '', 
                message: '', 
                status: 'sent'
            },
            inputErrorClass: "",
            // New Chat
            formNewChatVisibility: false,
            newChat: {
                name: '',
                avatar: '',
                visible: true,
                gender: '',
                messages: []
            },
            // Auto Reply Message
            autoReply: [
                {    date: '',              message: 'Top! 👍',                                           status: 'received',       star: false },
                {    date: '',              message: 'Perfetto 😁',                                       status: 'received',       star: false },
                {    date: '',              message: 'Come stai?',                                        status: 'received',       star: false },
                {    date: '',              message: 'Ti voglio bene 💛',                                 status: 'received',       star: false },
                {    date: '',              message: 'Torno presto..',                                    status: 'received',       star: false },
                {    date: '',              message: 'Andiamo al pub stasera? 🍻',                        status: 'received',       star: false },
                {    date: '',              message: 'Che tempo fa lì?',                                  status: 'received',       star: false },
                {    date: '',              message: 'Sono con Carlotta, ci sentiamo più tardi :)',       status: 'received',       star: false },
                {    date: '',              message: 'Biglietti per il concerto presi!! 💃 ',             status: 'received',       star: false },
                {    date: '',              message: '😘',                                                status: 'received',       star: false }       
            ],
            // Objects Array with Contact list
            contacts: [
                {   name: 'Mario',         
                    avatar: './assets/img/avatar_1.jpg',                  
                    visible: true,              
                    messages: [
                        {   date: '10/1/2023 15:30:55',            message: 'Hai portato a spasso il cane?',                      status: 'sent',           star: false },
                        {   date: '10/1/2023 15:50:00',            message: 'Ricordati di stendere i panni',                      status: 'sent',           star: false },
                        {   date: '10/1/2023 16:15:22',            message: 'Tutto fatto!',                                       status: 'received',       star: false },
                        {   date: '10/1/2023 16:30:55',            message: 'Ottimo grazie 🐕',                                   status: 'sent',           star: false },
                        {   date: '10/1/2023 16:31:00',            message: 'Stasera ci sei a cena?',                             status: 'sent',           star: false },
                        {   date: '10/1/2023 16:50:12',            message: 'Si! Cosa mangiamo?',                                 status: 'received',       star: false },
                        {   date: '10/1/2023 17:00:02',            message: 'Lasagne al forno della nonna!!!',                    status: 'sent',           star: false },
                        {   date: '10/1/2023 17:01:30',            message: 'Le mie preferite 😍 Non vedo l\'ora',                status: 'received',       star: true },
                        {   date: '10/1/2023 18:20:54',            message: 'A che ora arrivi?',                                  status: 'sent',           star: false },
                        {   date: '10/1/2023 18:35:30',            message: 'Sto partendo, sono appena uscito dalla palestra',    status: 'received',       star: false }
                    ],
                },
                {   name: 'Papi',            
                    avatar: './assets/img/avatar_2.jpg',                   
                    visible: true,
                    messages: [
                        {   date: '20/3/2023 16:30:00',            message: 'Ricordati di chiamare la nonna, ringraziala.',       status: 'received',       star: false },
                        {   date: '20/3/2023 16:30:55',            message: 'Va bene, tra poco la sento!',                        status: 'sent',           star: false }
                    ],
                },
                {   name: 'Samuele',
                    avatar: './assets/img/avatar_3.jpg',
                    visible: true,
                    messages: [
                        {   date: '28/3/2023 10:10:40',            message: 'La Marianna va in campagna',                         status: 'received',       star: false },
                        {   date: '28/3/2023 10:20:10',            message: 'Sicuro di non aver sbagliato chat?',                 status: 'sent',           star: false },
                        {   date: '28/3/2023 16:15:22',            message: 'Ah scusa!',                                          status: 'received',       star: false }
                    ],
                },
                {   name: 'Alessandro',
                    avatar: './assets/img/avatar_4.jpg',
                    visible: true,
                    messages: [
                        {   date: '10/1/2023 15:30:55',            message: 'Lo sai che ha aperto una nuova pizzeria?',           status: 'sent',           star: false },
                        {   date: '10/1/2023 15:50:00',            message: 'Si, ma preferirei andare al cinema',                 status: 'received',       star: false }
                    ],
                },
                {   name: 'Luca',
                    avatar: './assets/img/avatar_5.jpg',
                    visible: true,
                    messages: [
                        {   date: '10/1/2023 15:30:55',            message: 'Ciao come stai?',                                    status: 'sent',           star: false },
                        {   date: '10/1/2023 15:50:00',            message: 'Bene grazie! Stasera ci vediamo?',                   status: 'received',       star: false },
                        {   date: '10/1/2023 15:50:00',            message: 'Alle 21:30 sono da te 😘',                           status: 'sent',           star: false }
                    ],
                },
                {   name: 'Claudia',
                    avatar: './assets/img/avatar_6.jpg',
                    visible: true,
                    messages: [
                        {   date: '10/1/2023 15:30:55',            message: 'Ciao Claudia, hai novità?',                          status: 'sent',           star: false },
                        {   date: '10/1/2023 15:50:00',            message: 'Non ancora',                                         status: 'received',       star: false },
                        {   date: '10/1/2023 15:51:00',            message: 'Nessuna nuova, buona nuova',                         status: 'sent',           star: false }
                    ],
                },
                {   name: 'Federico',
                    avatar: './assets/img/avatar_7.jpg',
                    visible: true,
                    messages: [
                        {   date: '10/1/2023 15:30:55',            message: 'Fai gli auguri a Martina che è il suo compleanno!',  status: 'sent',           star: false },
                        {   date: '10/1/2023 15:50:00',            message: 'Grazie per avermelo ricordato, le scrivo subito!',   status: 'received',       star: false }
                    ],
                },
                {   name: 'Betta',
                    avatar: './assets/img/avatar_io.jpg',
                    visible: true,
                    messages: [
                        {   date: '10/1/2023 15:30:55',            message: 'Ciao, andiamo a mangiare il sushi stasera?',         status: 'received',       star: false },
                        {   date: '10/1/2023 15:50:00',            message: 'No, l\'ho già mangiato ieri, ordiniamo pizza!',      status: 'sent',           star: false },
                        {   date: '10/1/2023 15:51:00',            message: 'Ok Baby!!',                                          status: 'received',       star: false }
                    ],
                },
                {   name: 'Mamma',
                    avatar: './assets/img/avatar_6.jpg',
                    visible: true,
                    messages: [
                        {   date: '10/1/2023 15:30:55',            message: 'Ciao, che tempo fa lì? Qui diluvia!',                status: 'received',       star: false },
                        {   date: '10/1/2023 15:50:00',            message: 'Ciao mamma, qui invece c\'è nuvolo ma non piove.',   status: 'sent',           star: false },
                        {   date: '10/1/2023 15:51:00',            message: 'Ok, ti voglio bene. Dimmi se il tempo peggiora',     status: 'received',       star: true },
                        {   date: '10/1/2023 16:01:55',            message: 'Anch\'io ti voglio bene 💛',                         status: 'sent',           star: false }
                    ],
                },
                {   name: 'Davide',
                    avatar: './assets/img/avatar_8.jpg',
                    visible: true,
                    messages: [
                        {   date: '10/1/2023 15:30:55',            message: 'Ciao, ci sei al compleanno di Stefy?',               status: 'received',       star: false },
                        {   date: '10/1/2023 15:50:00',            message: 'Si, stiamo già organizzando il regalo! Partecipi?',  status: 'sent',           star: false },
                        {   date: '10/1/2023 15:51:00',            message: 'Certo! Aggiungimi al gruppo',                        status: 'received',       star: false }
                    ],
                }
            ]
        }
    },
    methods: {
        // Add new chat 
        addNewChat() {
            if (this.newChat.name != '' && this.newChat.gender != '') {
                this.newChat.avatar = this.newChat.gender === 'female' ? './assets/img/avatar_io.jpg' : './assets/img/avatar_5.jpg';
                this.newChat.name = this.newChat.name.toLowerCase();
                this.newChat.name = this.newChat.name.charAt(0).toUpperCase() + this.newChat.name.slice(1);
                this.contacts.unshift({...this.newChat});
                this.formNewChatVisibility = false;
                this.newChat.name = '';
                this.newChat.messages = [];
                this.newChat.gender = '';
            }
        },
        // Compare the search bar input with the Contacts list and returns only matches. If no matches, open new chat form
        chatSearch() {
            this.contacts.forEach((element) => {
                element.visible = true;
                if (!element.name.toLowerCase().includes(this.newSearch.toLowerCase())) {
                    element.visible = false;
                    this.searchFalseResult++;
                }
            })
            // If there's no matches, open new chat form
            if (this.searchFalseResult >= this.contacts.length) {
                this.newChat.name = this.newSearch;
                this.formNewChatVisibility = true;
            }
            this.searchFalseResult = 0       
        },
        // Add new message inside active chat
        addMessage() {
            if (this.newMessage.message.length > 0 && this.newMessage.message.trim()) {
                // Send New Message and start automatic reply
                this.newMessage.date = this.currentTime();
                this.contacts[this.currentChat].messages.push({...this.newMessage});
                let currentChatReply = this.currentChat;
                this.scrollChatDown();
                this.newMessage.message = "";
                this.getAutoReply(currentChatReply);
            } else {
                // Error input for new message
                this.inputErrorClass = "inputError";
                setTimeout(() => this.inputErrorClass = "", 600);
            }
        },
        // Change user status and send automatic reply to the active chat
        getAutoReply(chat) {
            this.userLastLogClass = "dNone",
            this.userStatusTxt = "Online",
            this.userStatusClass = "",
            setTimeout(() => this.userStatusTxt = "Sta scrivendo...", 1 * 5000);
            setTimeout(() => {
                let randomReply = Math.floor(Math.random() * (9 - 0 + 1) + 0 );
                this.autoReply[randomReply].date = this.currentTime();
                this.contacts[chat].messages.push({...this.autoReply[randomReply]});
                this.userStatusTxt = "Online";
                this.scrollChatDown();
            }, 1 * 10000);
            setTimeout(() => {
                this.userLastLogClass = "";
                this.userStatusClass = "dNone";
            }, 1 * 13000);
        },
        // Scroll down active chat 
        scrollChatDown() {
            setTimeout(() => this.$refs.chatMessagesSec.scrollTo(0, this.$refs.chatMessagesSec.scrollHeight), 300);
        },
        // Delete a message inside active chat
        removeMessage(position) {
            this.contacts[this.currentChat].messages.splice(position, 1),
            this.msgMenuVisibility = null
        },
        // Copy text message to clipboard
        copyText(text) {
            navigator.clipboard.writeText(text)
        },
        // Clear all chat messages inside active chat
        clearChat() {
            this.contacts[this.currentChat].messages.length = 0
        },
        // Delete the entire active chat and all related contact data, from Contacts list
        deleteChat() {
            this.contacts.splice(this.currentChat, 1),
            this.currentChat > this.contacts.length - 1 ? this.currentChat-- : null
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
            this.msgMenuVisibility != null ? this.msgMenuVisibility = null : this.msgMenuVisibility = i;
            setTimeout(() => this.msgMenuVisibility = null, 1 * 9000);
        },
        // Return a string with current date and time
        currentTime() {
            // return this.DateTime.now().toString(),
            let dateShort = this.DateTime.now().toLocaleString(this.DateTime.DATE_SHORT);
            let timeSec = this.DateTime.now().toLocaleString(this.DateTime.TIME_WITH_SECONDS);
            let date = `${dateShort} ${timeSec}`;
            return date
        },
        // Return a string with last access/message time
        lastAccess(element) {
            if (element != undefined) {
                // Last message time
                return element.messages[element.messages.length-1].date.slice(10,15);
            } else {
                // Last access time
                return this.contacts[this.currentChat].messages[this.contacts[this.currentChat].messages.length-1].date.slice(10,15);
            }
        },
        // Return a string with last access date
        lastAccessDate() {
            let lastAccessDate = this.contacts[this.currentChat].messages[this.contacts[this.currentChat].messages.length-1].date.slice(0,9);
            if (lastAccessDate == this.DateTime.now().toLocaleString(this.DateTime.DATE_SHORT)) {
                return "oggi";
            } else {
                return lastAccessDate;
            }
        },
        // Show and print Emoji
        showEmoji() {
            const picker = new EmojiButton();
            picker.togglePicker(this.$refs.btnEMoji);
            picker.on('emoji', emoji => this.newMessage.message += emoji);
        }
    },
    mounted() {
        console.log("Hello from VueJS 👋 Current Time: " + this.DateTime.now().toString().slice(11,16)),
        this.scrollChatDown()
    }
}).mount('#app')