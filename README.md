# Cube Academy Cube of the Month Nomination Frontend

This repository contains the Cube Academy Cube of the Month Nomination Frontend, a web application built as part of the 3SC Web Developer Task. The purpose of this project is to demonstrate my ability to build a web application that integrates with an API, follows provided designs, and adheres to best coding practices.

## Table of Contents
- [Project Overview](#project-overview)
- [Getting Started](#getting-started)
- [Challenges and Solutions](#challenges-and-solutions)
- [Technologies Used](#technologies-used)
- [Future Enhancements](#future-enhancements)
- [Questions](#questions)

## Project Overview

The Cube Academy Cube of the Month Nomination Frontend is a web application designed to allow users to nominate their favorite cube of the month. It follows the provided designs, which include a design system for theming and re-usable elements, as well as desktop and mobile layouts to ensure responsiveness.

## Getting Started

To run the project locally, follow these steps:

1. Clone this repository to your local machine:
   ```
   git clone https://github.com/intuneteq/3-sided-cube-assessment.git
   ```

2. Navigate to the project directory:
   ```
   cd 3-sided-cube-assessment
   ```

3. Install the project dependencies using npm or yarn:
   ```
   npm install
   # or
   yarn install
   ```

4. Start the development server:
   ```
   npm run dev
   # or
   yarn dev
   ```

The application should now be running at `http://localhost:3000`.

## Challenges and Solutions

Throughout the development of this project, I encountered some challenges and overcame them as follows:

1. Challenge: Understanding the API documentation.
   Solution: I thoroughly reviewed the provided OpenAPI docs to understand how to interact with the API and make authenticated requests.

2. Challenge: Integrating the API with the frontend.
   Solution: While I did not use API code generation due to my lack of prior experience and time constraints, I successfully integrated the API by using Axios for making REST requests and Tanstack Query (useQuery) to manually generate hooks from the API documentation, as recommended. This approach allowed for seamless integration between the frontend and the API.

3. Challenge: Manipulating React Hook Form with the given input range.
   Solution: I encountered challenges when working with React Hook Form to handle the input range. I addressed these issues through experimentation and online resources to achieve the desired functionality.

4. Challenge: Implementing the delete and edit functionality in the nomination table and creating a responsive table.
   Solution: Due to the time constraints, I was unable to implement the delete and edit features in the nomination table and make the table responsive. These features require more time and attention to detail, which I was unable to allocate in the given timeframe.

## What I Did Right

While there were challenges, there were also notable achievements in this project:

- I ensured that I built the application following the design system, creating very reusable components for a cohesive and consistent user experience.
- I made the most of the latest features in Next.js 14, including server actions, layouts, and SEO optimization, to enhance the project's performance and accessibility.
- I adhered to the Atomic Design principle, structuring the project's components in a modular and efficient manner.
- I successfully implemented Tanstack Query for state management, providing a robust and maintainable solution for managing API data.
- The user interface was meticulously crafted and made fully responsive, offering a seamless experience across various devices and screen sizes.


## Technologies Used

In this project, I utilized the following technologies:

- Language: Typescript
- Framework: Next.js
- Styling: Tailwind.css
- Forms: React Hook Form with Yup validation
- REST Requests: Axios for API requests
- Authentication: Bearer token for authenticated requests

## Additional Features

I added the following additional features to enhance the user experience:

- [Add the features you implemented, if any]

## Future Enhancements

Given more time, I would consider implementing the following enhancements:

- Slide in Animations,
- Data persistence using Tanstack

## Questions

If you have any questions or need further clarification about any aspect of this project, please feel free to reach out to me at tobiolanitori@gmail.com. I am more than happy to provide additional information and discuss any queries you may have.

Thank you for considering my submission.

Sincerely,
Tobi Olanitori
