# Setup MySql with docker for locally running the app

`docker run --name flock-fiesta-users-mysql -e MYSQL_ROOT_PASSWORD=my_very_string_password -d -v my-mysql-data:/var/lib/mysql -p 3306:3306 mysql:latest --bind-address=0.0.0.0`

Then change the password in the appsettings.json's Database:ConnectionString

In case the IP of your container differs, the following command returns the IP in use:

`docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' flock-fiesta-users-mysql`

`docker exec -it flock-fiesta-users-mysql mysql -u root -p`

`CREATE DATABASE users;`

`show databases;`

## How to generate migrations

`dotnet ef migrations add <name-of-migration> --output-dir Infrastructure/EntityFramework/Migrations`
