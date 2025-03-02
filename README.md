# Task App by Robert Connolly

This project is the final project for the UI/UX module, where we were tasked with taking the Task App Moqqup we created in class and transforming it into a real Angular project. The design process for this app aimed to make it as intuitive as possible. The primary goal of this app is essentially to be a Google Classroom clone, where users can enroll in different modules. They will be able to view task pages within each module, including posts, comments, pending tasks, and more, similar to the functionality of Google Classroom but on a smaller scale.

## Main functionalities of the Task App

As we discussed before, the main functionality of the app is to provide a user-friendly environment for both students and teachers, allowing them to easily navigate and clearly identify the tasks and content related to their modules. Another feature I wanted to add was a commenting system, inspired by Google Classroom, where students can leave comments. I thought this would enhance the app's functionality and make it more interactive, as it seemed like a valuable feature. Additionally, I wanted to incorporate a calendar feature, similar to Google Calendar, where users can select a specific week to view tasks and filter them by module. This would help users stay organized and easily track their assignments:

- **Home page (tasks of the week)**: On the main page, as you see, it will show you a menu on the top to navigate over the main pages of the application, which will be Home, Calendar, Pending tasks, and Add class. Then, on the Home page, you will see there are 5 squares representing a day. Each square, from Monday to Friday, will show you the tasks that have been completed and the ones that have not for this week. This helps you quickly get an idea of the work there is and will be during this week. The tasks are separated by day and module. If there is more than one task per day/module, they will be together underneath. There is an open button and a pending button. The open button brings you to the module page, just like Classroom, and the pending button shows you the pending tasks. Also, you are able to click on whichever task you are interested in to go to the specific task page to submit your homework, but we will see that later.

![Home Page](/docs/img/home.gif)  

- **Module Page**: In this page, you will be able to access it from the **OPEN** button inside a task component on the home page. It will bring you to the main class page, just like Google Classroom. You will see the banner of the class, the posts made by the teacher, and each post has an image (which is optional). Additionally, each post has real dynamic comments, and you can even make a comment yourself, which will appear. Later on, I will explain how all this works, but spoiler—it’s localStorage. Also, to the left, there is a Homework section that shows all the tasks that HAVE NOT BEEN COMPLETED. However, if you click on the "Show all" button, it will display all...

![Module Page](/docs/img/module.png)


- **Calendar Page**: This page is quite important in my task app. I envisioned, from the very start of the original mockup, having a working calendar where the user selects the start date, just like on Booking.com. The tasks will appear with the same menu as the home page, but for the selected week. Additionally, there is a filter for each subject, so if you are interested in just some subjects, you can filter them! To me, this feels really intuitive and doesn’t overwhelm the user!

![Precio de mercado](/docs/img/calendar.png)

- **Pending Page**: The pending page is basically a page where the user can see all the pending tasks they have left in a quick list of tasks. On the top, there is a drop-down menu which allows the user to switch between pending tasks, completed tasks, or all tasks, which in my opinion is useful! In each task, there is a quick overview: name of the task, deadline, description, grade, etc. From here, you can view the task page, which we will talk about next.

![Pending Page](/docs/img/pending.png)

- **Task Page**: When we click on a task, it will bring us to the specific task page. Here, you will have data like the tutor who assigned the task, the deadline, points, and finally, a button to mark the task as completed, which will then be stored!

![Task Page](/docs/img/task-page.png)

## Problems that have arisen in the course of development.

Basically, the biggest problem was the time invested in styling the application because my goal was to make it exactly the same as the mockups I submitted, which I think I did a pretty good job at. (Here below is an image of the home page of the original mockup, not the web app.)

![Original Moqqup](/docs/img/home-moqqup.png)

Also, in the later stage of the web app, I started using Angular Material for the calendar and dialogs, and it was challenging to understand and get it to work. At the beginning, I was a bit lost on how Angular worked, but I found some really good tutorials to get the basics and started to fully understand and do everything. Here is the official course I followed: [https://angular.dev/tutorials/first-app](https://angular.dev/tutorials/first-app)


```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
