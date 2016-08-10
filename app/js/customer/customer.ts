class Customer
{
    sayNameAndSurname(){
        console.log(`${this.name} ${this.surname}.`);
    }

    constructor(public name: string, public surname:string)
    {

    }


}