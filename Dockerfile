# Base image
FROM node:18-alpine as build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy all files
COPY . .

# Build the app
RUN npm run build

# Production stage
FROM caddy:2-alpine

# Copy built files to Caddy serve directory
COPY --from=build /app/dist /srv

# Copy Caddyfile configuration
COPY Caddyfile /etc/caddy/Caddyfile

# Expose ports
EXPOSE 80
EXPOSE 443

# Caddy runs automatically as entrypoint