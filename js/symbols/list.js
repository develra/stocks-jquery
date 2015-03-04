function symbolSearch(lookup){
       
$.get("http://dev.markitondemand.com/Api/v2/Lookup/jsonp?input=" + lookup, function(symbols){
$.get("/stocks-jquery/templates/symbolList.jade", function(template){
      var html = jade.render(template, {items: symbols})
            $('#list').html(html)
        })
    })
}
