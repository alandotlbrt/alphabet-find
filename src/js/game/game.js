var alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']



function random_letter(alphabet_slice){
    let letter = alphabet[Math.floor(Math.random() * alphabet.length)]
    if (alphabet_slice.includes(letter.toLocaleLowerCase())){
        return {letter:letter, index:alphabet.indexOf(letter)}
    } else {
        return random_letter(alphabet_slice)
    }
}
function random_number(letter, input_value_max = 25) {
    let index_before = 0;
    let index_after = 0;

    if (letter.index > 0) {
        do {
            index_before = Math.ceil(Math.random() * letter.index);
        } while (index_before >= input_value_max);
    }

    if (letter.index < alphabet.length - 1) {
        do {
            index_after = Math.ceil(Math.random() * (alphabet.length - letter.index - 1));
        } while (index_after >= input_value_max);
    }
    

    if (index_before > 0 && index_after > 0) {
        return Math.random() < 0.5
            ? { list: alphabet.slice(letter.index - index_before, letter.index), direction: "left", number: index_before, letter: letter.letter }
            : { list: alphabet.slice(letter.index + 1, letter.index + index_after + 1), direction: "right", number: index_after, letter: letter.letter };
    } else if (index_before > 0) {
        return { list: alphabet.slice(letter.index - index_before, letter.index), direction: "left", number: index_before, letter: letter.letter };
    } else {
        return { list: alphabet.slice(letter.index + 1, letter.index + index_after + 1), direction: "right", number: index_after, letter: letter.letter };
    }
}
const game_methods = {

    random_game:function(params){
        return random_number(random_letter(params.alphabet_slice), params.input_value);
    }
}


export default game_methods;
