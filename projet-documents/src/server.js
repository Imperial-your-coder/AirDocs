const express = require('express');
const path = require('path');
const { PORT } = require('../config/env');

const commandesRoutes = require('./routes/commandes');
const paiementsRoutes = require('./routes/paiements');
const utilisateursRoutes = require('./routes/utilisateurs');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static
app.use('/public', express.static(path.join(__dirname, '..', 'public')));
app.use('/uploads', express.static(path.join(__dirname, '..', 'public', 'uploads')));

// Routes
app.use('/api/commandes', commandesRoutes);
app.use('/api/paiements', paiementsRoutes);
app.use('/api/utilisateurs', utilisateursRoutes);

app.get('/', (req, res) => res.sendFile(path.join(__dirname, '..', 'views', 'index.html')));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;
