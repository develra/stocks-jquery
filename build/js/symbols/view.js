function symbolView(symbol){
    
    console.log('symbol view: ', symbol)

    $.get("http://dev.markitondemand.com/Api/v2/Quote?symbol=" + symbol,
        function(data) {
        $.get("/stocks-jquery/templates/symbolView.jade", function(template){ 
        $("#details").html(jade.render(template, {item: data}))
    })
})
}
