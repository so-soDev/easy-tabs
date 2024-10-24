Simple Tab Implementation
This code creates a simple tab interface that allows users to switch between different content associated with each tab. The tabs are implemented using buttons, and the corresponding content is displayed based on the selected tab. Key features and functionalities of the code include:

HTML Structure:

The tabs are represented by buttons with the class tab-link, each having a data-tab attribute that indicates the associated content.
The tab content is wrapped in elements with the class tab-content, which have a data-content attribute corresponding to the data-tab value of each tab.
Initially, only the first tab (Tab 1) and its content are visible, while the other content is hidden using the hidden attribute.
JavaScript Logic:

All tab buttons and content are retrieved using querySelectorAll.
An event listener for click is added to each tab, which performs the following actions:
It retrieves the data-tab attribute value of the current tab.
It removes the active class from all tabs and hides all content by adding the hidden attribute.
It adds the active class to the current tab and shows the corresponding content by removing the hidden attribute.
User Interface:

Users can click on the tabs to dynamically change the visible content, creating an interactive and user-friendly interface without reloading the page.
This implementation ensures clean code and ease of use, making it an excellent choice for adding tab functionality to a web page.
