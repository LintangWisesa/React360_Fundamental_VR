1. Install React 360 CLI:

    ```bash
    $ npm install -g react-360-cli
    ```

2. Create React 360 project & run it:

    ```bash
    $ react-360 init YourAppName
    $ cd YourAppName
    $ npm start
    ```

    or

    ```bash
    $ npx react-360-cli init YourAppName
    $ cd YourAppName
    $ npm run start
    ```

    To see your project, open your web browser and navigate to http://localhost:8081/index.html. It may take some time to load at first – the bundler is doing some initial crawling of the filesystem. After the first load, successive loads are much faster, even when you change your code.

3. Go to ```index.js``` & start hacking!

4. If there is an error:

    ```bash
    error: cannot find module 'metro/src/blacklist'
    ```

    Go to ```rn-cli.config.js``` edit this line:

    ```javasript
    // blacklist = require('metro/src/blacklist');
    // change it to:
    
    blacklist = require('metro-config/src/defaults/blacklist');
    ```