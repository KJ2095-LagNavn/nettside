## Install Project
1. Install [LTS node](https://nodejs.org/en/download/) 
```bash
# Check version (v20.11.0)
node --version
# Install npm command (v10.4.0)
npm install -g npm
# Check version 
npm --version
```
2. Install vue v10.4.0
```bash
npm install -g @vue/cli
# Check version (v5.0.8)
vue --version
```

3. You need git lfs to clone the project. You can download it from https://git-lfs.github.com/

4. Clone the project to your local machine.
```bash
git clone https://github.com/KJ2095-LagNavn/nettside.git
```


## Run Project
1. Go to the project folder

2. Install the project dependencies
```bash
npm install
```

4. Build the project
```bash
npm run build
```

5. Run the project
```bash
cd app/hello-world
npm run serve
```

5. Open the project in your browser at http://localhost:8080/

## Other commands
Command to fix eslint/prettier complie error: 
```bash
cd app/hello-world
npm run lint --fix
```
