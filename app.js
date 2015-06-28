var HelloAngular = function() {
    
};

HelloAngular.annotations = [
    new angular.ComponentAnnotation({
        selector: 'hello'    
    }),
    new angular.ViewAnnotation({
        template: 'Hello Angular2 (ES5)'    
    })
];

document.addEventListener("DOMContentLoaded", function() {
    angular.bootstrap(HelloAngular);
});