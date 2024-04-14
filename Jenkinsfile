pipeline {
  agent {
    docker { image 'node:18-alpine' }
  }
  stages {
    stage('Install') {
      steps {
        // Définit le cache de npm pour cette session sans modifier la configuration globale
        sh 'NPM_CONFIG_CACHE=/home/node/.npm npm install'
      }
    }
    stage('Test') {
      steps {
        sh 'npm test'
      }
    }
  }
}
