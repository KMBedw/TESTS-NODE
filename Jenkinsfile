pipeline {
  agent {
  docker {
    image 'node:16-alpine'
    args '-u node'
  }
}
  stages {
    stage('Install') {
      steps {
        sh 'sudo chown -R 1000:1000 ~/.npm'
        sh 'npm config set cache /home/node/.npm --global'

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
