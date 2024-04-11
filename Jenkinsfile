pipeline {
    agent none // Define no global agent, we will specify agents for each stage
    environment {
        DOCKER_IMAGE = "node:14-alpine" // Replace with the Docker image you want to use
        DOCKER_REGISTRY = '' // If using a private registry, specify its URL here
        DOCKER_CREDENTIALS_ID = 'IdDockerJenkins' // The ID of your Docker credentials in Jenkins
    }
    stages {
        stage('Clone repository') {
            agent any // This stage will use the default Jenkins agent
            steps {
                git 'https://github.com/KMBedw/TESTS-NODE.git'
            }
        }
        stage('Test') {
            agent {
                docker {
                    image "${env.DOCKER_IMAGE}"
                    args '-v $HOME/.npm:/root/.npm' // Cache les modules NPM si nécessaire.
                }
            }
            steps {
                sh 'npm install' // Installe les dépendances nécessaires pour les tests.
                sh 'npm test' // Exécute les tests Jest.
            }
        }
        post {
            always {
                junit 'test-results/test-results.xml' // Collecte et affiche les résultats de tests Jest dans Jenkins.
            }
            success {
                echo 'Tests passed.'
            }
            failure {
                echo 'Tests failed.'
            }
        }
        stage('Docker Build and Push') {
            when {
                branch 'main'
            }
            agent any // This can use the default Jenkins agent, Docker will be used just for building the image
            steps {
                script {
                    dockerImage = docker.build("myapp/${env.BUILD_ID}")
                    if("${env.DOCKER_REGISTRY}") {
                        docker.withRegistry("${env.DOCKER_REGISTRY}", "${env.DOCKER_CREDENTIALS_ID}") {
                            dockerImage.push()
                        }
                    } else {
                        dockerImage.push()
                    }
                }
            }
        }
    }
    post {
        success {
            echo 'Build and Test Stages Successful!'
        }
        failure {
            echo 'The build or test failed.'
        }
    }
}
