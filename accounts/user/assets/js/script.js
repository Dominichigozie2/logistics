
// Select all dropdown buttons
const dropdownBtns = document.querySelectorAll('.dropdown-btn');

// Function to close all dropdowns
function closeAllDropdowns() {
    dropdownBtns.forEach(btn => {
        btn.querySelector('.dropdown').classList.remove('active');
    });
}

// Add click event listener to each dropdown button
dropdownBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Close all dropdowns except the one with the clicked button
        dropdownBtns.forEach(otherBtn => {
            if (otherBtn !== btn) {
                otherBtn.querySelector('.dropdown').classList.remove('active');
            }
        });

        // Toggle the "active" class on the dropdown with the clicked button
        const dropdown = btn.querySelector('.dropdown');
        dropdown.classList.toggle('active');
    });
});

// Close dropdowns if user clicks outside of dropdown area
document.addEventListener('click', (event) => {
    let isDropdownClicked = false;

    // Check if click is within any dropdown area
    dropdownBtns.forEach(btn => {
        if (event.target.closest('.dropdown-btn') === btn) {
            isDropdownClicked = true;
        }
    });

    // If click is outside of any dropdown area, close all dropdowns
    if (!isDropdownClicked) {
        closeAllDropdowns();
    }
});


const menuBtn = document.querySelector('.menu-btn');
const sideNav = document.querySelector('header');
const body = document.querySelector('.body-container');
const closeBtn = document.querySelector('.fa-circle-xmark');

menuBtn.addEventListener('click', () => {
    sideNav.classList.toggle('active');
    body.classList.toggle('active');
    
});
closeBtn.addEventListener('click', () => {
    sideNav.classList.remove('active');
    body.classList.remove('active');
});


document.addEventListener('click', (event) => {
    if (!sideNav.contains(event.target) && !menuBtn.contains(event.target)) {
        sideNav.classList.remove('active');
        body.classList.remove('active');
    }
});



// for the add itemslist

let items = [];

function addItem() {
    const itemInput = document.getElementById('item-input');
    const itemValue = itemInput.value.trim();

    if (itemValue) {
        items.push(itemValue);
        const itemList = document.getElementById('item-list');
        const listItem = document.createElement('li');
        listItem.textContent = itemValue;

        const deleteBtn = document.createElement('span');
        deleteBtn.textContent = '×';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.onclick = () => removeItem(itemValue, listItem);

        listItem.appendChild(deleteBtn);
        itemList.appendChild(listItem);
        itemInput.value = '';
    }
}

function removeItem(itemValue, listItem) {
    items = items.filter(item => item !== itemValue);
    listItem.remove();
}


// The Modal Functionality

  $(document).ready(function(){
    $('.addShipment').click(function(e){
      e.preventDefault();
      $('#shipmentModal').fadeIn();
    });

    $('.close').click(function(){
      $('#shipmentModal').fadeOut();
    });

    $(window).click(function(e){
      if ($(e.target).is('#shipmentModal')) {
        $('#shipmentModal').fadeOut();
      }
    });
  });

$(document).ready(function() {
  // Loop through all edit buttons and attach click event
  $('.editShipmentBtn').each(function() {
    $(this).on('click', function(e) {
      e.preventDefault();
      $('#editModal').fadeIn(); // Just open the modal
    });
  });

  // Close modal on "X"
  $('.closeEdit').click(function() {
    $('#editModal').fadeOut();
  });

  // Close modal on click outside modal content
  $(window).click(function(e) {
    if ($(e.target).is('#editModal')) {
      $('#editModal').fadeOut();
    }
  });
});
