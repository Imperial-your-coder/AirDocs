/**
 * Agent Dashboard - Logique principale avec données mock
 */

// Données mock directement dans le fichier (pour rester autonome)
const mockConversations = [
    {
        id: 1,
        name: "Brandon Madsen",
        avatar: "BM",
        lastMessage: "What about 2:30 PM?",
        time: "11:08",
        unread: 3,
        status: "active",
        orderId: "ORD-78923",
        paymentStatus: "pending",
        amountDue: 3500,
        assignee: "Paul Leon",
        customer: {
            email: "brandon.madsen@example.com",
            phone: "+243 81 234 5678"
        },
        messages: [
            {
                id: 1,
                type: "received",
                sender: "Brandon Madsen",
                avatar: "BM",
                content: "Hello, I'd like to check on my printing order.",
                time: "10:30 AM",
                timestamp: "2023-06-05T10:30:00"
            },
            {
                id: 2,
                type: "sent",
                sender: "Paul Leon",
                content: "Hi Brandon! I can check that for you. What's your order number?",
                time: "10:32 AM",
                timestamp: "2023-06-05T10:32:00"
            },
            {
                id: 3,
                type: "received",
                sender: "Brandon Madsen",
                avatar: "BM",
                content: "It's ORD-78923. I submitted it this morning.",
                time: "10:33 AM",
                timestamp: "2023-06-05T10:33:00"
            },
            {
                id: 4,
                type: "sent",
                sender: "Paul Leon",
                content: "I see it. Your order is currently being processed. It should be ready in about 2 hours.",
                time: "10:35 AM",
                timestamp: "2023-06-05T10:35:00"
            },
            {
                id: 5,
                type: "status",
                status: "processing",
                content: "Impression en cours... 12/24 pages",
                time: "10:40 AM",
                timestamp: "2023-06-05T10:40:00"
            },
            {
                id: 6,
                type: "received",
                sender: "Brandon Madsen",
                avatar: "BM",
                content: "Great! Can I pick it up at 2:30 PM?",
                time: "11:08 AM",
                timestamp: "2023-06-05T11:08:00"
            },
            {
                id: 7,
                type: "attachment",
                sender: "Brandon Madsen",
                avatar: "BM",
                attachment: {
                    name: "Rapport_final.pdf",
                    size: "2.4 MB",
                    type: "pdf"
                },
                time: "11:09 AM",
                timestamp: "2023-06-05T11:09:00"
            },
            {
                id: 8,
                type: "received",
                sender: "Brandon Madsen",
                avatar: "BM",
                content: "What about 2:30 PM?",
                time: "11:08 AM",
                timestamp: "2023-06-05T11:08:00"
            }
        ],
        printDetails: {
            pages: 24,
            colors: "Couleur",
            sides: "Recto seulement",
            binding: "Spirale",
            format: "A4",
            paper: "80g standard"
        },
        documents: [
            {
                id: 1,
                name: "Document1.pdf",
                size: "2.4 MB",
                type: "pdf",
                uploaded: "05/06/2023 09:15"
            },
            {
                id: 2,
                name: "Rapport_final.docx",
                size: "1.8 MB",
                type: "word",
                uploaded: "05/06/2023 09:16"
            }
        ]
    },
    {
        id: 2,
        name: "Sophie Lambert",
        avatar: "SL",
        lastMessage: "When will my order be ready?",
        time: "10:45",
        unread: 0,
        status: "pending",
        orderId: "ORD-78924",
        paymentStatus: "paid",
        amountDue: 12000,
        assignee: "Paul Leon",
        customer: {
            email: "sophie.l@example.com",
            phone: "+243 82 345 6789"
        },
        messages: [
            {
                id: 1,
                type: "received",
                sender: "Sophie Lambert",
                avatar: "SL",
                content: "Hello, I'm checking on my order #ORD-78924.",
                time: "10:30 AM",
                timestamp: "2023-06-05T10:30:00"
            },
            {
                id: 2,
                type: "sent",
                sender: "Paul Leon",
                content: "Hi Sophie! Your order is ready for pickup.",
                time: "10:40 AM",
                timestamp: "2023-06-05T10:40:00"
            },
            {
                id: 3,
                type: "status",
                status: "ready",
                content: "Impression terminée • Prêt à récupérer",
                time: "10:45 AM",
                timestamp: "2023-06-05T10:45:00"
            },
            {
                id: 4,
                type: "received",
                sender: "Sophie Lambert",
                avatar: "SL",
                content: "When will my order be ready?",
                time: "10:45 AM",
                timestamp: "2023-06-05T10:45:00"
            }
        ],
        printDetails: {
            pages: 48,
            colors: "Noir et blanc",
            sides: "Recto-verso",
            binding: "Agrafe",
            format: "A4",
            paper: "90g brillant"
        },
        documents: [
            {
                id: 1,
                name: "Thèse_doctorat.pdf",
                size: "8.2 MB",
                type: "pdf",
                uploaded: "04/06/2023 14:20"
            }
        ]
    },
    {
        id: 3,
        name: "Thomas Dubois",
        avatar: "TD",
        lastMessage: "Can I change the print settings?",
        time: "09:30",
        unread: 1,
        status: "ready",
        orderId: "ORD-78925",
        paymentStatus: "paid",
        amountDue: 7500,
        assignee: "Marie Claire",
        customer: {
            email: "thomas.d@example.com",
            phone: "+243 83 456 7890"
        },
        messages: [
            {
                id: 1,
                type: "received",
                sender: "Thomas Dubois",
                avatar: "TD",
                content: "Hi, I need to print my CV urgently.",
                time: "09:15 AM",
                timestamp: "2023-06-05T09:15:00"
            },
            {
                id: 2,
                type: "sent",
                sender: "Marie Claire",
                content: "Sure! Please send your file and specify the print settings.",
                time: "09:20 AM",
                timestamp: "2023-06-05T09:20:00"
            },
            {
                id: 3,
                type: "attachment",
                sender: "Thomas Dubois",
                avatar: "TD",
                attachment: {
                    name: "CV_Thomas_Dubois.docx",
                    size: "456 KB",
                    type: "word"
                },
                time: "09:25 AM",
                timestamp: "2023-06-05T09:25:00"
            },
            {
                id: 4,
                type: "received",
                sender: "Thomas Dubois",
                avatar: "TD",
                content: "Can I change the print settings? I want it on glossy paper.",
                time: "09:30 AM",
                timestamp: "2023-06-05T09:30:00"
            }
        ],
        printDetails: {
            pages: 2,
            colors: "Couleur",
            sides: "Recto seulement",
            binding: "Aucune",
            format: "A4",
            paper: "120g glacé"
        },
        documents: [
            {
                id: 1,
                name: "CV_Thomas_Dubois.docx",
                size: "456 KB",
                type: "word",
                uploaded: "05/06/2023 09:25"
            }
        ]
    },
    {
        id: 4,
        name: "Alice Martin",
        avatar: "AM",
        lastMessage: "Thank you for the quick service!",
        time: "Hier",
        unread: 0,
        status: "delivered",
        orderId: "ORD-78926",
        paymentStatus: "cash",
        amountDue: 0,
        assignee: "Paul Leon",
        customer: {
            email: "alice.m@example.com",
            phone: "+243 84 567 8901"
        },
        messages: [
            {
                id: 1,
                type: "received",
                sender: "Alice Martin",
                avatar: "AM",
                content: "I just picked up my order.",
                time: "04:20 PM",
                timestamp: "2023-06-04T16:20:00"
            },
            {
                id: 2,
                type: "sent",
                sender: "Paul Leon",
                content: "Great! Hope everything is to your satisfaction.",
                time: "04:22 PM",
                timestamp: "2023-06-04T16:22:00"
            },
            {
                id: 3,
                type: "received",
                sender: "Alice Martin",
                avatar: "AM",
                content: "Thank you for the quick service! The quality is excellent.",
                time: "04:25 PM",
                timestamp: "2023-06-04T16:25:00"
            }
        ],
        printDetails: {
            pages: 12,
            colors: "Couleur",
            sides: "Recto-verso",
            binding: "Reliure thermocollée",
            format: "A5",
            paper: "80g standard"
        },
        documents: [
            {
                id: 1,
                name: "Brochure_marketing.pdf",
                size: "3.2 MB",
                type: "pdf",
                uploaded: "04/06/2023 11:45"
            }
        ]
    },
    {
        id: 5,
        name: "Robert Wilson",
        avatar: "RW",
        lastMessage: "I need this document urgently",
        time: "Hier",
        unread: 5,
        status: "processing",
        orderId: "ORD-78927",
        paymentStatus: "pending",
        amountDue: 9500,
        assignee: "Jean Dupont",
        customer: {
            email: "robert.w@example.com",
            phone: "+243 85 678 9012"
        },
        messages: [
            {
                id: 1,
                type: "received",
                sender: "Robert Wilson",
                avatar: "RW",
                content: "URGENT: I need 50 copies of this document printed today.",
                time: "02:15 PM",
                timestamp: "2023-06-04T14:15:00"
            },
            {
                id: 2,
                type: "sent",
                sender: "Jean Dupont",
                content: "We can handle that. Please send the file and specifications.",
                time: "02:20 PM",
                timestamp: "2023-06-04T14:20:00"
            },
            {
                id: 3,
                type: "attachment",
                sender: "Robert Wilson",
                avatar: "RW",
                attachment: {
                    name: "Manuel_formation.pdf",
                    size: "15.8 MB",
                    type: "pdf"
                },
                time: "02:25 PM",
                timestamp: "2023-06-04T14:25:00"
            },
            {
                id: 4,
                type: "received",
                sender: "Robert Wilson",
                avatar: "RW",
                content: "I need this document urgently for a meeting at 5 PM.",
                time: "02:30 PM",
                timestamp: "2023-06-04T14:30:00"
            }
        ],
        printDetails: {
            pages: 120,
            colors: "Noir et blanc",
            sides: "Recto-verso",
            binding: "Spirale métal",
            format: "A4",
            paper: "80g standard"
        },
        documents: [
            {
                id: 1,
                name: "Manuel_formation.pdf",
                size: "15.8 MB",
                type: "pdf",
                uploaded: "04/06/2023 14:25"
            }
        ]
    },
    {
        id: 6,
        name: "Emma Johnson",
        avatar: "EJ",
        lastMessage: "Do you offer binding services?",
        time: "08:15",
        unread: 0,
        status: "cancelled",
        orderId: "ORD-78928",
        paymentStatus: "pending",
        amountDue: 0,
        assignee: "Marie Claire",
        customer: {
            email: "emma.j@example.com",
            phone: "+243 86 789 0123"
        },
        messages: [
            {
                id: 1,
                type: "received",
                sender: "Emma Johnson",
                avatar: "EJ",
                content: "Hello, do you offer binding services for thesis printing?",
                time: "08:00 AM",
                timestamp: "2023-06-05T08:00:00"
            },
            {
                id: 2,
                type: "sent",
                sender: "Marie Claire",
                content: "Yes, we offer spiral binding, thermal binding, and hardcover binding.",
                time: "08:10 AM",
                timestamp: "2023-06-05T08:10:00"
            },
            {
                id: 3,
                type: "status",
                status: "cancelled",
                content: "Commande annulée par le client",
                time: "08:15 AM",
                timestamp: "2023-06-05T08:15:00"
            },
            {
                id: 4,
                type: "received",
                sender: "Emma Johnson",
                avatar: "EJ",
                content: "Do you offer binding services?",
                time: "08:15 AM",
                timestamp: "2023-06-05T08:15:00"
            }
        ],
        printDetails: {
            pages: 0,
            colors: "-",
            sides: "-",
            binding: "-",
            format: "-",
            paper: "-"
        },
        documents: []
    }
];

