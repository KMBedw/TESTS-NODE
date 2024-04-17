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
        sh 'npm install'
        sh 'npm test'
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
  }
}
