var HelloAngular = function() {
    this.message = "Hello Angular2 (ES5)";
    this.msgs = ["hi", "ola", "hello", "amigos"];
};

HelloAngular.annotations = [
    new angular.ComponentAnnotation({
        selector: 'hello'
    }),
    new angular.ViewAnnotation({
        template:
        '<p>{{message}}</p>' +
        '<p> Messages : </p>' +
        '<ul>' +
        '<li *ng-for="#msg of msgs">'+
        '{{msg}}'+
        '</li>'+
        '</ul>',
        directives: [angular.NgFor]
    })
];

var UserForm = function() {
    this.user = {};
    this.user.first_name = "";
    this.user.last_name = "";
    this.user.phone = "";
    this.user.email_address = "";
}

UserForm.prototype.saveUserInfo = function() {
    console.log('User Info:'+this.user);
};

UserForm.annotations = [
  new angular.Component({
    selector: 'userForm'
  }),
  new angular.View({
    templateUrl : 'userForm.html',
      directives: [angular.formDirectives]
  })
];

document.addEventListener("DOMContentLoaded", function() {
    angular.bootstrap(HelloAngular);
    angular.bootstrap(UserForm);
});
