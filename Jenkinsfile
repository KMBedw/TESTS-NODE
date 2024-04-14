pipeline {
  agent {
    docker { image 'node:16-alpine' }
  }
  stages {
    stage('Install') {
      steps {
        sh 'npm install'
      }
    }
    stage('Test') {
      steps {
        sh 'npm test'
      }
    }
  }
  post {
    always {
      // Assurez-vous que le nom de fichier correspond à celui défini dans le package.json
      junit 'test-results/test-results.xml'
      archiveArtifacts 'test-results/test-results.xml'
    }
    success {
      echo "Les tests sont passés avec succès."
    }
    failure {
      echo "Les tests ont échoué. Vérifiez les résultats des tests pour plus d'informations."
    }
  }
}
