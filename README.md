# swap-technical-skeleton

As a candidate, please clone this repo before your technical interview.

Please follow the instructions below to prepare the client and server before the interview - if your interview is server only or client only, please follow the instructions for the respective part.

# Preparing the Client

1. Run the following commands on the root folder to install the dependencies and start the development server

```bash
cd client
npm install
npm run dev
```

2. Open the browser and navigate to `http://localhost:5173/`

3. Make sure you see the Swap logo and the welcome message.

# Preparing the Server

1. Run the following commands on the root folder to install the dependencies and start the development server

```bash
cd server
npm install
npm run dev
```

2. Make sure you see the following output: Server running at port: 3000.

3. Navigate to `http://localhost:3000/` and make sure you see the "Hello World" message.

4. Make a POST request to the server with any body, for example:

```bash
curl -X POST http://localhost:3000/ -H "Content-Type: application/json" -d '{"message": "Hello from client"}'
```

Note: we recommand using [Postman](https://www.postman.com/) to make the POST request.
