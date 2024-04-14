pipeline {
  agent {
    docker { image 'node:16-alpine' }
  }
  stages {
    stage('Version') {
      steps {
        sh 'node --version'
      }
    }
    stage('Install') {
      steps {
        sh 'npm install'
      }
    }
  }
}