pipeline {
  agent {
    docker { image 'node:18-alpine' }
  }
  stages {
    stage('Version') {
      steps {
        sh 'node --version'
      }
    }
    stage('Install') {
      steps {
        // Définir un cache de npm dans le répertoire home de l'utilisateur 'node'
        sh 'npm config set cache /home/node/.npm --global'
        sh 'npm install'
      }
    }
  }
}
