# ----------- Stage 1: Builder -----------

# Use of NodeJS 18 Alpine Variant for Smaller Image Size and Faster Builds
FROM node:18-alpine AS builder

# Setup of the Working Directory Inside the Container
WORKDIR /app

# Global Installation of PNPM Package Manager
RUN npm install -g pnpm

# Copying of Monorepository Configuration Files (enables the caching of installs)
COPY pnpm-workspace.yaml ./
COPY package.json pnpm-lock.yaml* ./
COPY .npmrc* ./

# Copying the Rest of the Monorepository Files (apps, packages, and so on)
COPY . .

# Installation of Dependencies with Exact Versions
RUN pnpm install --frozen-lockfile

# Changing of Working Directory to the NextJS Client Application
WORKDIR /app/apps/client

# Build of the Application
RUN pnpm build

# ----------- Stage 2: Runtime -----------

# Use of a Fresh, Minimal NodeJS 18 Alpine Image for Serving Static Files
FROM node:18-alpine AS runner

# Setup of Working Directory for the Runtime Container
WORKDIR /app

# Installation of a Lightweight Static File Server
RUN npm install -g http-server

# Copying of the Statically Exported NextJS Site from the Builder Stage
COPY --from=builder /app/apps/client/out ./out

# Expose Port 3000 to the Outside World (for local development or reverse proxy)
EXPOSE 3000

# Start the Static Server to Serve Files from the Output Directory on Port 3000
CMD ["http-server", "out", "-p", "3000"]
