app.service('MessageService',function($http){

  var self = this;
  self.result = {
    data: [],
    input: {
      author: '',
      message: ''
    }
  };

  // accepts input object {author: String, message: String}
  self.newMessage = function(input){
    $http.post('/message',input)
    .then(function(response){
      console.log('new message posted');
    })
    .catch(function(error){
      console.log('failed to post new message');
    });
  };
});