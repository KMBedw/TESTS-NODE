pipeline {
  agent {
    docker { image 'node:18-alpine' }
  }
  stages {
    stage('Clean Workspace') {
      steps {
        // Nettoyer le répertoire node_modules pour éviter les conflits
        sh 'rm -rf node_modules/'
      }
    }
    stage('Install') {
      steps {
        // Exécuter npm install avec un niveau de log détaillé
        sh 'npm install --loglevel verbose'
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
