const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);

const dataSchema = mongoose.Schema({
    positionX: Number,
    positionY: Number,
    positionZ: Number,
    accX: Number,
    accY: Number,
    accZ: Number,
    x: Number,
    y: Number,
    z: Number,
    created_at: Date
});

module.exports = mongoose.model('Data', dataSchema);
