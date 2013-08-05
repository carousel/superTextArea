# HTML input char-counter plugin, written in vanillajs
# miroslav.trninic@gmail.com

@cBS = {}

cBS.counter = 
    init: ()->
        @.cacheElements()
        @.bindEvents()

    cacheElements:()->
        @.tarea= document.querySelector("textarea")
        @.counter = document.querySelector("span")

    bindEvents:()->
        @tarea.addEventListener "keydown",(e)=>
            @.count(e)
        @tarea.addEventListener "focus",(e)->
            e.target.placeholder = ""

        @tarea.addEventListener "blur",(e)->
            e.target.placeholder = "Enter your text"

    fwd: (e)->
        if e.target.value.length < 255
            @.counter.innerText = 255 - ( e.target.value.length + 1 ) + " characters left"
        else
            @.counter.innerText = 255 -  ( e.target.value.length ) + " characters left"

    back: (e)->
        if e.keyCode is 8
            if e.target.value.length > 0
                @.counter.innerText = 255 - ( --e.target.value.length ) + " characters left"
            else
                @.counter.innerText = "255 characters left"

    count: (e)->
        @fwd(e)
        @back(e)
        if e.keyCode is 13
            alert(e.target.value)
            @.counter.innerText = "255 characters left"
            e.preventDefault()
            e.target.value = null

cBS.counter.init()




cBS.style = 
    init: ()->
        @.cacheElements()
        @.bindEvents()
    cacheElements: ()->
        @.bgColor= document.querySelector("select[name=bg-color]")
        @.textColor= document.querySelector("select[name=text-color]")
        @.fontFamily= document.querySelector("select[name=font-family]")
        @.fontSize= document.querySelector("select[name=font-size]")
    bindEvents: ()->
        @.bgColor.addEventListener "click",(e)->
            cBS.counter.tarea.style.backgroundColor = e.target.value
        @.textColor.addEventListener "click",(e)->
            cBS.counter.tarea.style.color = e.target.value
        @.fontFamily.addEventListener "click",(e)->
            cBS.counter.tarea.style.fontFamily = e.target.value
        @.fontSize.addEventListener "click",(e)->
            cBS.counter.tarea.style.fontSize = e.target.value

cBS.style.init()


    








 








    

