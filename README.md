Libraries
React Router:
It is a powerful library that enables seamless navigation and routing within a React application. It offers a declarative method to specify and control many routes, enabling programmers to build single-page apps with a variety of views. React Router makes it possible to render components based on the current URL, ensuring that the user interface and the browser's location are always in sync. It provides a variety of routing options, such as nested routing, dynamic route matching, and even server-side rendering. By enabling developers to create intricate and simple navigation systems, React Router improves user experience while also making it simpler to manage application state and transitions between various views.

React:
It is an open-source JavaScript library developed by Facebook for building user interfaces. It is frequently used to develop interactive and reusable user interface (UI) components for mobile and single-page applications (SPAs). React's component-based architecture enables developers to deconstruct big user interfaces into smaller, more manageable components. These components are self-contained and reusable because they contain their own state and behaviour.
Chart.js :
A well-liked open-source JavaScript toolkit called Chart.js enables programmers to make interactive and aesthetically pleasing graphs and charts. It offers a straightforward and understandable API for creating a variety of chart formats, such as line charts, bar charts, pie charts, and more. Developers may quickly visualise data and present it in a meaningful way with Chart.js. It provides a wide range of customization options, allowing users to modify the charts' style, colours, labels, tooltips, and other features. The responsive design feature of the library enables the charts to dynamically resize and change to the container's dimensions.

React-chartjs-2 :
A React wrapper for the Chart.js library called React-Chartjs-2 makes it simple and convenient to incorporate Chart.js features into React projects. It makes use of Chart.js's strength and mixes it with React's component-based architecture, enabling programmers to easily construct dynamic and interactive charts. By offering React components that cover the Chart.js chart types, React-Chartjs-2 makes it easier to create charts in React. Props can be used to define the chart data, labels, colours, and other settings for these components, making it simple to create and configure them. Since it is based on React, developers may update and modify the chart dynamically by utilising React's state management and component lifecycle.

Dependencies:
Fetch : 
In React, fetch is frequently used to retrieve data from a server and update the state of the component as necessary. With the aid of React Hooks like useState or useEffect, it can be used within lifecycle methods or functional components.
Blob :
A built-in browser API known as the Blob object in React is used to represent immutable raw data. It enables memory-efficient creation and manipulation of binary data, including files and huge data collections. In React apps, the Blob object is frequently used in conjunction with other APIs like fetch or FileReader to handle binary data.
In React applications, the Blob object offers a flexible and effective approach to work with binary data. It makes it possible to manage file uploads, download files, or communicate with APIs that handle binary data.
Plugins:
Npm : 
Installing the appropriate Node Package Manager (npm) plugin is the first step in starting a ReactJS website development project. This plugin offers a command to search an installed software repository. A significant collection of libraries like ReactJS components are available in Npm.
Create react app :
A boilerplate plugin called Create React App is available for developers who have just begun working with ReactJS development companies. This plugin makes it simple and quick to set up a working project, including a frontend build pipeline, structure, developer environment, and app optimisation for production.

Components:
Page1 : 
This code begins with importing of React library and usestate hook. I have also imported css file named SubmitPage.css. The page1 component is declared as functional component with onButtonClick prop to pass the data. Inside function component there is a return statement which defines the JSX markup to rendered on screen. Inside div element I have declared a class with name as container. Inside the class I have declared a button with onClick attribute set to the onButtonClick prop which means when button is clicked the onButtonClick function is invoked and finally page1 component is exported as default export.
Page 2:
In the beginning this code imports dependencies like react,useState,useEffect hooks from react. Then Bar component is imported from react-chartjs-2 and chart from chart.js. Page2 component is defined as functional component inside the component the useState hook is used with words and loading. Words will store the word frequency and loading is Boolean flag indicating the data is being is fetched. Next I have used fetch to extract the data from the given url and also used sliced to keep only top 20 frequent words. The export CSV function is defined to generate a CSV file containing the word frequency data. It creates the CSV content by mapping over words array and joining the values with commas. Then it creates a blob object with the CSV content creates a temporary link to download a file. Then the chart data object defines the data to be displayed in the bar chart. The chartOptions object defines the options for the bar chart, including making the chart responsive and configuring the y-axis to begin at zero with step size of 1.Finally he page2 component is exported as the default export allowing it to be imported and used in other parts of the application. 

