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

#### Features
    ● Home Page: 
        - Without token: shows options available to public only (login / create account)
        - With token: shows options available to users (profile page, create project, logout)
    ● Create Account: allows creation of accounts including username, name, email and biography
    ● About: provides details and intent for the website
    ● Login: allows authorised users to login, sends unauthorised requests to 404
    ● Create Project: 
        - allows anyone logged in to create a new project, which includes title, description, goal hours, image url, category and location    
        - allows deletion of projects
        - allows editing of projects
    ● Create Pledge:
        - allows anyone logged in to create a pledge on a project - which included amount and comment
                    
                    
                    
                    Existing:
                        ● Create Pledge
                            - Limited only to users   

                    Still to come:
                        ● Optionality for Pledgers to organise masterclasses by sending request to a group of project owners with similar categories
                        ● Setting goal to either time (hr) which is the default but also give option for date where a pledge has to commit all (e.g commit to assisting to meet that goal)

##### Known Bugs / Features to Come
    ● Issue 1: Project Delete function not working (any user can delete project)
    ● Issue 2: Editing projects links back to home page instead of back to project
    ● Issue 3: Pledge page doesn't refresh on return to project (want the new pledge to show) 
    ● Issue 4: Pledges permitted for users regardless of project ownership (you can pledge to own project) 
    ● Issue 5: Responsiveness - needs to improve for mobile designs 
    ● Issue 6: Profile page doesn't include any information 

    ● Feature 1: Barometer on project pages to show status of pledges (tracking to goal)  
    ● Feature 2: better 'About' page - improve information to intice users to the app 
    ● Feature 3: improve CSS on 'About' page 
    ● Feature 4: use drop down selection lists for categories and location 
    ● Feature 5: Search by user function 
    ● Feature 6: Search by project function (active, category, location, title) 
    ● Feature 7: Allow project owners and pledgers to connect (i.e direct messages) 
    ● Feature 8: MasterClasses - allow pledgers to organises group classes 
    ● Feature 9: Authroised users should be able to delete their user profile 
    ● Feature 10: Authroised users should be able to edit their user profile 

###### Screenshots
    ● Home Page (Not Yet Logged In):
        https://github.com/mossk92/CrowdMentor/issues/1#issue-1046692908
    ● Home Page (Logged In):
        https://github.com/mossk92/CrowdMentor/issues/2#issue-1046693261
    ● Create Account Page:
        https://github.com/mossk92/CrowdMentor/issues/3#issue-1046693409
    ● LogIn Page:
        https://github.com/mossk92/CrowdMentor/issues/4#issue-1046693490
    ● Project Page:
        https://github.com/mossk92/CrowdMentor/issues/6#issue-1046693804
    ● Create Project Page:
        https://github.com/mossk92/CrowdMentor/issues/7#issue-1046693876
    ● Create Pledge Page:
        https://github.com/mossk92/CrowdMentor/issues/8#issue-1046693943
    ● 404 Page:
        https://github.com/mossk92/CrowdMentor/issues/9#issue-1046694028
    ● About Page:
        https://github.com/mossk92/CrowdMentor/issues/5#issue-1046693685
    ● Profile Page:
        https://github.com/mossk92/CrowdMentor/issues/10#issue-1046694349
    ● Lighthouse Report:    
        https://github.com/mossk92/CrowdMentor/issues/11#issue-1046694424