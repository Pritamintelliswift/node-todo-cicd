pipeline {
    agent any

    stages {
        stage("Checkout") {
            steps {
                git url: 'https://github.com/ABHISHEK-KUMAR-14022001/node-todo-cicd.git', branch: 'master'
            }
        }
        stage("Build & Test"){
            steps{
                bat 'docker build -t abhishekkumar1402/node-app .'
            }
        }
        stage("Push on Dockerhub"){
            steps{
            script{
               withCredentials([string(credentialsId: 'Doc-connect', variable: 'DockerSecret')]) {
                env.DOCKER_USERNAME = 'abhishekkumar1402'
                env.DOCKER_PASSWORD = "${DockerSecret}"
                bat 'docker login -u %DOCKER_USERNAME% -p %DOCKER_PASSWORD%'
                bat 'docker push abhishekkumar1402/node-app'
               }
            }
            }
        }
        stage("Deploy"){
            steps{
                bat 'docker run -d -p 8000:8000 --name node-app-todo3 abhishekkumar1402/node-app'
            }
        }
    }
}
