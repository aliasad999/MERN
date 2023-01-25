# MERN
fullstack webapp with user authentication
# installation 
for fronend related dependencies, following script has to be executed
cd client && npm install
for backend related depencies, navigate to client folder
cd server && npm install
# run backend 
cd server && npm run dev
# run react frontend
cd client && npm run start
# MongoDB local installation
Head over to https://www.mongodb.com/try/download/community and install community version of mongo db
after installation.. open mongodb compass, and find out the default port where the server would be running.
go to index.ts file in server folder and adjust mongo db url in line # 6
