let yourArray = ['apple', 25, true, 'banana', false];

// Add each element of yourArray to the unordered list in the HTML
for (let i = 0; i < yourArray.length; i++) {
  let listItem = document.createElement('li');
  listItem.textContent = yourArray[i];
  document.getElementById('list').appendChild(listItem);
}
