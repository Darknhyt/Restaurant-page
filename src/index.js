import {Main} from './main-page';
import {Menu} from './menu-page';
import {Contact} from './contact-page';
import $ from 'jquery';
import './style.css'

Main.load();
Menu.load();
Contact.load();

$("#menu").hide()
$("#contact").hide()

$("#n-home").on('click',(e)=>{
    e.preventDefault();
    $("#main").fadeIn().show();
    $("#menu").fadeOut().hide();
    $("#contact").fadeOut().hide();
});
$("#n-menu").on('click',(e)=>{
    e.preventDefault();
    $("#main").fadeOut().hide();
    $("#menu").fadeIn().show();
    $("#contact").fadeOut().hide();
});
$("#n-contact").on('click',(e)=>{
    e.preventDefault();
    $("#main").fadeOut().hide();
    $("#menu").fadeOut().hide();
    $("#contact").fadeIn().show();
});

