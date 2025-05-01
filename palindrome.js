// reverse()メソッドを追加してすべてのStringで使えるようにする
String.prototype.reverse = function() {
    return Array.from(this).reverse().join("");
}
//  Phraseオブジェクトを定義する
function Phrase(content) {
    // キー名ををcontentとするプロパティを定義し、引数を値として入れる
    this.content = content;
    // 文字列を小文字に変換する
    this.processor = function processor(string) {
        return string.toLowerCase();
    }
    // パリンドロームのテスト用に変換したcontentを返す
    this.processedContent = function processedContent() {
        return this.processor(this.content);
    }
    // パリンドロームならtrue、違うならfalseを返す
        this.palindrome = function palindrome()
 {
    return this.processedContent() === this.processedContent().reverse()
 }}
    
String.prototype.blank = function() {
    return /^\s+$/.test(this)
}
Array.prototype.last = function() {
    return this[this.length -1]
}