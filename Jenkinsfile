pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git url: "git 'https://github.com/ABHISHEK-KUMAR-14022001/node-todo-cicd.git'", branch: "master"
            }
        }
        stage("Build & Test"){
            steps{
                sh 'docker build -t node-app .'
            }
        }
         stage("Build & Test"){
            steps{
                sh 'docker run -d -p 8000:8000 --name node-app-todo node-app'
            }
        }
    }
}
