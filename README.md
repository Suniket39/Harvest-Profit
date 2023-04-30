## Harvest-Profit

<p align="center">
  <a href="http://3.87.75.52:3000">
    <img src="https://user-images.githubusercontent.com/102083055/235347358-9551ea48-6b33-4738-934c-49c3fa44b8c7.png"/>
  </a>
</p>

### This Project was submitted in partial fulfillment for the award of Diploma in Advanced Computing (PG-DAC) from CDAC, Thiruvananthapuram

------------
>"Harvest Profit" is a web-based application, where farmers can achieve actual value for their farm goods. The 
objective is to provide a reliable, easier, and time-saving auction system that allows buyers to bid for those farm 
goods, thus eradicating middle man and benefiting farmers and buyers. Simultaneously farmers can buy 
necessary fertilizers, insecticides, and pesticides at reasonable prices, an opportunity for fertilizer dealers to 
grab an online market..

------------
#### Technologies used:
- #### Backend
    - Spring Boot for RESTful Web Services
    - Spring Security for JWT based authentication
    - Spring Data JPA as persistence layer
    - Hibernate as ORM tool
- #### Frontend
    - React JS as UI library
    - CSS for styling
    - Redux for state management
    - Axios for making API requests
- #### Database
    - MySQL for storing data

------------

#### Prerequisites
- JDK 11 and preferred editor (Eclipse / STS / IntelliJ)
- MySQL
- NodeJS

------------


#### Setup
1. Download the zip file or clone this repository
`git clone https://github.com/Suniket39/HarvestProfit`

2. Open `Backend` folder in Eclipse / STS
3. Edit `Backend/src/main/resources/application.properties` file as per your configuration
4. Run the Spring Boot Application
5. Run the queries provided in `Backend/src/main/resources/sqlQueries/userRoles` in the created database `nk`
5. Open `Frontend` folder in your preffered editor and run `npm install` to install all dependencies
6. Run `npm start` and access the development server on `http://localhost:3000` on your browser

