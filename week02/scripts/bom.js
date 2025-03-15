const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#chapter-list');

// Add Chapter button click event
button.addEventListener('click', function() {
    // Check if input is not blank
    if (input.value.trim() !== '') {
        // Create a new list item (li)
        const li = document.createElement('li');
        li.textContent = input.value;

        // Create the delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';
        deleteButton.classList.add('delete-btn');

        // Add event listener to the delete button to remove the li when clicked
        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            input.focus();
        });

        // Append the delete button to the li element
        li.append(deleteButton);

        // Append the li element to the unordered list
        list.append(li);

        // Clear the input value after adding the chapter
        input.value = '';
    } else {
        // If the input is empty, focus on the input field and do nothing
        input.focus();
    }

    // Ensure the input field remains focused whether or not a chapter is added
    input.focus();
});
