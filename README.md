 # React Website Using Vite with Docker

## Prerequisites:
- Ensure Docker is installed on your local machine. You can download it from [Docker's official website](https://www.docker.com/products/docker-desktop).

## Steps to Set Up the React Website Locally Using Docker:

### 1. Clone the repository:
```bash
git clone https://github.com/mr12c/GodownFrontend.git
cd your-repository
```

### 2. Build the Docker image:
```bash
docker build -t your-react-vite-app .

```


### 3. run the container
```bash
docker run -p 3000:3000 your-react-vite-app
```
