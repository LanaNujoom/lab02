'use strict';
let keysArray = [];


let allPhotos = [];



$(document).ready(function() {

    function Horns(image_url, title, description, keyword, horns) {

        this.image_url = image_url;

        this.title = title;

        this.description = description;

        this.keyword = keyword;

        this.horns = horns;

        allPhotos.push(this);



    }


    Horns.prototype.render = function() {

        let $photoSection = $('.photo-template').clone();
        $photoSection.removeClass('photo-template');

        $('main').append($photoSection);

        $photoSection.find('h2').text(this.title);

        $photoSection.find('img').attr('src', this.image_url);

        $photoSection.find('p').text(this.description);

        $photoSection.find('h3').text(this.horns);

        $photoSection.attr('class', this.keyword);

    }


    Horns.prototype.renderSelect = function() {

        let $selectedPhoto = $('.sel').clone();

        $selectedPhoto.removeClass('sel');


        $selectedPhoto.find('option').val(this.keyword);

        $('option').append($selectedPhoto);



    }




    Horns.prototype.renderSelect = function() {
        let selectMenu = $('.sel');
        if (!(keysArray.includes(this.keyword))) {
            keysArray.push(this.keyword);
            selectMenu.append(`<option> ${this.keyword} </option>`);
        }

    };


    Horns.prototype.renderSelect = function() {
        let selectMenu = $('.sel');
        if (!(keysArray.includes(this.keyword))) {
            keysArray.push(this.keyword);
            selectMenu.append(`<option> ${this.keyword} </option>`);
        }

    };



    let readJson = () => {
        $.ajax("/data/page-1.json", { method: "GET", dataType: "JSON" }).then(data => {
            data.forEach(element => {
                let horn = new Horns(element.image_url, element.title, element.description, element.keyword, element.horns);
                console.log(horn);
                horn.render();
                horn.renderSelect();

            });

        })
    };

    readJson();

});




$('.sel').change(function() {
    let keys = $(this).children('option:selected').val();
    keysArray.forEach(function(val) {
        if (keys === val) {
            $('section').hide();
            $(`.${val}`).show();
            console.log(5);
        }
    });

});