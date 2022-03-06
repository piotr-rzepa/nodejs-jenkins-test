pipeline {

  agent any

  tools { nodejs "nodejs"}

  stages {
    stage('Install dependencies') {
      steps {
        sh 'npm ci'
      }
    }

    stage('Use linter') {
      steps {
        sh 'npm run lint'
      }
    }

    stage('Test using mocha') {
      steps {
        sh 'npm test'
      }
    }

    stage('Sonarqube analysis') {
      steps {
        script {
          scannerHome = tool 'sonarqube';
        }
        withSonarQubeEnv('sonarqube-docker') {
          sh "${scannerHome}/bin/sonar-scanner --version"
          sh "${scannerHome}/bin/sonar-scanner  -e -Dsonar.language=ts -Dsonar.projectKey=typescript-nodejs -Dsonar.sources=. -Dsonar.projectVersion=${BUILD_NUMBER}"
        }
      }
    }

    stage('Build project') {
      steps {
        sh 'npm run build'
      }
    }
  }
}