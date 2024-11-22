# JobConnect

JobConnect is a web application that enables enterprises to create job offers and allows job seekers to search for job opportunities that match their skills.

## Overview

The application consists of two main components:

1. **Job Offer Creation**: Enterprises can create job offers, which are sent to a producer microservice. The producer microservice then sends the job offer to a Kafka topic.
2. **Job Matching**: A consumer microservice subscribes to the Kafka topic and matches job seekers with job offers based on their skills. If a match is found, the microservice sends an email to the job seeker.

## Features

* Create job offers as an enterprise
* Search for job opportunities as a job seeker
* Automatic job matching based on skills
* Email notifications for job seekers

## Usage Instructions

1. Clone the repository to your local machine.
2. Install the dependencies by running `npm install` or `yarn install`.
3. Start the application by running `npm start` or `yarn start`.
4. Open your web browser and navigate to `http://localhost:3000`.

## Dependencies

* React
* Vite
* Tailwind CSS
* Kafka

## Licensing

JobConnect is licensed under the MIT License.

## Contributing

Contributions are welcome! Please submit a pull request with your changes and a brief description of what you've added or fixed.
