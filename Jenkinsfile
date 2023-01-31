pipeline {
    agent any
    //tools {nodejs "nodejs"}
    environment {
        DOCKERHUB_CREDENTIALS = credentials('username')
    }
    stages{
        stage('Greetings') {
            sh 'echo Hello World'
        }

        //stage('docker-build') {
        //    steps {
        //        withCredentials([file(credentialsId: 'node-ops', variable: 'secretEnv')]) {
        //        sh 'cp $secretEnv .env'
        //        sh 'docker build . -t owusufrancis100/nodeops:lts'
        //        }
        //    }
        //}

    //stage('Login') {
    //    steps {
    //        sh 'docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
    //    }
    //}
    //stage('Push Image') {
    //    steps {
    //        sh 'docker push owusufrancis100/nodeops:lts'
    //    }
    //}
    }

}