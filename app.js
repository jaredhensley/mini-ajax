$(document).ready(function () {


  $('body').on('click', '.js-get-users', function () {

    function handleSuccess(res) {
      console.log(res.data);
    }

    return $.ajax({
      method: 'GET',
      url: 'http://reqres.in/api/users?page=1',
    }).then(handleSuccess)
  })

});