export class Profile{
    private _email: string | undefined;
    public get email(): string | undefined {
        return this._email;
    }
    public set email(value: string | undefined) {
        this._email = value;
    }
    
}