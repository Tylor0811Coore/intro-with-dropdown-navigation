// ======== navigation toggle ========

const navigationMenu = document.querySelector('.primary-header__navigation-menu'),
		openMenuButton = document.querySelector('.open-menu-button'),
		closeMenuButton = document.querySelector('.close-menu-button');

openMenuButton.addEventListener('click', function() {
	navigationMenu.classList.add('active');
});

closeMenuButton.addEventListener('click', function() {
	navigationMenu.classList.remove('active');
	closeOpenedDropdownMenu();
});

// ======== dropdown toggle =========

const primaryNavigationItems = document.querySelectorAll('.primary-header__navigation-item');

primaryNavigationItems.forEach(function(primaryNavigationItem, index) {
	primaryNavigationItem.addEventListener('click', function() {
		primaryNavigationItem.classList.toggle('active');
		closeOpenedDropdownMenu(index);
	});
});

/**
 * This function will close all opened dropdown
 * menu
 */
function closeOpenedDropdownMenu() {
	primaryNavigationItems.forEach(function(primaryNavigationItem) {
		primaryNavigationItem.classList.remove('active');
	});
}

/**
 * 
 * @param {
 * 	This is the index of the primary navigation item that has just been opened by the user
 * } currentIndex 
 * 
 * This function will close all the opened dropdown except the dropdown that
 * has just been opened by user
 */
function closeOpenedDropdownMenu(currentIndex) {
	primaryNavigationItems.forEach(function(primaryNavigationItem, index) {
		if (index !== currentIndex) {
			primaryNavigationItem.classList.remove('active');
		}
	});
}