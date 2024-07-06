This is a web app where job seekers can find jobs.

Technologies Used:
1. ReactJs
2. NodeJs
3. ExpressJs
4. Mongodb

# Backend Setup
1. Create a .env file and it should contain all th below mentioned configurations.
An example config looks like:

```
PORT=3000
JWT_SECRET_KEY=xxxxxxx
JWT_EXPIRE=7d
COOKIE_EXPIRE=5
FRONTEND_URL=http://localhost:3000
MONGODB_CLOUD_URL=mongo+srv://
CLOUDINARY_CLIENT_NAME=xxxxxxx
CLOUDINARY_CLIENT_API=xxxxxxxx
CLOUDINARY_CLIENT_SECRET=xxxxx
```

2. Now move to the backend folder.
3. Run following commands:
```
npm i
npm run dev
```

# Frontend
