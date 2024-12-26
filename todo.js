let input = document.getElementById("input")
let btn = document.getElementById("btn")
let ul = document.getElementById("ul")

btn.addEventListener('click', function(){
  let textinput = input.value.trim()

if (textinput === ""){
  return alert("You Stupid, what are you doing?")
}

  let li = document.createElement("li");
  li.textContent = textinput;
  ul.appendChild(li)

  let deleting = document.createElement("button");
deleting.textContent = "delete"
ul.appendChild(deleting)
deleting.addEventListener('click', function(){
  li.remove()
  deleting.remove()
})
  input.value = "";
})