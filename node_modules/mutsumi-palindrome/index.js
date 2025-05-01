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