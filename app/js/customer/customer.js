var Customer = (function () {
    function Customer(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    Customer.prototype.sayNameAndSurname = function () {
        console.log(this.name + " " + this.surname + ".");
    };
    return Customer;
}());
