FROM node:18 AS build
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy all frontend source
COPY . .

# Build static files
RUN npm run build

# Stage 2: Nginx for serving built files
FROM nginx:alpine

# Copy built files to Nginx html folder
COPY --from=build /app/build /usr/share/nginx/html

# Copy custom nginx config (important for API proxy)
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 3000
