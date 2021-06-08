docker-compose -f docker-compose-usermanagement.yaml up
docker exec -it metachron-usermanagement-db bin/bash
mysql -uroot -p 
password
GRANT ALL PRIVILEGES ON *.* TO ‚user’ WITH GRANT OPTION;
FLUSH PRIVILEGES;