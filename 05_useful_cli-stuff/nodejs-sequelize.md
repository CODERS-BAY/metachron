{\rtf1\ansi\ansicpg1252\cocoartf2513
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww12820\viewh13020\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs36 \cf0 - Project Folder\
\
	- server\
		- npm init\
		- npm i express\
		- npm i sequelize\
		- npm i mysql2\
		- npm i cors\
		- npm i dotenv\
		- npm i nodemon \'97save-dev\
		\
\
sequelize:\
\
(to run sequelize commands on windows put npx in front // npx sequelize db:migrate)\
	- sequelize db:create\
	- sequelize model:generate --name User --attributes username:string\
	- sequelize db:drop\
	- sequelize db:create\
	- sequelize db:migrate\
\
	- sequelize seed:generate \'97name user\
	- sequelize db:seed:all\
	- sequelize db:seed \'97seed <name of the seed>\
	- sequelize seed:undo (:all)\
\
	- sequelize db:migrate:status (shows us whats up and whats down)\
	- sequelize db:migrate:undo (:all)\
\
\
\
\
// sources :\
// https://www.youtube.com/watch?v=3qlnR9hK-lQ&t=1522s}