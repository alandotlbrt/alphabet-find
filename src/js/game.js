var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']



console.log(random_number(random_letter()))

function random_letter(){
    let letter = alphabet[Math.floor(Math.random() * alphabet.length)]
    return {letter:letter, index:alphabet.indexOf(letter)}

}

function random_number(letter){
    let index_before = Math.ceil(Math.random() * letter.index);
    let index_after = Math.ceil(Math.random() *( alphabet.length - letter.index));
    console.log(letter.letter)
    return Math.random() < 0.5 ? {list:alphabet.slice(letter.index-index_before,letter.index),direction:"left", number:index_before}: {list:alphabet.slice(letter.index+1, letter.index+index_after+1), direction:"right", number:index_after}
}

