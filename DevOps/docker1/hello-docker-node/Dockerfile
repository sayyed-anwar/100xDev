# Use a small official Node image
FROM node:20-alpine

# Create and set working directory
WORKDIR /app

# Install only what we need for production
# Copy package files first to leverage Docker layer caching
COPY package*.json ./
RUN npm ci --omit=dev

# Copy the rest of the source code
COPY . .

# Make files owned by the non-root 'node' user for safety
RUN chown -R node:node /app
USER node

# Document the port the app listens on (for humans)
EXPOSE 3000

# Set production env
ENV NODE_ENV=production

# Optional healthcheck (hits /health)
HEALTHCHECK --interval=30s --timeout=3s \
  CMD wget -qO- http://localhost:3000/health || exit 1

# Start the app
CMD ["npm", "start"]
