"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hero;
function getHero() {
    return "hero";
}
hero = getHero();
function addTow(num) {
    // function not accept any other type but number
    return num + 2;
}
addTow(6);
function getUpper(val) {
    // function not accept any other type but string
    return val.toUpperCase();
}
getUpper("kobirul");
function signUpUser(name, email, isPaid) {
}
signUpUser("kobirul", "kobirul@gmail.com", false);
