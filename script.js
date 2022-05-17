const theme_button = document.getElementById("theme")
const rootElement = document.documentElement

const dark_theme = {
    "--paragraph": "hsl(228, 34%, 66%)",
    "--main-text": "hsl(0, 0%, 100%)",
    "--main-bg": "hsl(230, 17%, 14%)",
    "--card-bg": "hsl(228, 28%, 20%)",
    "--card-bg-hover": "hsl(228, 28%, 30%)",
    "--toggle": "hsl(228, 28%, 20%)"
}

const light_theme = {
    "--paragraph": "hsl(228, 12%, 44%)",
    "--main-text": "hsl(230, 17%, 14%)",
    "--main-bg": "hsl(0, 0%, 100%)",
    "--card-bg": "hsl(227, 47%, 96%)",
    "--card-bg-hover": "hsl(227, 47%, 90%)",
    "--toggle": "hsl(0, 0%, 100%)"
}

theme_button.addEventListener('change', function() {
    if(theme_button.checked) {
        changeTheme(dark_theme)
    } else {
        changeTheme(light_theme)
    }
})

function changeTheme(theme) {
    for(let prop in theme) {
        changeProperty(prop, theme[prop])
    }
}

function changeProperty(property, value) {
    rootElement.style.setProperty(property, value)
}