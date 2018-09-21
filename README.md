# Docker cheatsheet
Collection of the most important Docker commands and explanations.


## Building an image from Dockerfile:

Docker build -command

`$ docker build --rm -t <name>:<optional-tag> <directory_with_dockerfile>`

* `--rm` removes intermediate containers
* `-t` is used to the container a name and an option tag. If tag is not specified it will be 'latest'

For example, if you want to create image from your current working directory, replace <directory_with_dockerfile> with '.'

https://docs.docker.com/engine/reference/commandline/build/

## Creating a container with specified image

Docker run -command. Creates a container with specified image

`$ docker run --rm -d -p 8080:8081 <IMAGE>`

* `--rm` Automatically removes the container when it exits
* `-p` Stands for 'publish'. First specifies host's port and then container's port that is published to the host
* `-d` Stands for 'detached'. Runs container as a daemon process (in the background, so it won't take up your terminal)

You can also add `--name <containerName>` if you want to identify your containers more easily

https://docs.docker.com/engine/reference/commandline/run/#extended-description

## Running commands in Docker container:

To access docker container's command line, run:

`$ docker exec -it <container_name>`

https://docs.docker.com/engine/reference/commandline/exec/

## Viewing your Docker containers

`$ docker ps`

Add `-a` flag if you want to see all of your images (default shows only _running_ containers).

https://docs.docker.com/engine/reference/commandline/ps/

## Viewing your Docker images

`$ docker images`

Add `-a` flag if you want to see all of your images (default hides intermediate images).

https://docs.docker.com/engine/reference/commandline/images/

## Killing containers

`$ docker kill <CONTAINER_ID>`

Kills container

https://docs.docker.com/engine/reference/commandline/kill/

## Removing dangling images

`$ docker image prune`

Removes unused docker images

https://docs.docker.com/engine/reference/commandline/image_prune/

See more information about dangling images: 
https://www.projectatomic.io/blog/2015/07/what-are-docker-none-none-images/
