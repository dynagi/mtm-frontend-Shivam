# Itinerary Planner

The Itinerary Planner is a simple React application that allows users to manage a list of tasks that need to be completed before or during their travels. This application demonstrates the use of CRUD operations in React using Hooks.

## Features

- **Add Tasks**: Users can enter tasks into an input field and add them to their itinerary.
- **View Tasks**: Display all the tasks in a list.
- **Update Tasks**: Users can edit the text of tasks in their list.
- **Delete Tasks**: Users can remove tasks from their list.

## Technical Requirements

1. **React Hooks**: Implement the application using functional components with hooks such as `useState`.
2. **CRUD Operations**: Implement all CRUD operations: Create, Read, Update, and Delete for the travel tasks.
3. **Input Validation**: Add simple validation to ensure no empty tasks are submitted.

## Components

### 1. Task Input Component

- **Purpose**: A form with an input field for new tasks and a submit button.
- **Validation**: Prevents empty task submissions.

### 2. Tasks List Component

- **Purpose**: Display each task in a list with each item showing the task description.
- **Edit Button**: Allows the task description to be modified inline or through a modal/popup.
- **Delete Button**: Allows removing the task from the list.

### 3. Task Update Mechanism

- **Purpose**: A simple mechanism to update tasks, which could be an inline text field or a modal dialog.

### 4. Styling and Layout

- **Purpose**: Use CSS or a CSS framework like Bootstrap to style the components. The layout is simple, intuitive, and clean, emphasizing usability.

## Setup Instructions

### 1. Project Setup

Initialize the project using Create React App. This sets up a standard React development environment quickly and easily.

```bash
npx create-react-app itinerary-planner
cd itinerary-planner
npm start
