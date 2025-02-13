var alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']



function random_letter(){
    let letter = alphabet[Math.floor(Math.random() * alphabet.length)]
    return {letter:letter, index:alphabet.indexOf(letter)}

}

function random_number(letter){
    let index_before = Math.ceil(Math.random() * letter.index);
    let index_after = Math.ceil(Math.random() *( alphabet.length - letter.index));
    return Math.random() < 0.5 ? {list:alphabet.slice(letter.index-index_before,letter.index),direction:"left", number:index_before, letter:letter.letter}: {list:alphabet.slice(letter.index+1, letter.index+index_after+1), direction:"right", number:index_after, letter:letter.letter}
}

const game_methods = {
    random_letter: function() {
        let letter = alphabet[Math.floor(Math.random() * alphabet.length)]
        return {letter:letter, index:alphabet.indexOf(letter)}
    }, 
    random_number: function(letter){
        let index_before = Math.ceil(Math.random() * letter.index);
        let index_after = Math.ceil(Math.random() *( alphabet.length - letter.index));
        return Math.random() < 0.5 ? {list:alphabet.slice(letter.index-index_before,letter.index),direction:"left", number:index_before, letter:letter.letter}: {list:alphabet.slice(letter.index+1, letter.index+index_after+1), direction:"right", number:index_after, letter:letter.letter}
    },
    random_game:function(){
        return random_number(random_letter());
    }
}


export default game_methods;
