## FULLSTACK SKILLS ASSESSMENT PROJECT

Whole project was developing on docker so you need to install [docker](https://docs.docker.com/engine/install/ubuntu/) and [docker-compose](https://docs.docker.com/compose/install/). To this project I'm considering that you can [manage Docker as a non-root user](https://docs.docker.com/engine/install/linux-postinstall/).

### Front Application

To run web client please execute de next command

```sh
cd client
docker-compose up
```

### Backend Application

To run graphql api server please execute de next command

```sh
cd server
docker-compose up
```

### FAQ

- How do I deattach my terminal to container?

  Add `-d` parameter to `docker-compose` command ex: `docker-compose -d`

- Is it right if bootstrap time is taking too much time?

  The first time that you bootstrap the app it's completely normal and also if you are stuck in this step, you need to save any file to activate the hot-reload

```sh
[11:14:20 PM] File change detected. Starting incremental compilation...

[11:14:20 PM] Found 0 errors. Watching for file changes.

```

- How can I watch the logs?

  The command to watch the logs is `docker logs <container_name>` also you can add follow instruction like `docker logs -f <container_name>` for these services the commands are

  ```sh
  docker logs -f clip_client
  docker logs -f clip_server
  ```
