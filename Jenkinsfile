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
        // Cette commande est inutile si vous exécutez déjà en tant que l'utilisateur 'node'
        // sh 'sudo chown -R 1000:1000 ~/.npm'
        
        // Configurez le cache de npm pour l'utilisateur 'node' sans sudo
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
      // Utilisez les chemins relatifs à partir de la racine du workspace Jenkins
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
