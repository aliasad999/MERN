# Default config file
create .env file in root of server
add key value pairs for 
PORT
ACCESS_TOKEN_SECRET
REFRESH_TOKEN_SECRET

you can generate access token by using terminal
write following command
** require('crypto').randomBytes(64).toString('hex') **



## Features

two dummy endpoints
getusers & post would not be accessible unless accesstoken is provided in header
Header content would be the following key value pair
Authorization = BEARER Access_token


## Testing

You can test the backend call via Postman or by installing a rest client global extension in VSCode