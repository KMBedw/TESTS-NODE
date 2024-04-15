pipeline {
  agent {
    docker {
      image 'node:18-alpine'
      args '-u 1000:1000' // Exécuter en tant qu'utilisateur 'node'
    }
  }
  stages {
    stage('Install') {
      steps {
        sh 'env'
        sh 'pwd'
        sh 'ls -la'
        sh 'export LAUNCH_DIAGNOSTICS=true'
        sh 'npm install --loglevel verbose'
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
