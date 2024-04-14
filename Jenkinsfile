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
        // Cette commande est retirée car elle n'est pas nécessaire et pourrait causer des erreurs
        // sh 'sudo chown -R 1000:1000 ~/.npm'
        sh 'npm --version'
        sh 'node --version'
        // sh 'npm config set cache /home/node/.npm --global'
        // sh 'npm install'
      }
    }
//     stage('Test') {
//       steps {
//         sh 'npm test'
//       }
//     }
//   }
//   post {
//     always {
//       junit 'test-results/*.xml'
//       archiveArtifacts 'test-results/*.xml'
//     }
//     success {
//       echo "Les tests sont passés avec succès."
//     }
//     failure {
//       echo "Les tests ont échoué. Vérifiez les résultats des tests pour plus d'informations."
//     }
  }
}
