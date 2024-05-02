pipeline {
    agent any

    environment {
        NGINX_SERVER = $NGINX_SERVER
    }

    stages {
        stage('Build Foxy Website') {
            steps {
                script {
                    if (!fileExists('node_modules')) {
                        sh 'npm install'
                    }
                }
                sh 'npm run build'
            }
        }
    stage('Deploy to NGINX') {
            steps {
                script {
                    sh "scp -r ./build/* ${NGINX_SERVER}"
                }
            }
        }
    }
}