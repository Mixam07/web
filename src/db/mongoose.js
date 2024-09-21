const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://web:Max-1601@cluster0.rwjjb.mongodb.net/web?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})