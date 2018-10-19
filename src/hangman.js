class Hangman {
    constructor(word, remainingGuesses) {
        this.word = word.toLowerCase().split('')
        this.remainingGuesses = remainingGuesses
        this.guessedLetters = [],
            this.status = 'playing'
    }

    calculateStatus() {
        const finished = this.word.every((letter) => this.guessedLetters.includes(letter) || letter === ' ')
        if (this.remainingGuesses === 0) {
            this.status = 'failed'
        } else if (finished) {
            this.status = 'finished'
        } else {
            this.status = 'playing'
        }

        return this.status
    }

    get statusMessage() {
        if (this.status === 'playing') {
            return `You have ${this.remainingGuesses} guesses left.`
        } else if (this.status === 'failed') {
            return `Nice try! The word was "${this.word.join('')}".`
        } else {
            return 'Great Work! You guessed the word.'
        }
    }

    get puzzle() {
        let result = ''
        this.word.forEach((indLetter) => {
            if (this.guessedLetters.includes(indLetter) || indLetter === ' ') {
                result += indLetter
            } else {
                result += '*'
            }
        })
        return result
    }


    makeGuess(guess) {
        guess = guess.toLowerCase()
        const isUnique = !this.guessedLetters.includes(guess)
        const isBadGuess = !this.word.includes(guess)

        if (this.status !== 'playing') {
            return
        }

        if (guess.length === 1 && isUnique) {
            this.guessedLetters.push(guess)
        }
        if (isUnique && isBadGuess) {
            this.remainingGuesses--
        }
        this.calculateStatus()
    }


}

export { Hangman as default }
