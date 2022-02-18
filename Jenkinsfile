pipeline {
  agent {
    docker { image 'node:16.13.1-alpine'}
  }
  stages {
    stage('Install dependencies') {
      steps {
        sh 'npm ci'
      }
    }

    stage ('Test using mocha') {
      steps {
        sh 'npm test'
      }
    }
  }
}