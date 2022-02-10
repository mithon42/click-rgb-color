/*
 *** Project Requirements:
 * - Change the background color by generating random rga color by clicking a button
*/



// Step 1 - create onload handler
window.onload = () => {
    main()
}

function main(){
    const root = document.getElementById('root')
    const changeBtn = document.getElementById('changeBtn')
    changeBtn.addEventListener('click', function(){
        const bgColor = generateRGBColor()
        root.style.backgroundColor = bgColor
    })
}

// step 2 - random color generator function
function generateRGBColor() {
    // rgb(0, 0, 0), rgb(255, 255, 255)
    const red = Math.floor(Math.random() * 255)
    const green = Math.floor(Math.random() * 255)
    const blue = Math.floor(Math.random() * 255)

    return `rgb(${red}, ${green}, ${blue})`
}

// step 3 - collect all necessary reference


// step 4 - handle the click event