var HelloAngular = function() {
    this.message = "Hello Angular2 (ES5)";
    this.msgs = ["hi", "ola", "hello", "amigos"];
};

HelloAngular.annotations = [
    new angular.Component({
        selector: 'hello'
    }),
    new angular.View({
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

HelloAngular.prototype.getUserName = function() {
    console.log (' Test User NAme');
};

var UserForm = function(UserService) {
    var initUserInfo = UserService.getInitialInfo();
    
    this.user = {};
    this.user.first_name = initUserInfo.first_name;
    this.user.last_name = initUserInfo.last_name;
    this.user.phone = initUserInfo.phone;
    this.user.email_address = initUserInfo.email_address;
}

UserForm.prototype.saveUserInfo = function() {
    console.log('User Info:'+this.user);
};

UserForm.annotations = [
  new angular.Component({
    selector: 'userForm',
    viewInjector: [UserService]
  }),
  new angular.View({
    templateUrl : 'userForm.html',
      directives: [angular.formDirectives]
  })
];

UserForm.parameters=[[UserService]];

document.addEventListener("DOMContentLoaded", function() {
    angular.bootstrap(HelloAngular);
    angular.bootstrap(UserForm);
});
