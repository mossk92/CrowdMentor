# React Crowdfunding: Project Starter
Frontend coding for Crowdfunding app - backend previously completed

## Page Links
    Github Repository:
        https://github.com/mossk92/CrowdMentor
    
    Deployed Project (Heroku):
        https://guarded-journey-80030.herokuapp.com
        Note: create account not working: please use following credentials:
            Username: k8e
            Password: k8ek8e1!

### Portfolio
    Due
        Sunday 7th November at 11.59pm.

    Description
        Kickstarter, Go Fund Me, Kiva, Change.org, Patreon... All of these different websites have something in common: they provide a platform for people to fund projects that they believe in, but they all have a slightly different approach. You are going to create your own crowdfunding website, and put your own spin on it!

    Submission Requirements:
        Please submit the following:
            ● A link to the GitHub repository containing the code for your project.
            ● A link to the deployed project.
            ● A screenshot of the home page.
            ● A screenshot of the project creation form.
            ● A screenshot of a project with pledges.
            ● A screenshot of the resulting page when an unauthorized user attempts to edit a project.

#### App Details
    Name:       CrowdMentor
    Tagline:    Linking dreamers with achievers
    Purpose:    Providing a platform to advertise development areas that 
                users are looking to improve on (such as soft skills, 
                leadership, physical work, technical work etc.)
    Audience:   Project Owners - Those with specific skill sets to develop
                Crowdfunders: Those with skills and time to mentor/tutor
    Exchange:   Reward based – not financial, funders are volunteers
    Example:    Project Owner: User adds a project that says they are looking 
                to learn Python with a specific interest in being able to build 
                a game
                Crowdfunders: Search by their skills to find a match that they are comfortable with. They can then pledge time to assist (such as 4x 1hr sessions)

##### Features
    ● Home Page: 
        - Without token: shows options available to public only (login / create account)
        - With token: shows options available to users (profile page, create project, logout)
    ● Create Account: allows creation of accounts including username, name, email and biography
    ● About: provides details and intent for the website
    ● Login: allows authorised users to login, sends unauthorised requests to 404



                    Existing:
                        ● Create Project
                            - Limited only to users
                            - Including location
                            - Including category
                            - Date automatically generated
                            - Authorised User can change details
                            - Authorised User can delete profile
                            - Sum of all pledges
                        ● Create Pledge
                            - Limited only to users
                        ● Admin Page
                            - Able to access Users
                            - Able to access Projects
                            - Able to access Pledges       

                    Still to come:
                        ● Search functionality
                            - By active projects
                            - By category
                            - By description
                            - By location
                        ● Way for pledgers to connect to project owners and vice versa
                            - I.E direct message 
                        ● Responsive design for web and mobile
                        ● Optionality for Pledgers to organise masterclasses by sending request to a group of project owners with similar categories
                        ● Setting goal to either time (hr) which is the default but also give option for date where a pledge has to commit all (e.g commit to assisting to meet that goal)

###### Known Bugs
    ● Project Pages: 
        Issue1: Little information - want to include more details
        Issue2: Very generic with minimal styling - want to improve the CSS
        Issue3: Delete function is not working -
    ● About Page: 
        Issue1: high level information only - want to add mroe to intice users to the app
        Issue2: Very generic with minimal styling - want to improve the CSS
    ● Pledge Page: 
        Issue1: doesn't refresh on the return to project - want the new pledge to show
    ● Responsiveness: 
        Issue1: No media queries, only responsive CSS terms used
    ● Profile Page: 
        Issue1: Page only - needs to include information about the user
        Issue2: Authorised users should be able to delete their profile
        Issue3: Authorised users should be able to edit their profile
    ● CreateAccout Page: 
        Issue1: Categories and Location have no validation - want drop down lists


####### Screenshots
    ● Home Page:
    ● Create Account Page:
    ● LogIn Page:
    ● Project Page:
    ● Create Project Page:
    ● Create Pledge Page:
    ● 404 Page:
    ● About Page:
    ● Profile Page:
    ● Lighthouse Report:    
