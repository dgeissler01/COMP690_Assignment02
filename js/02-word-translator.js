// SAMPLE DISPLAY FOR AN ACCURATELY ENTERED CODE
// 'Hello World translated in French is: Bonjour le monde'

// DISPLAY APPLICATION NAME AND PURPOSE
alert('Welcome to the "Hello World" Translator Applicaiton')
alert('When a proper language code is chosen from the given list and entered into prompt, the phrase "Hello World" will be displayed in the language of the user\'s choice within the console.')

// DECLARE VARIABLES
let es, de, en, fr, langCode

// PROMPT USER FOR LANGUAGE CODE
langCode = prompt('Please choose from the following language codes: es, de, en, fr.')

// TAKE CHOSEN LANGUAGE CODE AND DISPLAY "HELLOW WORLD" IN THAT LANGUAGE
if (langCode === 'es') {
    console.log(`You have chosen "${langCode}". Hello World translated in Espanol is: Hola Mundo.`)
} else if (langCode === 'de') {
    console.log(`You have chosen "${langCode}". Hello World translated in Deutsch is: Hallo Welt.`)
} else if (langCode === 'en') {
    console.log(`You have chosen "${langCode}". Hello World translated in English is: Hello World.`)
} else if (langCode === 'fr') {
    console.log(`You have chosen "${langCode}". Hello World translated in French is: Bonjour le monde.`)
} else {
    console.log(`"${langCode}" is not on the list or was not entered correctly. Language codes are case sensitive and must be chosen from the list. System language defaults to English. Hello World translated in English is: Hello World.`)
}