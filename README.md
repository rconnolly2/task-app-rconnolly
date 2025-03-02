# Task App by Robert Connolly

This project is the final project for the UI/UX module, where we were tasked with taking the Task App Moqqup we created in class and transforming it into a real Angular project. The design process for this app aimed to make it as intuitive as possible. The primary goal of this app is essentially to be a Google Classroom clone, where users can enroll in different modules. They will be able to view task pages within each module, including posts, comments, pending tasks, and more, similar to the functionality of Google Classroom but on a smaller scale.

## Main functionalities of the Task App

As we discussed before, the main functionality of the app is to provide a user-friendly environment for both students and teachers, allowing them to easily navigate and clearly identify the tasks and content related to their modules. Another feature I wanted to add was a commenting system, inspired by Google Classroom, where students can leave comments. I thought this would enhance the app's functionality and make it more interactive, as it seemed like a valuable feature. Additionally, I wanted to incorporate a calendar feature, similar to Google Calendar, where users can select a specific week to view tasks and filter them by module. This would help users stay organized and easily track their assignments:

- **Home page (tasks of the week)**: On the main page, as you see, it will show you a menu on the top to navigate over the main pages of the application, which will be Home, Calendar, Pending tasks, and Add class. Then, on the Home page, you will see there are 5 squares representing a day. Each square, from Monday to Friday, will show you the tasks that have been completed and the ones that have not for this week. This helps you quickly get an idea of the work there is and will be during this week. The tasks are separated by day and module. If there is more than one task per day/module, they will be together underneath. There is an open button and a pending button. The open button brings you to the module page, just like Classroom, and the pending button shows you the pending tasks. Also, you are able to click on whichever task you are interested in to go to the specific task page to submit your homework, but we will see that later.

![Home Page](/docs/img/home.gif)  

- **Module Page**: In this page, you will be able to access it from the **OPEN** button inside a task component on the home page. It will bring you to the main class page, just like Google Classroom. You will see the banner of the class, the posts made by the teacher, and each post has an image (which is optional). Additionally, each post has real dynamic comments, and you can even make a comment yourself, which will appear. Later on, I will explain how all this works, but spoiler—it’s localStorage. Also, to the left, there is a Homework section that shows all the tasks that HAVE NOT BEEN COMPLETED. However, if you click on the "Show all" button, it will display all...

![Module Page](/docs/img/module.gif)


- **Calendar Page**: This page is quite important in my task app. I envisioned, from the very start of the original mockup, having a working calendar where the user selects the start date, just like on Booking.com. The tasks will appear with the same menu as the home page, but for the selected week. Additionally, there is a filter for each subject, so if you are interested in just some subjects, you can filter them! To me, this feels really intuitive and doesn’t overwhelm the user!

![Calendar Page](/docs/img/calendar.gif)

- **Pending Page**: The pending page is basically a page where the user can see all the pending tasks they have left in a quick list of tasks. On the top, there is a drop-down menu which allows the user to switch between pending tasks, completed tasks, or all tasks, which in my opinion is useful! In each task, there is a quick overview: name of the task, deadline, description, grade, etc. From here, you can view the task page, which we will talk about next.

![Pending Page](/docs/img/pending.gif)

- **Task Page**: When we click on a task, it will bring us to the specific task page. Here, you will have data like the tutor who assigned the task, the deadline, points, and finally, a button to mark the task as completed, which will then be stored!

![Task Page](/docs/img/task.gif)

## Problems that have arisen in the course of development.

Basically, the biggest problem was the time invested in styling the application because my goal was to make it exactly the same as the mockups I submitted, which I think I did a pretty good job at. (Here below is an image of the home page of the original mockup, not the web app.)

![Original Moqqup](/docs/img/home-moqqup.png)

Also, in the later stage of the web app, I started using Angular Material for the calendar and dialogs, and it was challenging to understand and get it to work. At the beginning, I was a bit lost on how Angular worked, but I found some really good tutorials to get the basics and started to fully understand and do everything. Here is the official course I followed: [https://angular.dev/tutorials/first-app](https://angular.dev/tutorials/first-app)

## Project structure

![File structure 1](/docs/img/file-structure-1.png)

The project structure is as follows: first, Angular stores all the code inside the `src` folder. In here, we can find two important folders. The `assets` folder stores all the images in three subfolders: `module-banners`, `post-photos`, and `profile-pictures`. Next to `assets`, we have the `app` folder.

![File structure 3](/docs/img/file-structure-3.png)

Then, in `src`, as we said before, we have all the code for our web app. I decided to organize it in the following way: since I didn’t have much idea of the correct way of doing it, I decided that the components that act like independent pages will be placed outside, while the components will be located in the `components` folder, like the image shows. Then, the interfaces will be located inside the `interfaces` folder, and the services inside the `services` folder. 

The menu (navbar) is a component and is also located in the `components` folder. For the defined routes, I have them defined inside `app.routes.ts`, and the styles for each component have their own stylesheet. Also, some components, like the task line component, since it has such little HTML, I decided not to use a separate HTML file and instead put it inline, as I have seen in the official Angular course recommending it.

![File structure 2](/docs/img/file-structure-2.png)


## Component structure

Next, I will explain how the project is organized with this UML component diagram. Basically, everything that falls under `app` is what gets executed when you run `npm run`. In `app.component.html`, I call the `menu-header` component, which then redirects to the different pages, each of which is also a component.  

For example, on the home page, I call the `home` component. This component has its own static HTML and CSS but also calls another component, `day-task`, for each white module div you see on the screen.

![Component diagram project](/docs/diagram/component-diagram.png)

Then this `day-task`, as you see below, contains another component called `task` for each individual task you see underlined. Since in the module square there can be multiple tasks, if there are, for example, two tasks for the same module on the same day, each will be represented as a separate `task` component.

![Components visualized](/docs/img/comp-1.png)

This happens with basically everything—the comment system I made for viewing and making comments, the `home-work` component, the `module-filter` component, etc...

After understanding that the components basically call each other, creating a chain-like relationship, I would like to explain the services. As shown in the UML component diagram, we have services for `student`, `tutor`, `module`, `task`, and `post`. The service basically acts like a CRUD class for defining the list of objects. For persistence, I made some of these services use `localStorage`, as you can see in this screenshot:

![localStorage Screenshot](/docs/img/localstorage.png)

## Calendar Page Logic

Since I already explained how the Home page works, I’m going to explain how the Calendar works.  

Basically, I have two services: `ModuleService` and `TaskService`. The `CalendarComponent` calls the `TaskService` and retrieves tasks for each day of the week based on the selected date in the calendar and the selected subjects from the `ModuleFilterComponent`.  

Then, the `DayTaskComponent` calls the `TaskComponent` to display the line tasks, just like in the Home page. So, I’m essentially reusing these two components but fetching tasks from the service differently.  

Also, I want to remark that I have two interfaces, `Task` and `Module`, because they enforce object instantiation with the properties defined by the interface. This works similarly to Java and abstract classes.

![UML Diagrama Calendar](/docs/diagram/calendar.png)

## Running

To install dependencies run:

```bash
npm install
```

This will install and download all the necessary libraries/dependencies.  

Then, to run, do:

```bash
npm start
```