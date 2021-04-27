# Requirements

## Subsystem Restful API

The use case of this subsystem is handling the course organization and all the participants
of the CODERS.BAY. All the data must be stored in some database. The communication with 
other subsystems should be stateless with REST. The data sent and consumed must use the 
JSON format.
 
| Requirement      | Explanation                                         | Importance |
| ---------------- | :-------------------------------------------------- | :--------: |
| CRUD operations  | Insert users, courses etc                           |    ***     |
| Open api         | Provide an open api for course information          |    ***     |
| "Private" api    | Api for course planning. Accessible after login     |    ***     |
| Secure DB        | Hash private information. GDPR compliant            |     **     |
| CalDAV interface | Provide calendar information                        |     **     |
| Export function  | Provide an api for exporting data from the database |     *      |

## Subsystem Administration Frontend

This subsystem provides a frontend for the course organizing tool. It must have a role based login
service.

| Requirement               | Explanation                                                              | Importance |
| ------------------------- | :----------------------------------------------------------------------- | :--------: |
| Edit the course book      | Insert users, courses etc                                                |    ***     |
| Role based edits          | Only specific roles can create new courses and course books              |    ***     |
| Show attendance           | Show the attendance of each participant in percent and mark it if to low |    ***     |
| Secure DB                 | Hash private information. GDPR compliant                                 |     **     |
| Markdown edit             | Edit and render the course book in markdown                              |     *      |
| Google/GitHub Login       | Login with another service                                               |     *      |
| Two factor authentication | Enable two factor authentication with the Google authenticator           |     *      |
| Calendar implementation   | Implement an example calendar with the CalDAV interface                  |     *      |


> The course book consists of participants, trainer dates and subjects. There is also a text field for 
> explaining the current topic.