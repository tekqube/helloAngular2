var UserService = function() {};

UserService.prototype.getInitialInfo = function() {
    return {
        first_name : "",
        last_name : "",
        phone: "",
        email_address : ""
    };
}