let myEmojis = ["😊","👨‍👩‍👧","🚵‍♂️","🏖️","🔥","🏃‍♂️","👨‍💻","🧑‍💻"]
const emojiContainer = document.getElementById("emoji-container")
const emojiInput = document.getElementById("emoji-input")
const pushBtn = document.getElementById("push-btn")
const unshiftBtn = document.getElementById("unshift-btn")
const popBtn = document.getElementById("pop-btn")
const shiftBtn = document.getElementById("shift-btn")

function renderEmojis() {
    emojiContainer.innerHTML = ""
    for (let i = 0; i < myEmojis.length; i++) {
        let spanEl = document.createElement("span")
        spanEl.textContent = myEmojis[i]
        emojiContainer.append(spanEl)
        // emojiContainer.innerHTML += `<span>${myEmojis[i]}</span>`
        emojiInput.value = ""   
    }
}

renderEmojis()

pushBtn.addEventListener("click", function() {
    if (emojiInput.value) {
        myEmojis.push(emojiInput.value)
        renderEmojis()        
    }
})

unshiftBtn.addEventListener("click", function() {
    if (emojiInput.value) {
        myEmojis.unshift(emojiInput.value)
        renderEmojis()
    }
})

popBtn.addEventListener("click", function() {
    myEmojis.pop()
    renderEmojis()
})

shiftBtn.addEventListener("click", function() {
    myEmojis.shift()
    renderEmojis()
})