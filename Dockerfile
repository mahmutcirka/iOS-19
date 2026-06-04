# Use an official Nginx image for static hosting
FROM nginx:alpine

# Copy the static website files to the nginx html directory
COPY ./src /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
