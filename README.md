# Video and Image Processing Microservice API

This microservice API provides two endpoints for video and image processing.

## Endpoints

### 1. Converting Endpoint

#### Endpoint URL

`/converting`

#### Description
Receives a video file and returns it converted to the webm format.

#### Request
- **Method:** POST
- **Headers:** None
- **Body:**
  - **File:** Video file to be converted (Supported formats: mp4, mkv, etc.)

#### Response
- **Content Type:** video/webm
- **Body:** Converted video in webm format

### 2. Formatting Endpoint

#### Endpoint URL

`/formatting`


#### Description
Receives an image file, size (integer), and format, and returns the image in the specified format and size.

#### Request
- **Method:** POST
- **Headers:** None
- **Body:**
  - **File:** Image file to be formatted (Supported formats: jpeg, png, etc.)
  - **Fields:**
    - `size`: Integer representing the desired size.
    - `format`: String representing the desired format (e.g., "jpeg", "png").

#### Response
- **Content Type:** image/webp
- **Headers:**
  - `Content-Disposition`: inline; filename="<output_filename>"
- **Body:** Formatted image in webp format

## Getting Started

To run the microservice, follow these steps:

1. Install dependencies:
   ```bash
   npm install

2. Start the server:
   ```bash
   npm start

3. The server will be running at `http://localhost:3000`.

## Dependencies
-`Express`: Fast, unopinionated, minimalist web framework for Node.js.
-`express-formidable`: A middleware for handling forms with file uploads in Express.
-`fluent-ffmpeg`: A fluent API to FFMPEG for Node.js.
-`sharp`: High-performance image processing library for Node.js.

## Code Structure
The server code is organized as follows:

server_modules/converting.js: Module for converting video files to webm format.
server_modules/formating.js: Module for formatting image files based on size and format.

