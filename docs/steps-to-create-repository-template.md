# 🤷🏻‍♂️ How was this repository created? 

I follow these steps to create this repository template with this architecture

## 💻 Root npm project

```bash
# create project directory
$ mkdir nodejs-hexagonal-ddd-skeleton
$ cd nodejs-hexagonal-ddd-skeleton

# Init git repository
$ git init .

# Create npm project
$ npm init -y

# Then Update name, description, keywords and author in package.json. For example:
{
  name: "nodejs-hexagonal-ddd-skeleton",
  description: "Node.js Hexagonal Architecture + DDD:Repository template for your Node.js backend projects, designed for microservices",
  author: "Lionel gt",
  keywords: ["Node.js","nodejs","hexagonal architecture","ddd","skeleton","template","NestJs","TypeScript"],
}
```


## 🧠 Domain
Follow this steps to create any independent workspaces like domain
```bash
# Add domain module as un independent workspace
$ npm init -y -workspace domain

# Then update name, description, main and author in package.json. For example:
{
  name: "@skeleton/domain"
  "main": "./dist/index.js",
  description: "Domain: Isolated module that contains the business logic."
}
```

## 👉 Infrastructure: Entry Points

Follow this steps to create any independent workspaces in infrastructure/entry-points

### 🌐 Rest-api
```bash
# Add rest-api module as un independent workspace
$ npm init -y -workspace infrastructure/entry-points/rest-api

# Then update name, description, main and author in package.json. For example:
{
  name: "@skeleton/rest-api"
  "main": "./dist/index.js",
  description: "Rest-api: Infrastructure module where we define our REST APIs"
}

#Add @skeleton/domain as a dependency of @skeleton/rest-api 
#Because we will need to execute the business logic to respond to our APIs
$ npm install @skeleton/domain --workspace=infrastructure/entry-points/rest-api
#Dependencies will look like:
{
  "name": "@skeleton/rest-api",
  "dependencies": {
    "@skeleton/domain": "^1.0.0"
  }
}
```

### 🦻 Kafka-listener
```bash
# Add kafka-listener module as un independent workspace
$ npm init -y -workspace infrastructure/entry-points/kafka-listener

# Then update name, description, main and author in package.json. For example:
{
  name: "@skeleton/kafka-listener"
  "main": "./dist/index.js",
  description: "Kafka-listener: Infrastructure module where we define our consumers that subscribes to (reads and processes) events."
}

#Add @skeleton/domain as a dependency of @skeleton/kafka-listener
#Because we will need send to process our events. 
$ npm install @skeleton/domain --workspace=infrastructure/entry-points/kafka-listener
#Dependencies will look like:
{
  "name": "@skeleton/kafka-listener",
  "dependencies": {
    "@skeleton/domain": "^1.0.0"
  }
}
```

## 👈 Infrastructure: Driven Adapters

Follow this steps to create any independent workspaces in infrastructure/driven-adapters

### 🔀 Http-client
```bash
# Add http-client module as un independent workspace
$ npm init -y -workspace infrastructure/driven-adapters/http-client

# Then update name,description,main and author in package.json. For example:
{
  name: "@skeleton/http-client"
  "main": "./dist/index.js",
  description: "Http-client: Infrastructure module where we define our  clients to call external APIs."
}

#Add @skeleton/domain as a dependency of @skeleton/http-client 
#Because we need to implement our port adapters that were defined in our domain.
$ npm install @skeleton/domain --workspace=infrastructure/driven-adapters/http-client
#Dependencies will look like:
{
  "name": "@skeleton/http-client",
  "dependencies": {
    "@skeleton/domain": "^1.0.0"
  }
}
```

### ⛁ Mongoose-repository
```bash
# Add mongoose-repository module as un independent workspace
$ npm init -y -workspace infrastructure/driven-adapters/mongoose-repository

# Then update name,description,main and author in package.json. For example:
{
  name: "@skeleton/mongoose-repository"
  "main": "./dist/index.js",
  description: "Mongoose-repository: Infrastructure module where we model our application data"
}

#Add @skeleton/domain as a dependency of @skeleton/http-client 
#Because we need to implement our port adapters that were defined in our domain.
$ npm install @skeleton/domain --workspace=infrastructure/driven-adapters/mongoose-repository
#Dependencies will look like:
{
  "name": "@skeleton/mongoose-repository",
  "dependencies": {
    "@skeleton/domain": "^1.0.0"
  }
}
```

## ⚙️ Application
```bash
# Add application module as un independent workspace. This will be built with NestJS framework

#Install @nestjs/cli
$ npm install -D @nestjs/cli

#Generate application with @nestjs/cli
$ nest generate application application

#Then update name, description and author in package.json, for example:
{
  name: "@skeleton/application"
  description: "Application: A module that integrates domain and infrastructure components to serve as a Node.js microservice solution."
}

#Manually add application as a workspace in root package.json 
{
    "name": "nodejs-hexagonal-ddd-skeleton",
    "workspaces": [
       "domain",
       "infrastructure/entry-points/rest-api",
       "application" #<---
    ]
}

#Add @skeleton/rest-api as a dependency of @skeleton/application
#Because we will need to import and then expose our APIs
$ npm install @skeleton/rest-api --workspace=application
#Dependencies will be like:
{
  "name": "@skeleton/application",
  "dependencies": {
    "@skeleton/rest-api": "^1.0.0"
  }
}

#Add @skeleton/kafka-listener as a dependency of @skeleton/application
#Because we will need send to process our events.
$ npm install @skeleton/kafka-listener --workspace=application
#Dependencies will be like:
{
  "name": "@skeleton/application",
  "dependencies": {
    "@skeleton/kafka-listener": "^1.0.0"
  }
}

#Add @skeleton/http-client as a dependency of @skeleton/application
#Because we will need to import our clients to call external APIs
$ npm install @skeleton/http-client --workspace=application
#Dependencies will look like:
{
  "name": "@skeleton/application",
  "dependencies": {
    "@skeleton/http-client": "^1.0.0"
  }
}

#Add @skeleton/mongoose-repository as a dependency of @skeleton/application
#Because we will need to import our repository to operate with DB
$ npm install @skeleton/mongoose-repository --workspace=application
#Dependencies will look like:
{
  "name": "@skeleton/application",
  "dependencies": {
    "@skeleton/mongoose-repository": "^1.0.0"
  }
}
```

## ♻ Build Cycle Configuration
* Add typescript dependency `$ npm install typescript -D`
* Copy base [tsconfig.json](https://github.com/lionelgt/nodejs-hexagonal-ddd-skeleton/blob/main/tsconfig.json)
* Use Nx to manage build system: `npx nx init`. Check the generated [nx.json](https://github.com/lionelgt/nodejs-hexagonal-ddd-skeleton/blob/main/nx.json)
* Define script of clean and build on each workspaces.
  ```json
    {
        "scripts": {
            "clean": "rm -rf dist",
            "build": "npm run clean && tsc"
        }
    }
  ```
* Define script of clean, build and start in root project
  ```json
    {
        "scripts": {
            "clean": "nx run-many -t clean",
            "build": "nx run-many -t build",
            "start": "nx run @skeleton/application:start"
        }
    }
  ```