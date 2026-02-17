FROM node:16

# working dir
WORKDIR /usr/src/app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application
COPY . .

# Expose app port
EXPOSE 3000

# Start app
CMD ["npm", "start"]