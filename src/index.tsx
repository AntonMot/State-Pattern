import React from 'react';
import reportWebVitals from './reportWebVitals';

interface MailingOperations {
    writeLetter(): void
    sendLetter(): void
    receiveLetter(): void
    readLetter(): void
}

// Context
class Mailer implements MailingOperations {
    private _state: MailerState = new InitialState();

    constructor() {
        this.logCurrentState()
    }

    public writeLetter(): void {
        this._state = this._state.writeLetter();
        this.logCurrentState()
    }
    public sendLetter(): void {
        this._state = this._state.sendLetter();
        this.logCurrentState()
    }
    public receiveLetter(): void {
        this._state = this._state.receiveLetter();
        this.logCurrentState()
    }
    public readLetter(): void {
        this._state = this._state.readLetter();
        this.logCurrentState()
    }

    private logCurrentState(): void {
        alert(this._state.constructor.name)
    }
}

class MailerState implements MailingOperations {
    public writeLetter(): MailerState {
        throw new Error("Invalid operation")
    }
    public sendLetter(): MailerState {
        throw new Error("Invalid operation")
    }
    public receiveLetter(): MailerState {
        throw new Error("Invalid operation")
    }
    public readLetter(): MailerState {
        throw new Error("Invalid operation")
    }
}

class InitialState extends MailerState {
    public writeLetter(): MailerState {
        return new LetterHasBeenWritten()
    }
}

class LetterHasBeenWritten extends MailerState {
    public sendLetter(): MailerState {
        return new LetterSending()
    }
}

class LetterSending extends MailerState {
    public receiveLetter(): MailerState {
        return new LetterRecived()
    }
}

class LetterRecived extends MailerState {
    public readLetter(): MailerState {
        return new InitialState()
    }
}

const mailer = new Mailer();

mailer.writeLetter();

mailer.sendLetter();

mailer.receiveLetter();

mailer.readLetter();


reportWebVitals();
