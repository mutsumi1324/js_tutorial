(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
let Phrase = require("mutsumi-palindrome");

function palindromeTester(event) {
    event.preventDefault();
    let phrase = new Phrase(event.target.phrase.value);
    let palindromeResult = document.querySelector("#palindromeResult")

    if (phrase.palindrome()) {
        palindromeResult.innerHTML = `"<strong>${phrase.content}</strong>"はパリンドロームです！`;
    } else {
        palindromeResult.innerHTML = `"<strong>${phrase.content}</strong>"はパリンドロームではありません`;
    }
}

document.addEventListener("DOMContentLoaded", function () {
    let tester = document.querySelector("#palindromeTester");
    tester.addEventListener("submit", function (event) {
        palindromeTester(event);
    });
});

},{"mutsumi-palindrome":2}],2:[function(require,module,exports){
module.exports = Phrase;

// reverse()メソッドを追加してすべてのStringで使えるようにする
String.prototype.reverse = function () {
    return Array.from(this).reverse().join("");
}
//  Phraseオブジェクトを定義する
function Phrase(content) {
    // キー名ををcontentとするプロパティを定義し、引数を値として入れる
    this.content = content;

    // パリンドロームのテスト用に変換したcontentを返す
    this.processedContent = function processedContent() {
        return this.letters().toLowerCase();
    }

    // コンテンツの文字だけを返す
    // 利用例:
    //  new Phrase("Hello, world!").letters() === "Helloworld"
    this.letters = function letters() {
        const letterRegex = /[a-z]/gi;
        return Array.from(this.content).filter(c => c.match(letterRegex)).join("");
    };
    // パリンドロームならtrue、違うならfalseを返す
    this.palindrome = function palindrome() {
        const content = this.processedContent();
        if (content.length === 0) {
            return false;            
        }
        return content === content.reverse();
    };
}
},{}]},{},[1]);
