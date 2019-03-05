export class User {
    userID:number = 0;
    firstName:string = "";
    lastName:string = "";
    birthDate:Date = new Date();
    email:string = "";
    pass:string = "";
    interfaceLanguage:string = "";
    userType:number = 0;

    constructor(userID:number, firstName:string, lastName:string, birthDate:Date, email:string, pass:string, interfaceLanguage:string, userType:number) {
        this.userID = userID;
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDate = birthDate;
        this.email = email;
        this.pass = pass;
        this.interfaceLanguage = interfaceLanguage;
        this.userType = userType;
    }
}