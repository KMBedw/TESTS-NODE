pipeline {
  agent any
  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }
    stage('Test') {
      steps {
        // Assurez-vous que npm est déjà installé ou installez-le sans sudo si nécessaire
        sh 'npm install'
        sh 'npm test'
      }
    }
  }
}
