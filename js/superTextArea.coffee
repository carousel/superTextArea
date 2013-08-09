# HTML input char-counter plugin, written in vanillajs
# miroslav.trninic@gmail.com

@sTA = 
    init:()->
        @cacheElements()
        sTA.counter.init()
        sTA.style.init()
        @storage(name)

    storage: (name)->
        @storage = localStorage[name]

    cacheElements: ()->
        @tArea= document.querySelector("textarea")
        @counterSpan= document.querySelector("span")
        @bgColor= document.querySelector("select#bg-color")
        @textColor= document.querySelector("select#text-color")
        @fontFamily= document.querySelector("select#font-family")
        @fontSize= document.querySelector("select#font-size")

sTA.counter = 
    init: ()->
        @.bindEvents()
    bindEvents:()->
        sTA.tArea.addEventListener "keydown",(e)=>
            @.count(e)
        sTA.tArea.addEventListener "focus",(e)->
            e.target.placeholder = ""
        sTA.tArea.addEventListener "blur",(e)->
            e.target.placeholder = "Enter your text"

    fwd: (e)->
        if e.target.value.length < 255
            sTA.counterSpan.innerText = 255 - ( e.target.value.length + 1 ) + " characters left"
        else
            sTA.counterSpan.innerText = 255 - (--e.target.value.length) + " characters left"

    back: (e)->
        if e.keyCode is 8
            if e.target.value.length > 0
                sTA.counterSpan.innerText = 255 - ( e.target.value.length-1 ) + " characters left"
            else
                sTA.counterSpan.innerText = "255 characters left"

    count: (e)->
        @fwd(e)
        @back(e)
        if e.keyCode is 13
            console.log (e.target.value)
            sTA.counterSpan.innerText = "255 characters left"
            e.preventDefault()
            e.target.value = ""

sTA.style = 
    init: ()->
        @.bindEvents()
    bindEvents: ()->
        sTA.bgColor.addEventListener "click",(e)->
            sTA.tArea.style.backgroundColor = e.target.value
        sTA.textColor.addEventListener "click",(e)->
            sTA.tArea.style.color = e.target.value
        sTA.fontFamily.addEventListener "click",(e)->
            sTA.tArea.style.fontFamily = e.target.value
        sTA.fontSize.addEventListener "click",(e)->
            sTA.tArea.style.fontSize = e.target.value

sTA.init("db")


    








 








    

