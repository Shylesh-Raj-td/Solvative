# Table of Contents <!-- omit in toc -->
- [Readme first!](#readme-first)
- [Live Reviews](#live-reviews)
  - [Must Haves](#must-haves)
    - [Backend](#backend)
    - [Frontend](#frontend)
      - [Reviews List View (Default View, route = `/`)](#reviews-list-view-default-view-route--)
      - [New Review (route = `/new`)](#new-review-route--new)
      - [Edit Review (route = `/:id`)](#edit-review-route--id)
  - [Nice to have](#nice-to-have)

# Readme first!

- Try to use less number of 3rd party packages/libraries
- Keep your code clean, maintainable and readable, usage of formatters and linters might come handy here
- Follow best practices for particular framework/library
- Your project should have a `README.md` file, which should contain below:
  - Minimum steps and configurations needed to run the project in local machine under `# Getting Started` section, sample provided below:
    ```bash
    # after cloning the repo
    
    cd backend
    npm i
    npm start
    
    # new terminal
    
    cd frontend
    npm i
    npm start
    ```
  - The problem statement under `# Problem Statement` section
  - A section called `# Completed`, in which you have to write down what did you complete, you can simply copy/paste relevant tasks from problem statement
- It is ok if you can't complete all the tasks/features, but each individual task should be in considerably complete state
- You will need to push all of your code to a public GitHub repo and share the link of the same
- You will get 2-2.5 hours to do the exercise

<!-- The actual problem statement start after this -->

# Live Reviews

**Live Reviews** allows users to add/edit/remove review and view all reviews with live feeding.

## Must Haves

### Backend

- Use any DB and NodeJS framework of your choice
- Create REST APIs to perform CRUD operations of notes
- Store each review with id, title, content and date-time
- Implement web-socket, which should broadcast whenever any review is getting added/edited/deleted

### Frontend

- We are only looking for decent UI, which can just work.
- Please start with plain HTML first, do not worry about CSS. Complete rest of the functionalities and then if time permits, continue improving UI.
- Please do not use any css framework like bootstrap, tailwind, etc.
- You can use either React, Vue, Angular or vanilla HTML/CSS/JavaScript.
- Inline styles not allowed.

#### Reviews List View (Default View, route = `/`)

- A button to create new review - clicking on which user will be redirected to `/new/` route
- Basic Table layout with all reviews
    - Table should have 6 columns: #, Title, Content, Date-time, Edit, Delete
        - `#` - Static count number starting with 1
        - Edit - a edit button, clicking on which user will be redirected to `/:id` route
        - Delete - a delete button, clicking on which review will be deleted
    - Show each review in separate row
    - Latest review should be displayed first
    - This should be a live list view with implementation of web-socket, so whenever any review is added/edited/deleted, it should immediately update the table without user needing to refresh the page

#### New Review (route = `/new`)

- 1 input for title
- 1 textarea for content
- Save button - saves the review, and redirects user back to list view, i.e. route `/`
- Reset button - resets the review content and title
- Cancel button - redirects user back to list view, i.e. route `/`

#### Edit Review (route = `/:id`)

- Re-use the same component from New Review
- Pre-fill the title and content from the existing review
- Delete button - deletes the review, and redirects user back to list view, i.e. route `/`

---

## Nice to have

You will be given bonus marks for completing any of the below task, but make sure to complete all the [must haves](#must-haves) first:

- Highlight different live events in different colors
    - When new review is added, highlight it with green color in table for 3 seconds
    - When any review is edited, highlight it with blue color in table for 3 seconds
    - When new review is deleted, highlight it with red color in table for 3 seconds and then it should disappear
- Once user deletes the note, either from list or from note itself, show a snackbar/toastr with success message and an undo button
    - Snackbar/toastr should be visible for 5 seconds
    - User can undo the deletion by clicking on undo button
- Unit testing
- Sorting functionality based on title and date-time in both, ascending and descending order
- Search functionality