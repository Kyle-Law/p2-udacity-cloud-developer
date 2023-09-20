# Full Stack Apps on AWS Project

You have been hired as a software engineer to develop an application that will help the FBI find missing people. The application will upload images to the FBI cloud database hosted in AWS. This will allow the FBI to run facial recognition software on the images to detect a match. You will be developing a NodeJS server and deploying it on AWS Elastic Beanstalk.
You will build upon the application we've developed during the lessons in this course. You'll complete a REST API endpoint in a backend service that processes incoming image URLs.

## Local Development

To run the application locally, follow these steps:

### 1. Clone the Repository:

```bash
git clone git@github.com:Kyle-Law/p2-udacity-cloud-developer.git
cd p2-udacity-cloud-developer
```

### 2. Install Dependencies:

Ensure you have Node.js installed on your machine. Then: `npm install`

### 3. Start the Development Server:

`npm run dev`

The above command uses nodemon to start the server, which will restart automatically upon detecting any code changes.

### 4. Access the Application:

Open a browser and navigate to: `http://localhost:8082/`

## Deployment

The application is deployed on AWS using the following services:

### AWS Elastic Beanstalk

- **Environment URL**: [http://p2-test.eba-rmpwswrd.us-east-1.elasticbeanstalk.com/](http://p2-test.eba-rmpwswrd.us-east-1.elasticbeanstalk.com/)

### AWS CloudFront

- **Distribution URL**: [https://d1ab9ie6mra76b.cloudfront.net](https://d1ab9ie6mra76b.cloudfront.net)

### Deployment steps

#### 1. Setup AWS CLI v2

- **Download and Install**:
  Download the AWS CLI version 2 from the official AWS site for your specific operating system.

- **Configure AWS CLI**:
  After installation, open your terminal or command prompt and run: `aws configure`, You will be prompted to enter your AWS credentials, default region, and default output format.

#### 2. Install the Elastic Beanstalk CLI (EB CLI)

If you haven't installed the EB CLI, follow the instructions on the AWS documentation to install it.

#### 3. Initialize Your Application for EB

1. `eb init`
2. `eb create <env_name>`
3. For further deployment, run `eb deploy`
4. `eb open` to open app on browser

## Project Instructions

To complete this project, I have:

- Set up node environment
- Create a new endpoint in the server.js file
- Deploying your system

## Testing

Successful URL responses should have a 200 code. Ensure that you include error codes for the scenario that someone uploads something other than an image and for other common errors.

## License

[License](LICENSE.txt)

```

```
