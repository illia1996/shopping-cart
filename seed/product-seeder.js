var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/shop', { useNewUrlParser: true });

var product = [
    new Product({
        imagePath: "https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg",
        title: "some title",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et " +
            "dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ",
        price: 50
    }),
    new Product({
        imagePath: "http://www.nustudent.com/images/pictures/5.jpg",
        title: "Nature",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ",
        price: 150
    }),
    new Product({
        imagePath: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg",
        title: "Paulo Zoo",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ",
        price: 50
    }),
    new Product({
        imagePath: "https://orig00.deviantart.net/b712/f/2014/161/d/1/kion_the_lion_guard_by_juffs-d7lshfi.jpg",
        title: "Siomba",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ",
        price: 550
    }),
    new Product({
        imagePath: "http://i.infocar.ua/i/2/5426/82791/1920x.jpg",
        title: "Camry",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ",
        price: 11500
    }),
];
var done = 0;
for (var i = 0; i < product.length; i++) {
    product[i].save(function (err, result) {
        done++;
        if (done == product.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();

}
