pipeline {
  agent {
    docker { image 'node:latest' }
  }
  stages {
    stage('Install') {
      steps {
        // Pas besoin d'installer npm, il est déjà inclus dans l'image node:18-alpine
        sh 'npm --version'
        sh 'pwd' // Vérifiez le répertoire de travail actuel
        sh 'ls -la' // Liste les permissions des fichiers dans le répertoire actuel
        sh 'whoami' // Vérifiez l'utilisateur actuel
        sh 'npm install'
      }
    }
    stage('Test') {
      steps {
        // Exécuter les tests unitaires
        sh 'npm test'
      }
    }
  }
  post {
    always {
      // Collecter les résultats des tests et les archiver
      junit 'test-results/*.xml'
      archiveArtifacts 'test-results/*.xml'
    }
    success {
      echo "Les tests sont passés avec succès."
    }
    failure {
      echo "Les tests ont échoué. Vérifiez les résultats des tests pour plus d'informations."
    }
  }
}