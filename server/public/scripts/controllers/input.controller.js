app.controller('InputController', function(MessageService){

  var vm = this;
  var ms = MessageService;
  vm.message = "Hello, World!";
  vm.result = ms.result;

  vm.newMessage = function(inputObject){
    ms.newMessage(inputObject);
  };
  

});