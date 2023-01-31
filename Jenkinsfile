pipeline{
    agent any
    //tools {nodejs "nodejs"}
    environment {
        DOCKERHUB_CREDENTIALS = credentials('username')
    }
    stages {
        stage('docker-build') {
            steps {
                sh 'docker build -t . owusufrancis100/nodeops:lts'
            }
        }

        stage('Login') {
            steps {
                sh 'docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
            }
        }
        stage('Push Image') {
            steps {
                sh 'docker push owusufrancis100/nodeops:lts'
            }
        }
    }

}