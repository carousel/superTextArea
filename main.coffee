# HTML input char-counter plugin, written in vanillajs
# miroslav.trninic@gmail.com

this.ta = document.querySelector("textarea")
this.sp = document.querySelector("span")

ta.addEventListener "keydown",(e)->
    logs(e)

fwd = (e)->
    if e.target.value.length < 5
        sp.innerText = 5 - ( e.target.value.length + 1 ) + " characters left"
    else
        sp.innerText = 5 -  ( e.target.value.length ) + " characters left"

back = (e)->
    if e.keyCode is 8
        if e.target.value.length > 0
            sp.innerText = 5 - ( --e.target.value.length ) + " characters left"
        else
            sp.innerText = "5 characters left"

logs = (e)->
    fwd(e)
    back(e)
    if e.keyCode is 13
        console.log e.target.value
        sp.innerText = "5 characters left"
        e.preventDefault()
        e.target.value = ""
    










 








    

