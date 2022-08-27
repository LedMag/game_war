## Getting started

### Creation
Run the following command specifying the image name and the project directory to create the image:
docker build -t [NAME_OF_FUTURE_IMAGE] [DIRECTORY_OF_PROJECT]

For example: 
``` sh
$ docker build -t project_image .
```


### Running
Run the following command specifying the port, the container name, and the name of the image created earlier to create a container:
launching docker -p [PORT:PORT] --name [NAME_OF_FUTURE_CONTAINER] -d [NAME_OF_IMAGE]

For example: 
``` sh
$ docker run -p 8080:8080 --name project_container -d project_image
```


### The required project structure:

```
project
└─folder of the page
│ └─SamplePage.md
│ └─images
│   └─image.(png, jpg, jpeg)
│
└─.dockeriognor
└─Dockerfile
└─package.json
└─index.HTML
└─index.js
└─style.css
└─nginx.conf
```

### Path to images
In Markdown files, the path to the image should lead to the images folder, which should be located in the folder of the future page, as shown in the directory structure. 

For example: 
``` Markdonw
![picture.png](./images/picture.png)
```

### Changing ports

To change the ports, change the values indicating the ports in the files: Dockerfile, nginx.conf, and also specify the new ports "-p [YOUR_PORT:YOUR_PORT]" in the container run command.

### Adding new page

To add new openapi or asyncapi pages to an image when creating it, add "RUN node main" to the Dockerfile file after the line "RUN node main.js" next line:
START the main node.js [URL] "[NAME_OF_EXISTED_FOLDER]" "[NAME_OF_FUTURE_PAGE]"

For example: 
``` Dockerfile
RUN the main node.js https://petstore.swagger.io/v2/swagger.json "folder_of_doc_page" "new page"
```

The number of rows is not limited.
