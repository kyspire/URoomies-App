HELLO

STEP 1: run `npm i` on server and client folders. 

POSTGRESQL SETUP

STEP 1: Go to https://www.postgresql.org/download/ and download the installer for your OS 

STEP 2: Click next for all, but when prompted a checklist, uncheck stack builder (idk why, the tutorial told me to)

STEP 3: Password setup. Set password as 'password' 

STEP 4: Port = 5432

Step 5: Default Locale 

Step 6: Wait for installation. 

Step 7: login PGAdmin4.

Step 8: Left click servers -> Left cick Postgres [ver], type in password. -> right click databases, click create database, name it URoomies -> save. 

Step 9: Open PSQL shell, when prompted with database[postgres]: type URoomies, click enter otherwise

Step 10: Create tables. 

CREATE TABLE userprofile(
userid serial primary key, 
username varchar(30) not null, 
name varchar(30) not null, 
email varchar(40) not null,
password text not null); 

CREATE TABLE description( 
descriptionid serial primary key, 
userid integer not null, 
fname varchar(20) not null, 
lname varchar(20) not null, 
gender varchar(20) not null, 
age integer not null, 
specialization varchar(50) not null, 
yearstanding integer not null, 
introduction varchar(300) not null, 
livinghabits varchar(300) not null, 
profilepicture text, 
foreign key (userid) references userprofile (userid)); 


//COMMANDS 

\d to see all relations 

\d [relation] to see specs of a relation

select * from userprofile; 

select * from description;


