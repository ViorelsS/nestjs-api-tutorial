import { Injectable } from "@nestjs/common";

@Injectable()
export class AuthService{
    //Qui scriviamo la logica

    signup() {
        return {msg: 'I have signed up'};
    }

    signin() {
        return {msg: 'I have signed in'};
    }
}

