## How I created this skeleton?

I follow these steps to create this repository template with this architecture

### Npm Root Workspace

```bash
# create project directory
$ mkdir nodejs-hexagonal-ddd-skeleton
$ cd nodejs-hexagonal-ddd-skeleton

# init git repository
$ git init .

# create npm project
$ npm init -y

# then Update name, description, keywords and author in package.json, for example:
{
  name: "nodejs-hexagonal-ddd-skeleton",
  description: "Node.js Hexagonal Architecture + DDD:Repository template for your Node.js backend projects, designed for microservices",
  author: "Lionel gt",
  keywords: ["Node.js","nodejs","hexagonal architecture","ddd","skeleton","template","NestJs","TypeScript"],
}
```


### Domain
Follow this steps to create any independent workspaces like domain
```bash
# Add domain module as un independent workspace
$ npm init -y -workspace domain

# then update name, description, main and author in package.json, for example:
{
  name: "@skeleton/domain"
  "main": "./dist/index.js",
  description: "Domain: Isolated module that contains the business logic."
}
```

### Infrastructure: Entry Points
Follow this steps to create any independent workspaces in infrastructure/entry-points
```bash
# Add rest-api module as un independent workspace
$ npm init -y -workspace infrastructure/entry-points/rest-api

# then update name, description, main and author in package.json, for example:
{
  name: "@skeleton/rest-api"
  "main": "./dist/index.js",
  description: "Rest-api: Infrastructure module where we define our REST APIs"
}


#Add @skeleton/domain as a dependency of @skeleton/rest-api 
#Because we will need to execute the business logic to respond to our APIs
$ npm install @skeleton/domain --workspace=infrastructure/entry-points/rest-api
#Dependencies will be like:
{
  "name": "@skeleton/rest-api",
  "dependencies": {
    "@skeleton/domain": "^1.0.0"
  }
}
```

### Infrastructure: Driven Adapters
Follow this steps to create any independent workspaces in infrastructure/driven-adapters
```bash
# Add http-client module as un independent workspace
$ npm init -y -workspace infrastructure/driven-adapters/http-client

# then update name,description,main and author in package.json, for example:
{
  name: "@skeleton/http-client"
  "main": "./dist/index.js",
  description: "Http-client: Infrastructure module where we define our  clients to call external APIs."
}


#Add @skeleton/domain as a dependency of @skeleton/http-client 
#Because we need to implement our port adapters that were defined in our domain.
$ npm install @skeleton/domain --workspace=infrastructure/driven-adapters/http-client
#Dependencies will be like:
{
  "name": "@skeleton/http-client",
  "dependencies": {
    "@skeleton/domain": "^1.0.0"
  }
}
```

### Application
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
#Because we will need to import then expose our APIs
$ npm install @skeleton/rest-api --workspace=application
#Dependencies will be like:
{
  "name": "@skeleton/application",
  "dependencies": {
    "@skeleton/rest-api": "^1.0.0"
  }
}

#Add @skeleton/http-client as a dependency of @skeleton/application
#Because we will need to import our clients to call external APIs
$ npm install @skeleton/http-client --workspace=application
#Dependencies will be like:
{
  "name": "@skeleton/application",
  "dependencies": {
    "@skeleton/http-client": "^1.0.0"
  }
}
```