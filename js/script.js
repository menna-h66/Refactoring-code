let icon = document.querySelector("#back-to-top")
let body = document.querySelector("body")


window.addEventListener('scroll', function(){
        if (window.scrollY > 70 ){                 /* if i scroll down */
                icon.style.display = 'block'        /* make my icon visible */
        }else(
                icon.style.display = 'none'
        )
})

icon.addEventListener('click', function(){
        window.scrollTo({top: 0});                /* to take me to the top of bage when i click icon*/
})

window.onload = () => {
        icon.click()                               /* to take me to the top of bage when i reload bage*/
}