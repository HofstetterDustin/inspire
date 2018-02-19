function QuoteController() {

    var qs = new QuoteService()

    qs.getQuote(function (quote) {
        console.log('What is the quote', quote)
    })

    function draw(quote) {
        var quote = ''
        if (quote.length < 1) {
            quoteElem.innerHTML = "<h1><strong>The Dark Side Has Won!</strong></h1>"
            return
        }
        quoteElem.innerHTML = draw
    }
}