// Fonctions utilitaires
const Utils = {
    getColorForAvatar: function(initials) {
        const colors = [
            '#3B82F6', // blue
            '#10B981', // green
            '#F59E0B', // amber
            '#EF4444', // red
            '#8B5CF6', // violet
            '#EC4899', // pink
            '#14B8A6', // teal
            '#F97316', // orange
        ];
        const hash = initials.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
        return colors[hash % colors.length];
    },
    
    formatAmount: function(amount) {
        return new Intl.NumberFormat('fr-FR').format(amount) + ' FC';
    },
    
    getConversationById: function(id) {
        return mockConversations.find(conv => conv.id === id);
    },
    
    showNotification: function(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 12px 20px;
            background-color: ${type === 'error' ? '#EF4444' : type === 'success' ? '#10B981' : '#3B82F6'};
            color: white;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            z-index: 1000;
            animation: slideIn 0.3s ease-out;
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease-out forwards';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    },
    
    debounce: function(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
};

// Classe principale du Dashboard
class AgentDashboard {
    constructor() {
        this.currentConversationId = null;
        this.conversations = mockConversations;
        this.init();
    }
    
    init() {
        this.loadConversations();
        this.updateCurrentDate();
        this.setupEventListeners();
        
        // Sélectionner la première conversation par défaut
        if (this.conversations.length > 0) {
            setTimeout(() => this.selectConversation(this.conversations[0].id), 100);
        }
    }
    
    loadConversations() {
        const conversationsList = document.getElementById('conversations-list');
        if (!conversationsList) return;
        
        conversationsList.innerHTML = '';
        
        this.conversations.forEach(conversation => {
            const conversationElement = this.createConversationElement(conversation);
            conversationsList.appendChild(conversationElement);
        });
    }
    
    createConversationElement(conversation) {
        const div = document.createElement('div');
        div.className = 'conversation-item';
        div.dataset.id = conversation.id;
        
        const avatarColor = Utils.getColorForAvatar(conversation.avatar);
        
        div.innerHTML = `
            <div class="conversation-avatar" style="background-color: ${avatarColor}">
                ${conversation.avatar}
            </div>
            <div class="conversation-details">
                <div class="conversation-header">
                    <span class="conversation-name">${conversation.name}</span>
                    <span class="conversation-time">${conversation.time}</span>
                </div>
                <div class="conversation-preview">${conversation.lastMessage}</div>
            </div>
            ${conversation.unread > 0 ? `
                <div class="conversation-badge">
                    <span class="unread-badge">${conversation.unread}</span>
                </div>
            ` : ''}
        `;
        
        div.addEventListener('click', () => this.selectConversation(conversation.id));
        
        return div;
    }
    
    selectConversation(conversationId) {
        // Désélectionner toutes les conversations
        document.querySelectorAll('.conversation-item').forEach(item => {
            item.classList.remove('active');
        });
        
        // Sélectionner la conversation cliquée
        const selectedItem = document.querySelector(`.conversation-item[data-id="${conversationId}"]`);
        if (selectedItem) {
            selectedItem.classList.add('active');
            selectedItem.classList.add('fade-in');
            
            // Marquer comme lue
            const badge = selectedItem.querySelector('.unread-badge');
            if (badge) {
                badge.remove();
            }
        }
        
        // Mettre à jour l'état courant
        this.currentConversationId = conversationId;
        
        // Charger les données de la conversation
        this.loadConversationData(conversationId);
        
        // Afficher l'interface de chat
        this.showChatInterface();
    }
    
    loadConversationData(conversationId) {
        const conversation = Utils.getConversationById(conversationId);
        if (!conversation) return;
        
        // Mettre à jour l'en-tête du chat
        this.updateChatHeader(conversation);
        
        // Charger les messages
        this.loadMessages(conversation.messages);
        
        // Mettre à jour le panneau d'infos
        this.updateInfoPanel(conversation);
    }
    
    updateChatHeader(conversation) {
        const header = document.getElementById('chat-header');
        const avatar = header.querySelector('.user-avatar');
        const name = header.querySelector('#chat-user-name');
        const status = header.querySelector('#chat-user-status');
        
        if (avatar && name && status) {
            avatar.textContent = conversation.avatar;
            avatar.style.background = `linear-gradient(135deg, ${Utils.getColorForAvatar(conversation.avatar)}, ${Utils.getColorForAvatar(conversation.avatar)}80)`;
            name.textContent = conversation.name;
            status.textContent = `${conversation.status === 'active' ? 'En ligne' : 'Hors ligne'} • Commande ${conversation.orderId}`;
        }
    }
    
    loadMessages(messages) {
        const messagesContainer = document.getElementById('chat-messages');
        if (!messagesContainer) return;
        
        messagesContainer.innerHTML = '';
        
        messages.forEach(message => {
            const messageElement = this.createMessageElement(message);
            messagesContainer.appendChild(messageElement);
        });
        
        // Scroll vers le bas
        setTimeout(() => {
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }, 100);
    }
    
    createMessageElement(message) {
        const div = document.createElement('div');
        
        if (message.type === 'sent') {
            div.className = 'message sent';
            div.innerHTML = `
                <div class="message-content">
                    <div class="message-bubble">${message.content}</div>
                    <div class="message-time">${message.time}</div>
                </div>
            `;
        } 
        else if (message.type === 'received') {
            div.className = 'message received';
            const avatarColor = Utils.getColorForAvatar(message.avatar || '?');
            div.innerHTML = `
                <div class="message-avatar" style="background-color: ${avatarColor}">
                    ${message.avatar}
                </div>
                <div class="message-content">
                    <div class="message-bubble">${message.content}</div>
                    <div class="message-time">${message.time}</div>
                </div>
            `;
        }
        else if (message.type === 'status') {
            div.className = 'message received';
            const statusClass = message.status === 'processing' ? 'status-processing' :
                               message.status === 'ready' ? 'status-ready' :
                               message.status === 'cancelled' ? 'status-cancelled' : '';
            
            div.innerHTML = `
                <div class="message-content">
                    <div class="message-bubble">
                        <div class="message-status ${statusClass}">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="12" cy="12" r="10"/>
                                <path d="M12 16v-4M12 8h.01"/>
                            </svg>
                            ${message.content}
                        </div>
                    </div>
                    <div class="message-time">${message.time}</div>
                </div>
            `;
        }
        else if (message.type === 'attachment') {
            div.className = 'message received';
            const avatarColor = Utils.getColorForAvatar(message.avatar || '?');
            const icon = message.attachment.type === 'pdf' ? '📄' : '📝';
            
            div.innerHTML = `
                <div class="message-avatar" style="background-color: ${avatarColor}">
                    ${message.avatar}
                </div>
                <div class="message-content">
                    <div class="message-bubble">
                        <div class="message-attachment">
                            <div class="attachment-icon">${icon}</div>
                            <div class="attachment-details">
                                <div class="attachment-name">${message.attachment.name}</div>
                                <div class="attachment-size">${message.attachment.size}</div>
                            </div>
                            <button class="attachment-download">Télécharger</button>
                        </div>
                    </div>
                    <div class="message-time">${message.time}</div>
                </div>
            `;
        }
        
        div.classList.add('fade-in');
        return div;
    }
    
    updateInfoPanel(conversation) {
        // Mettre à jour les infos client
        const clientAvatar = document.getElementById('client-avatar');
        const clientName = document.getElementById('client-name');
        const clientEmail = document.getElementById('client-email');
        const clientPhone = document.getElementById('client-phone');
        
        if (clientAvatar && clientName && clientEmail && clientPhone) {
            clientAvatar.textContent = conversation.avatar;
            clientAvatar.style.background = `linear-gradient(135deg, ${Utils.getColorForAvatar(conversation.avatar)}, ${Utils.getColorForAvatar(conversation.avatar)}80)`;
            clientName.textContent = conversation.name;
            clientEmail.textContent = conversation.customer.email;
            clientPhone.textContent = conversation.customer.phone;
        }
        
        // Mettre à jour les infos de commande
        const orderNumber = document.getElementById('order-number');
        const orderDate = document.getElementById('order-date');
        const orderStatus = document.getElementById('order-status');
        const paymentStatus = document.getElementById('payment-status');
        
        if (orderNumber) orderNumber.textContent = conversation.orderId;
        if (orderDate) orderDate.textContent = '05/06/2023';
        
        if (orderStatus) {
            const statusConfig = {
                active: 'En traitement',
                pending: 'En attente',
                ready: 'Prêt',
                delivered: 'Livré',
                cancelled: 'Annulé',
                processing: 'En traitement'
            };
            orderStatus.textContent = statusConfig[conversation.status] || 'En attente';
        }
        
        if (paymentStatus) {
            paymentStatus.textContent = conversation.paymentStatus === 'pending' ? 'En attente' :
                                        conversation.paymentStatus === 'paid' ? 'Payé' :
                                        conversation.paymentStatus === 'cash' ? 'Paiement sur place' : 'En attente';
            paymentStatus.className = `payment-badge ${conversation.paymentStatus}`;
        }
        
        // Détails d'impression
        const printPages = document.getElementById('print-pages');
        const printColors = document.getElementById('print-colors');
        const printSides = document.getElementById('print-sides');
        const printBinding = document.getElementById('print-binding');
        const printFormat = document.getElementById('print-format');
        const printPaper = document.getElementById('print-paper');
        
        if (printPages) printPages.textContent = conversation.printDetails.pages;
        if (printColors) printColors.textContent = conversation.printDetails.colors;
        if (printSides) printSides.textContent = conversation.printDetails.sides;
        if (printBinding) printBinding.textContent = conversation.printDetails.binding;
        if (printFormat) printFormat.textContent = conversation.printDetails.format;
        if (printPaper) printPaper.textContent = conversation.printDetails.paper;
        
        // Montant à payer
        const paymentAmount = document.getElementById('payment-amount');
        if (paymentAmount) {
            paymentAmount.textContent = Utils.formatAmount(conversation.amountDue);
        }
        
        // Documents
        this.loadDocuments(conversation.documents);
    }
    
    loadDocuments(documents) {
        const documentsList = document.getElementById('documents-list');
        if (!documentsList) return;
        
        documentsList.innerHTML = '';
        
        if (documents.length === 0) {
            documentsList.innerHTML = '<p style="color: var(--muted-text); font-size: 13px; text-align: center;">Aucun document</p>';
            return;
        }
        
        documents.forEach(doc => {
            const div = document.createElement('div');
            div.className = 'document-item';
            
            const icon = doc.type === 'pdf' ? '📄' : '📝';
            
            div.innerHTML = `
                <div class="document-icon">${icon}</div>
                <div class="document-info">
                    <div class="document-name">${doc.name}</div>
                    <div class="document-meta">${doc.size} • ${doc.uploaded}</div>
                </div>
                <button class="document-download">Télécharger</button>
            `;
            
            documentsList.appendChild(div);
        });
    }
    
    showChatInterface() {
        // Cacher l'état vide
        document.getElementById('empty-chat-state').classList.add('hidden');
        
        // Afficher les composants du chat
        document.getElementById('chat-header').classList.remove('hidden');
        document.getElementById('chat-messages').classList.remove('hidden');
        document.getElementById('chat-composer').classList.remove('hidden');
        document.getElementById('quick-templates').classList.remove('hidden');
        
        // Cacher l'état vide des infos
        document.getElementById('empty-info-state').classList.add('hidden');
        
        // Afficher le contenu des infos
        document.getElementById('info-content').classList.remove('hidden');
        
        // Animation
        document.getElementById('chat-header').classList.add('fade-in');
        document.getElementById('chat-messages').classList.add('fade-in');
        document.getElementById('info-content').classList.add('fade-in');
    }
    
    updateCurrentDate() {
        const dateElement = document.getElementById('current-date');
        if (dateElement) {
            const now = new Date();
            const options = { weekday: 'long', day: 'numeric', month: 'long' };
            dateElement.textContent = now.toLocaleDateString('fr-FR', options);
        }
    }
    
    setupEventListeners() {
        // Barre de recherche
        const searchInput = document.querySelector('.search-input');
        if (searchInput) {
            const debouncedSearch = Utils.debounce((term) => this.filterConversations(term), 300);
            searchInput.addEventListener('input', (e) => debouncedSearch(e.target.value.toLowerCase()));
        }
        
        // Filtres
        document.querySelectorAll('.filter-tab').forEach(tab => {
            tab.addEventListener('click', () => {
                document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                this.filterConversationsByStatus(tab.dataset.filter);
            });
        });
        
        // Sidebar
        document.querySelectorAll('.sidebar-item').forEach(item => {
            item.addEventListener('click', function() {
                document.querySelectorAll('.sidebar-item').forEach(i => i.classList.remove('active'));
                this.classList.add('active');
            });
        });
        
        // Mode sombre
        const darkModeToggle = document.getElementById('dark-mode-toggle');
        if (darkModeToggle) {
            darkModeToggle.addEventListener('click', () => this.toggleDarkMode());
        }
        
        // Composer de message
        const messageInput = document.getElementById('message-input');
        const sendButton = document.getElementById('send-button');
        
        if (messageInput && sendButton) {
            // Auto-resize
            messageInput.addEventListener('input', function() {
                this.style.height = 'auto';
                this.style.height = (this.scrollHeight) + 'px';
            });
            
            // Envoyer avec Entrée
            messageInput.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    this.sendMessage();
                }
            });
            
            // Bouton d'envoi
            sendButton.addEventListener('click', () => this.sendMessage());
        }
        
        // Quick templates
        document.querySelectorAll('.quick-template').forEach(template => {
            template.addEventListener('click', () => {
                const text = template.dataset.text;
                if (messageInput) {
                    messageInput.value = text;
                    messageInput.focus();
                    messageInput.dispatchEvent(new Event('input'));
                }
            });
        });
        
        // Widget de paiement
        const cashInput = document.getElementById('cash-received');
        const recordPaymentBtn = document.getElementById('record-payment');
        const cancelPaymentBtn = document.getElementById('cancel-payment');
        
        if (cashInput) {
            cashInput.addEventListener('input', () => this.updateChangeAmount());
        }
        
        if (recordPaymentBtn) {
            recordPaymentBtn.addEventListener('click', () => this.recordPayment());
        }
        
        if (cancelPaymentBtn) {
            cancelPaymentBtn.addEventListener('click', () => {
                if (cashInput) {
                    cashInput.value = '';
                    this.updateChangeAmount();
                }
            });
        }
        
        // Modal de paiement
        const closeModalBtn = document.getElementById('close-payment-modal');
        if (closeModalBtn) {
            closeModalBtn.addEventListener('click', () => {
                document.getElementById('payment-modal').classList.add('hidden');
            });
        }
        
        // Téléchargement de documents
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('document-download') || 
                e.target.classList.contains('attachment-download')) {
                e.preventDefault();
                Utils.showNotification('Téléchargement simulé - En production, cela téléchargerait le fichier', 'info');
            }
        });
        
        // Actions de chat
        const printButton = document.querySelector('.chat-actions .btn-primary');
        if (printButton) {
            printButton.addEventListener('click', () => {
                Utils.showNotification('Impression simulée - En production, cela imprimerait le document', 'info');
            });
        }
    }
    
    filterConversations(searchTerm) {
        document.querySelectorAll('.conversation-item').forEach(item => {
            const name = item.querySelector('.conversation-name').textContent.toLowerCase();
            const preview = item.querySelector('.conversation-preview').textContent.toLowerCase();
            
            if (name.includes(searchTerm) || preview.includes(searchTerm)) {
                item.style.display = 'flex';
            } else {
                item.style.display = 'none';
            }
        });
    }
    
    filterConversationsByStatus(filter) {
        document.querySelectorAll('.conversation-item').forEach(item => {
            const id = parseInt(item.dataset.id);
            const conversation = Utils.getConversationById(id);
            
            if (!conversation) return;
            
            let shouldShow = true;
            
            if (filter === 'unread') {
                shouldShow = conversation.unread > 0;
            } else if (filter === 'active') {
                shouldShow = conversation.status === 'active' || conversation.status === 'processing';
            }
            // 'all' montre tout
            
            item.style.display = shouldShow ? 'flex' : 'none';
        });
    }
    
    sendMessage() {
        const messageInput = document.getElementById('message-input');
        const messagesContainer = document.getElementById('chat-messages');
        
        if (!messageInput || !messagesContainer || !messageInput.value.trim()) return;
        
        // Créer un nouveau message
        const newMessage = {
            id: Date.now(),
            type: 'sent',
            sender: 'Paul Leon',
            content: messageInput.value.trim(),
            time: new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }),
            timestamp: new Date().toISOString()
        };
        
        // Ajouter le message à l'interface
        const messageElement = this.createMessageElement(newMessage);
        messagesContainer.appendChild(messageElement);
        
        // Effacer le champ
        messageInput.value = '';
        messageInput.style.height = 'auto';
        
        // Scroll vers le bas
        setTimeout(() => {
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }, 100);
        
        // Simuler une réponse après 2 secondes
        setTimeout(() => {
            const conversation = Utils.getConversationById(this.currentConversationId);
            if (!conversation) return;
            
            const replyMessage = {
                id: Date.now() + 1,
                type: 'received',
                sender: conversation.name,
                avatar: conversation.avatar,
                content: 'Message reçu, je vous réponds dans quelques instants.',
                time: new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }),
                timestamp: new Date().toISOString()
            };
            
            const replyElement = this.createMessageElement(replyMessage);
            messagesContainer.appendChild(replyElement);
            
            setTimeout(() => {
                messagesContainer.scrollTop = messagesContainer.scrollHeight;
            }, 100);
        }, 2000);
    }
    
    updateChangeAmount() {
        const cashInput = document.getElementById('cash-received');
        const changeElement = document.getElementById('change-amount');
        
        if (!cashInput || !changeElement) return;
        
        const conversation = Utils.getConversationById(this.currentConversationId);
        if (!conversation) return;
        
        const amountDue = conversation.amountDue;
        const cashReceived = parseInt(cashInput.value) || 0;
        const change = Math.max(0, cashReceived - amountDue);
        
        changeElement.textContent = Utils.formatAmount(change);
    }
    
    recordPayment() {
        const cashInput = document.getElementById('cash-received');
        const cashReceived = parseInt(cashInput.value) || 0;
        
        const conversation = Utils.getConversationById(this.currentConversationId);
        if (!conversation) return;
        
        const amountDue = conversation.amountDue;
        
        if (!cashInput.value.trim()) {
            Utils.showNotification('Veuillez entrer un montant', 'error');
            return;
        }
        
        if (cashReceived < amountDue) {
            Utils.showNotification('Montant insuffisant', 'error');
            return;
        }
        
        const change = cashReceived - amountDue;
        
        // Mettre à jour l'interface
        const modalAmountDue = document.getElementById('modal-amount-due');
        const modalAmountReceived = document.getElementById('modal-amount-received');
        const modalChangeAmount = document.getElementById('modal-change-amount');
        
        if (modalAmountDue) modalAmountDue.textContent = Utils.formatAmount(amountDue);
        if (modalAmountReceived) modalAmountReceived.textContent = Utils.formatAmount(cashReceived);
        if (modalChangeAmount) modalChangeAmount.textContent = Utils.formatAmount(change);
        
        // Afficher le modal
        document.getElementById('payment-modal').classList.remove('hidden');
        
        // Mettre à jour le statut de paiement
        const paymentElement = document.getElementById('payment-status');
        if (paymentElement) {
            paymentElement.textContent = 'Paiement sur place';
            paymentElement.className = 'payment-badge cash';
        }
        
        // Mettre à jour le badge de conversation
        const conversationItem = document.querySelector(`.conversation-item[data-id="${this.currentConversationId}"]`);
        if (conversationItem) {
            const badge = conversationItem.querySelector('.unread-badge');
            if (badge) {
                badge.remove();
            }
        }
        
        // Mettre à jour le montant à payer
        const paymentAmount = document.getElementById('payment-amount');
        if (paymentAmount) {
            paymentAmount.textContent = '0 FC';
        }
        
        // Effacer le champ de saisie
        if (cashInput) {
            cashInput.value = '';
            this.updateChangeAmount();
        }
    }
    
    toggleDarkMode() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        // Animation
        const body = document.body;
        body.style.transition = 'background-color 0.3s ease';
        setTimeout(() => {
            body.style.transition = '';
        }, 300);
        
        // Notification
        Utils.showNotification(`Mode ${newTheme === 'dark' ? 'sombre' : 'clair'} activé`);
    }
}

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    // Récupérer le thème sauvegardé
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
    }
    
    // Initialiser le dashboard
    window.agentDashboard = new AgentDashboard();
});