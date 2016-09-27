function getsubs(subreddit) {

var url = 'https://www.reddit.com/r/'+subreddit+'.json';

  var promise = $.ajax({
      url: url,
      type: 'get',
      dataType: 'json'


    }).then(function(response){
   console.log(response);
        var templateSource = $('#subreddit-template').html();
        var template = Handlebars.compile(templateSource);

        var html = template({
          data: response.data.children
        });

        $('#response').html(html);
         },function(){
         console.log("there was an error");
   });
}

function togDesc(id, input) {
 document.getElementById(id).display(block);
}
