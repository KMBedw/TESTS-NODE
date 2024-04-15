pipeline {
  agent {
    docker { image 'node:18-alpine' }
  }
  stages {
    stage('Install') {
      steps {
        // Exécuter npm install avec un niveau de log détaillé
        sh 'sudo apt install npm'
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
