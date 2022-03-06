# NodeJS Jenkins

Simple web server written in NodeJS using Javascript (later moved to Typescript) used as a dummy project for learning basics of CI/CD with Jenkins and SonarQube.

## Technologies
* Typescript v4.6.2
* Node v16.0.0
* Mocha v9.2.0

## Required Jenkins plugins
[NodeJS Plugin](https://plugins.jenkins.io/nodejs/) </br>
[SonarQube Scanner for Jenkins](https://plugins.jenkins.io/sonar/)

Add SonarQube server in global configuration 
Remember to put `<container_name>:<SONARQUBE_PORT>` in 
"Server URL", e.g. `http://sonarqube:9000`

Add SonarQube Scanner installation in global tools configuration, along with NodeJS installer

## Jenkins

Jenkins file consist of several common steps for getting a better grip on how to configure project pipeline, fetch repository from SCM, create NodeJS or Docker agents and integrate Jenkins with external services like SonarQube.

Steps:
1. Install dependencies
2. Lint the project 
3. Run tests
4. Analyze code using SonarQube
5. Build project

## Configuration
`SONARQUBE_USERNAME`: Name of SonarQube account </br>
`SONARQUBE_PASSWORD`: Password of given SonarQube user </br>
`POSTGRES_USERNAME`: Name of postgres user </br>
`POSTGRES_PASSWORD`: Password of given postgres user </br>
`POSTGRES_PORT`:     Port the Postgres will be available on </br>
`JENKINS_PORT`:      Port the Jenkins will be available on </br>
`SONARQUBE_PORT`:    Port the SonarQube will be available on

Create `.env` file in root directory with those variables in order to configure services inside `docker-compose.yml`
## How to run

Verify docker-compose.yml has valid configuration:
```bash
# in the same folder as docker-compose.yml
$ docker-compose config
```

Spin up all services using docker-compose:
```bash
# in the same folder as docker-compose.yml
$ docker-compose --env-file <path-to-env-file> up -d
```

Remember to retrieve Jenkins' initial password from container logs or get this directly by executing command inside container. It is required in order to unlock Jenkins for the first time.

```bash
docker logs jenkins-blue-ocean # and find the password
#or 
$ docker exec -it jenkins-blueocean bash "cat /var/jenkins_home/secrets/initialAdminPassword"
```

Jenkins will be available at `http://localhost:<JENKINS_PORT>` </br>
SonarQube server will be available at `http://localhost:<SONARQUBE_PORT>`

# Removing stack

```bash
# Add -v flag to remove all created volumes
$ docker-compose down -v
```

