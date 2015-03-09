function chartList(lookup){
       
$.get("https://enigmatic-basin-9438.herokuapp.com/symbol/Netflix", function(symbols){
 //   console.log(symbols.substring == true)
$.get("/stocks-jquery/templates/symbolList.jade", function(template){
      var html = jade.render(template, 
      {items: (symbols.substring ? JSON.parse(symbols) : symbols)})
            $('#list').html(html)
        })
    })
}
