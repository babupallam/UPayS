UPayC: Payment Gateway Demonstration - Server using Angular+Node+Postgres
===========================
	It is a model of payment gateway created using 'AngularJs' and 'Node-Express'. The data-base is handled in this model by 'postgres'.   

##Steps to be followed:
1. Pull the project

2. Extract, then, within the directory, shoot this command: npm install

3. run the server using the command: npm run start:dev

4. Move to the link: http://localhost:3001
	
	1. SetUp the postgres database, with the credentials as shown in `upayser/server/config/config.json`.
	
	2. Shoot the following command: 
	
	`sequelize db:migrate`. 
	
	This will create the required tables in order to get the server run.
	
	3. The required queries have been written inside: `upayser/server/routes`
	
	4. I prefer you to use Postman API, to get familiar with the server, else turn on the server and go, work, and feel different views.
	 
Now Our Server is On. Put this together with upay:server application.

