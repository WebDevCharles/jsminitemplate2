// Get Information - Step One
function getMessage() {

    let msg = document.getElementById("txtMessage").value;
    displayMessage(msg);

}

// Final Step - View
function displayMessage(message) {

    // <li class="list-group-item">A list item</li>
    // let item = `<li class="list-group-item">${message}</li>`;

    // First get the "ol" element from the page
    element = document.getElementById("results");

    // Create a new "li" element
    let item = document.createElement("li");

    // Add classes to the "li" element
    item.classList.add("list-group-item");

    // Set classes to the "li" element
    item.innerHTML = message;

    // Add the new items to the list
    element.appendChild(item) = item;

}