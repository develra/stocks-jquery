function symbolView(symbol){
    
    console.log('symbol view: ', symbol)

    $.get("https://enigmatic-basin-9438.herokuapp.com/quote/" + symbol,
        function(data) {
        $.get("/stocks-jquery/templates/symbolView.jade", function(template){ 
        $("#details").html(jade.render(template, {item: JSON.parse(data)}))
    })
})
}
